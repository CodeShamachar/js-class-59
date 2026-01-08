let customMenu = document.querySelector('.wrapper');
let shareSubMenu = document.querySelector('.share-menu');


window.addEventListener('contextmenu', function(event){
  event.preventDefault();

  let mouseX = event.clientX;
  let mouseY = event.clientY;

  let winWidth = window.innerWidth;
  let winHeight = window.innerHeight;

  let menuWidth = customMenu.offsetWidth;
  let menuHeight = customMenu.offsetHeight;



  if (mouseX + menuWidth > winWidth)  {

    mouseX = winWidth - menuWidth - 5;
    
  }

  if (mouseY + menuHeight > winHeight) {
    mouseY = winHeight - menuHeight - 5;
  }

  if (mouseX + menuWidth + shareSubMenu.offsetWidth > winWidth) {
      shareSubMenu.style.left = "-200px";
      shareSubMenu.style.right = '';
      
    
  } else {
      shareSubMenu.style.left = '';
      shareSubMenu.style.right = "-200px";
    
  }


  customMenu.style.left = mouseX + 'px';
  customMenu.style.top = mouseY + 'px';
  customMenu.style.visibility =  'visible'

})


document.addEventListener('click', ()=>{
  customMenu.style.visibility =  'hidden'
})