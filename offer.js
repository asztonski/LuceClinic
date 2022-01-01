    // Vievport Events // 



    function checkScroll(e) {

        const windowHeight = window.innerHeight    
      
      
              // Pico-Sure // 
           
              const sectionPicoSure = document.querySelector('section.pico-sure')
              const sectionPicoSureTop = Math.round(sectionPicoSure.getBoundingClientRect().top)
              const sectionPicoSureHeight = Math.round(sectionPicoSure.getBoundingClientRect().height)
             
              if (window.innerWidth > 1024) {
                if (sectionPicoSureTop + (sectionPicoSureHeight / 1.85) < windowHeight) {
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
                if (sectionHybridTop + (sectionHybridHeight / 1.85) < windowHeight) {
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
                if (sectionMakeupTop + (sectionMakeupHeight / 1.65) < windowHeight) {
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
                if (sectionScrewTop + (sectionScrewHeight / 1.65) < windowHeight) {
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
                if (sectionChangesTop + (sectionChangesHeight / 1.65) < windowHeight) {
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
              if (sectionMolesTop + (sectionMolesHeight / 1.65) < windowHeight) {
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
              if (sectionFatTop + (sectionFatHeight) < windowHeight) {
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
      
      
      }
      
        checkScroll();
        
        window.addEventListener('scroll', function (e) {
          checkScroll();
        })