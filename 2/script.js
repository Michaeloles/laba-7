window.addEventListener('scroll', function() {
    // console.log(page2.getBoundingClientRect().top);
    if( page2.getBoundingClientRect().top <= 0){
        button_up.style.opacity = "100%";
    }
    else{
        button_up.style.opacity = 0;
    }

  });

  const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    document.querySelector('.header-mobile').style.transform = "translateX(0)";
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    document.querySelector('.header-mobile').style.transform = "translateX(100vw)";
  }
});

function count(len){
  count_chars.innerHTML = len+"/5000";
}