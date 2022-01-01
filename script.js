// Scroll Rotate //


const logoCircle = document.querySelector('.logo-circle');
const svgGear = document.querySelector('.gear')
const sliderBtn = document.querySelectorAll('.slide a');


window.addEventListener('scroll', () => {
  logoCircle.style.transform = `rotate(${window.scrollY / 10}deg)`
  svgGear.style.transform = `rotate(${window.scrollY / 10}deg)`
})



// Slider //


var slideIndex = 1;

var myTimer;

var slideshowContainer;

var counter = document.querySelector('.counter')

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
})



function plusSlides(n){
    clearInterval(myTimer);
    if (n < 0){
      showSlides(slideIndex -= 1);
    } else {
     showSlides(slideIndex += 1); 
    }
  
  
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 5800);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 5800);
  }
}


function currentSlide(n){
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(n + 1)}, 5800);
    showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.querySelectorAll('.slider-nav__btns button');
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].className = slides[i].className.replace(" on", "");
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" on", "");
  }
  slides[slideIndex-1].className += " on";
  dots[slideIndex-1].className += " on";
  counter.textContent = '0' + slideIndex
}


resume = () =>{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 5800);
}


// Swipe Events //


let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

const gestureZones = document.querySelectorAll('.slide')

gestureZones.forEach(zone => {
    zone.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
    }, false);
})

gestureZones.forEach(zone => {
    zone.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        handleGesture();
    }, false); 
})


function handleGesture() {
    if (touchendX <= touchstartX) {
        plusSlides(1)
    }
    
    if (touchendX >= touchstartX) {
        plusSlides(-1)
    }
}



// Vievport Events // 



function checkScroll(e) {

    const windowHeight = window.innerHeight    

      // Pico-Sure // 
     
      const sectionPicoSure = document.querySelector('section.pico-sure')
      const sectionPicoSureTop = Math.round(sectionPicoSure.getBoundingClientRect().top)
      const sectionPicoSureHeight = Math.round(sectionPicoSure.getBoundingClientRect().height)
     
      if (window.innerWidth > 1024) {
        if (sectionPicoSureTop + (sectionPicoSureHeight / 1.25) < windowHeight) {
          setTimeout(() => {
            sectionPicoSure.classList.add('visible')
          }, 500);
        }
      }
      if (window.innerWidth < 1024) {
        if (sectionPicoSureTop + (sectionPicoSureHeight / 3.5) < windowHeight) {
          setTimeout(() => {
            sectionPicoSure.classList.add('visible')
          }, 500);
        }
      }


     // Hybrid // 
     
      const sectionHybrid = document.querySelector('section.hybrid')
      const sectionHybridTop = Math.round(sectionHybrid.getBoundingClientRect().top)
      const sectionHybridHeight = Math.round(sectionHybrid.getBoundingClientRect().height)
     
      if (window.innerWidth > 1024) {
        if (sectionHybridTop + (sectionHybridHeight) < windowHeight) {
          setTimeout(() => {
            sectionHybrid.classList.add('visible')
          }, 500);
        }
      }
      if (window.innerWidth < 1024) {
        if (sectionHybridTop + (sectionHybridHeight / 2.25) < windowHeight) {
          setTimeout(() => {
            sectionHybrid.classList.add('visible')
          }, 500);
        }
      }
     
     // Makeup // 
     
      const sectionMakeup = document.querySelector('section.makeup')
      const sectionMakeupTop = Math.round(sectionMakeup.getBoundingClientRect().top)
      const sectionMakeupHeight = Math.round(sectionMakeup.getBoundingClientRect().height)
     
      if (window.innerWidth > 1024) {
        if (sectionMakeupTop + (sectionMakeupHeight) < windowHeight) {
          setTimeout(() => {
            sectionMakeup.classList.add('visible')
          }, 500);
        }
      }

      if (window.innerWidth < 1024) {
        if (sectionMakeupTop + (sectionMakeupHeight / 2) < windowHeight) {
          setTimeout(() => {
            sectionMakeup.classList.add('visible')
          }, 500);
        }
      } 
     
     // Screw // 
     
      const sectionScrew = document.querySelector('section.screw')
      const sectionScrewTop = Math.round(sectionScrew.getBoundingClientRect().top)
      const sectionScrewHeight = Math.round(sectionScrew.getBoundingClientRect().height)
     
      if (window.innerWidth > 1024) {
        if (sectionScrewTop + (sectionScrewHeight / 1.125) < windowHeight) {
          setTimeout(() => {
            sectionScrew.classList.add('visible')
          }, 500);
        }
      }
      if (window.innerWidth < 1024) {
        if (sectionScrewTop + (sectionScrewHeight / 2) < windowHeight) {
          setTimeout(() => {
            sectionScrew.classList.add('visible')
          }, 500);
        }
      }
     
     
     // Changes // 
     
      const sectionChanges = document.querySelector('section.changes')
      const sectionChangesTop = Math.round(sectionChanges.getBoundingClientRect().top)
      const sectionChangesHeight = Math.round(sectionChanges.getBoundingClientRect().height)
     
      if (window.innerWidth > 1024) {
        if (sectionChangesTop + (sectionChangesHeight / 1.125) < windowHeight) {
          setTimeout(() => {
            sectionChanges.classList.add('visible')
          }, 500);
        }
      }
      if (window.innerWidth < 1024) {
        if (sectionChangesTop + (sectionChangesHeight / 2) < windowHeight) {
          setTimeout(() => {
            sectionChanges.classList.add('visible')
          }, 500);
        }
      }
     
     
     // Moles // 
     
     const sectionMoles = document.querySelector('section.moles')
     const sectionMolesTop = Math.round(sectionMoles.getBoundingClientRect().top)
     const sectionMolesHeight = Math.round(sectionMoles.getBoundingClientRect().height)
     
     if (window.innerWidth > 1024) {
      if (sectionMolesTop + (sectionMolesHeight / 1.125) < windowHeight) {
        setTimeout(() => {
          sectionMoles.classList.add('visible')
        }, 500);
      }
     }
     
     if (window.innerWidth < 1024) {
      if (sectionMolesTop + (sectionMolesHeight / 2) < windowHeight) {
        setTimeout(() => {
          sectionMoles.classList.add('visible')
        }, 500);
      }
     }
     
     
     // Fat // 
     
     const sectionFat = document.querySelector('section.fat')
     const sectionFatTop = Math.round(sectionFat.getBoundingClientRect().top)
     const sectionFatHeight = Math.round(sectionFat.getBoundingClientRect().height)
     
     if (window.innerWidth > 1024) {
      if (sectionFatTop + (sectionFatHeight / 1.125) < windowHeight) {
        setTimeout(() => {
          sectionFat.classList.add('visible')
        }, 500);
      }  
     }

     if (window.innerWidth < 1024) {
      if (sectionFatTop + (sectionFatHeight / 2) < windowHeight) {
        setTimeout(() => {
          sectionFat.classList.add('visible')
        }, 500);
      } 
     } 


    // Woman //
  
      const womanDeskSvg = document.querySelector('.woman')
      const womanDeskSvgTop = Math.round(womanDeskSvg.getBoundingClientRect().top)
      const womanDeskSvgHeight = Math.round(womanDeskSvg.getBoundingClientRect().height)
  
      if (womanDeskSvgTop + (womanDeskSvgHeight / 2) < windowHeight) {
        setTimeout(() => {
          womanDeskSvg.classList.add('visible')
        }, 500);
      }


      const womanMobileSvg = document.querySelector('.woman.mobile')
      const womanMobileSvgTop = Math.round(womanMobileSvg.getBoundingClientRect().top)
      const womanMobileSvgHeight = Math.round(womanMobileSvg.getBoundingClientRect().height)
  
      if (womanMobileSvgTop + (womanMobileSvgHeight / 2) < windowHeight) {
        setTimeout(() => {
          womanMobileSvg.classList.add('visible')
        }, 500);
      }
  
  }
  
    checkScroll();
    
    // Run function when scroll
    window.addEventListener('scroll', function (e) {
      checkScroll();
    })



    // Menu mobile //



    const burgerBtns = document.querySelectorAll('.burger')
    const root = document.querySelector('html')


    burgerBtns.forEach(button => {
      button.addEventListener('click', () => {
        const menubox = document.querySelector('.menubox')
        if (!button.classList.contains('open')) {
          button.classList.add('open')
          menubox.classList.add('open')
          menubox.style.display = 'flex'
          setTimeout(() => {
            menubox.style.opacity = 1
          }, 300);
          root.style.overflowY = 'hidden'
        } else {
          button.classList.remove('open')
          menubox.classList.remove('open')
          root.style.overflowY = 'visible'
          menubox.style.opacity = 0
          setTimeout(() => {
            menubox.style.display = 'none'
          }, 300);
        }
      })
    })

    const menuGlobal = document.querySelector('nav.global.mobile')



    window.addEventListener('scroll', (e) => {
      if (window.innerWidth < 1024) {
          
        if (window.scrollY > 200) {
          menuGlobal.classList.add('on')
        } else {
          menuGlobal.classList.remove('on')
        }
      
      }
    })
    
