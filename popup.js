
function dark() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: toggleDarkMode
    });
  });
};
  
  function toggleDarkMode() {
    const darkModeCSS = `
      * {
        background-color: #121212 !important;
        color: #e0e0e0 !important;
        border-color: #333 !important;
      }
      img, video {
        filter: brightness(0.8) contrast(1.2) !important;
      }
      a {
        color: #bb86fc !important;
      }
    `;
    
    const existingStyle = document.getElementById('dark-mode-style');
    
    if (existingStyle) {
      existingStyle.remove();
    } else {
      const style = document.createElement('style');
      style.id = 'dark-mode-style';
      style.textContent = darkModeCSS;
      document.head.append(style);
    }
  }
  