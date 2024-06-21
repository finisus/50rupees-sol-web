document.addEventListener('DOMContentLoaded', function() {
  const audio = new Audio('./metadata/arab50CentSong.mp3');
  audio.loop = true;
  audio.volume = 1.0;
  
  const landingPage = document.getElementById('landingPage');
  const closeLandingBtn = document.getElementById('closeLandingBtn');
  const mainPage = document.getElementById('mainPage');

  landingPage.style.display = 'flex';
  mainPage.style.display = 'none';

  closeLandingBtn.addEventListener('click', function() {
    audio.play().catch(error => {
      console.log("Autoplay was prevented. Please interact with the page to play audio.");
    });

    landingPage.style.display = 'none';
    mainPage.style.display = 'flex';
  });

  const buyBtn = document.getElementById('buyBtn');
  buyBtn.addEventListener('click', function() {
    window.open('', '_blank');
  });
  const chartBtn = document.getElementById("chartBtn");
  chartBtn.addEventListener('click', function() {
    window.open('https://dexscreener.com/solana/', '_blank');
  });
  const twitterBtn = document.getElementById("twitterBtn");
  twitterBtn.addEventListener('click', function() {
    window.open('https://x.com/', '_blank');
  });
  const telegramBtn = document.getElementById("telegramBtn");
  telegramBtn.addEventListener('click', function() {
    window.open('https://t.me/', '_blank');
  });

  const copyButton = document.getElementById('copyCaBtn');
  const textToCopy = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
  copyButton.addEventListener("click", async () => {
    try {
      // Try the modern Clipboard API first (if supported)
      await navigator.clipboard.writeText(textToCopy);
      console.log("Text copied successfully using Clipboard API");
      alert("Contract copied successfully!");
    } catch (err) {
      // If Clipboard API fails, use the legacy approach
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      textArea.style.position = "fixed"; // Hide element off-screen
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      console.log("Text copied successfully using legacy approach");
      alert("Contract copied successfully!");
    }
  });
});