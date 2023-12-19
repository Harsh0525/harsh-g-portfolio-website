function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

function openLinkInNewPage() {
  // Replace 'your_link_url' with the actual URL you want to open in a new page
  var linkUrl = 'your_link_url';
    
  // Open the link in a new tab/window
  window.open(linkUrl, '_blank');
}
