(function() {
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
    
    // Create a <style> element and add it to the page
    const style = document.createElement('style');
    style.textContent = darkModeCSS;
    document.head.append(style);
  })();
  