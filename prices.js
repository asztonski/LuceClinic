    // Vievport Events // 



    function checkScroll(e) {

        const windowHeight = window.innerHeight    
         
      
        // Woman //
      
          const lunaSvg = document.querySelector('.luna')
          const lunaSvgTop = Math.round(lunaSvg.getBoundingClientRect().top)
          const lunaSvgHeight = Math.round(lunaSvg.getBoundingClientRect().height)
      
          if (lunaSvgTop + (lunaSvgHeight / 2) < windowHeight) {
            setTimeout(() => {
              lunaSvg.classList.add('visible')
            }, 500);
          }
      
      }
      
        checkScroll();
        
        window.addEventListener('scroll', function (e) {
          checkScroll();
        })