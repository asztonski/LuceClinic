const svgGear = document.querySelector('.gear')


window.addEventListener('scroll', () => {
  svgGear.style.transform = `rotate(${window.scrollY / 10}deg)`
})




 // Vievport Events // 



 function checkScroll(e) {

    const windowHeight = window.innerHeight    
  
  
          // Section // 
       
          const sectionOffer = document.querySelector('section.offers')
          const sectionOfferTop = Math.round(sectionOffer.getBoundingClientRect().top)
          const sectionOfferHeight = Math.round(sectionOffer.getBoundingClientRect().height)
         
          if (window.innerWidth > 1024) {
            if (sectionOfferTop + (sectionOfferHeight / 1.25) < windowHeight) {
              setTimeout(() => {
                sectionOffer.classList.add('visible')
              }, 500);
            }
          }
          if (window.innerWidth < 1024) {
            if (sectionOfferTop + (sectionOfferHeight / 3.5) < windowHeight) {
              setTimeout(() => {
                sectionOffer.classList.add('visible')
              }, 500);
            }
          }
  
  
  }
  
    checkScroll();
    
    window.addEventListener('scroll', function (e) {
      checkScroll();
    })
  