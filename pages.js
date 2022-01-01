    // Menu mobile //



    const burgerBtns = document.querySelectorAll('.burger')

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



    const logoCircle = document.querySelector('.logo-circle');
    
    
    window.addEventListener('scroll', () => {
      logoCircle.style.transform = `rotate(${window.scrollY / 10}deg)`
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
  