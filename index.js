document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is loaded.');

  const header = document.querySelector('.header');
  const home = document.querySelector('.home');
  const about = document.querySelector('.about');
  const hamburger = document.querySelector('.hamburger');
  const hamburgerLine = document.querySelector('.hamburger__line');
  const navigation = document.querySelector('.navigation');
  const skillsEl = document.getElementById('skills');
  const projectsEl = document.getElementById('projects');
  const codeSampleEl = document.getElementById('code_sample');
  const educationEl = document.getElementById('education');
  const languageEl = document.getElementById('language');
  const contactsEl = document.getElementById('contacts');
  const linksEl = document.querySelectorAll('.navigation__link');
  const projectsContainer = document.querySelector('.projects__container');
  (async () => {
    const res = await fetch('./projects/projects.json');
    const data = await res.json();
    const template = data.map((el, index) => {
      const side = data[index].num % 2 === 0 ? 'left' : 'right';
      return `<div class='projects__project ${side}'>
                <div class='projects__project-title'>
                   ${data[index].title}
                </div>
                <div class="projects__project-container">
                  <a href='${data[index].link}' class='projects__project-img_link'>
                     <img src='projects/img/${data[index].image}' 
                     alt='${data[index].title}' class='projects__project-img' />
                  </a>
                  <div class="projects__project-info">
                    <div class="projects__project-description">
                      Type: ${data[index].description}
                    </div>
                    <div class="projects__project-stack">
                      Stack: ${data[index].stack}
                    </div>
                    <div class="projects__project-data">
                      Data: ${data[index].year} / ${data[index].month}
                    </div>
                    <div class="projects__project-provider">
                     Provider: ${data[index].provider}
                    </div>
                  </div>
                </div>
              </div>`
    });
    projectsContainer.innerHTML = template.join('');
  })();
  const projectFromLeft = document.getElementsByClassName('left');
  const projectFromRight = document.getElementsByClassName('right');
  console.log(projectFromLeft);
  console.log(projectFromRight);

  linksEl.forEach(link => {
    link.addEventListener('click', () => {
      hamburgerLine.classList.remove('hamburger__line_active');
      navigation.classList.remove('navigation_hamburger-active');
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.contains(navigation)) {
      if (!event.target.contains(hamburger) && !event.target.classList.contains('hamburger__line')) {
        hamburgerLine.classList.remove('hamburger__line_active');
        navigation.classList.remove('navigation_hamburger-active');
      } else if (event.target.classList.contains('hamburger__line') || event.target.contains(hamburger)) {
        hamburgerLine.classList.toggle('hamburger__line_active');
        navigation.classList.toggle('navigation_hamburger-active');
      }
    }
  });

  start();
  setTimeout(() => {
    scrollShowUp();
    window.addEventListener('scroll', () => {
      scrollShowUp();
    })
  }, 1000);

  function start() {
    const
      baseDelay = 500,
      homeDelay = baseDelay + 500,
      aboutDelay = homeDelay + 1000;
    setTimeout(() => {
      header.classList.remove('hide');
    }, baseDelay);

    setTimeout(() => {
      home.classList.remove('hide');
    }, homeDelay);

    setTimeout(() => {
      about.classList.remove('hide');
    }, aboutDelay);
  }

  let isY800 = true;

  function scrollShowUp() {
    let y = window.scrollY;
    const htmlWidth = document.documentElement.clientWidth;
    console.log(window.innerHeight);
    if (window.innerHeight > 3000) {
      console.log('fsfsd')
      setTimeout(() => skillsEl.classList.add('from-left'), 3500);
      setTimeout(() => projectsEl.classList.add('from-right'), 4500);
      setTimeout(() => codeSampleEl.classList.add('from-scale'), 5500);
      ;
      setTimeout(() => educationEl.classList.add('appear-from-top'), 6500);
      setTimeout(() => languageEl.classList.add('appear-from-bottom'), 7500);
      setTimeout(() => contactsEl.classList.add('from-scale'), 8500);

    }
    if (htmlWidth >= 670) {
      console.log(y);
      if (y > 200) {
        skillsEl.classList.add('from-left');
      }

      if (y > 800 && isY800) {
        isY800 = false;
        const leftArray = Array.from(projectFromLeft);
        const rightArray = Array.from(projectFromRight);

        function loopIt(i, arr, direction, delay) {
          console.log(delay);
          setTimeout(function () {
            if (direction === 'left') {
              arr[i].classList.add('from-left');
              arr[i].classList.remove('left');
            }
            else if (direction === 'right') {
              arr[i].classList.add('from-right');
              arr[i].classList.remove('right');
            }
            if (i < arr.length - 1) loopIt(i + 1, arr, direction, delay + 2000)
          }, delay);
        }

        loopIt(0, leftArray, 'left', 0);
        loopIt(0, rightArray, 'right', 0);


      }

      if (y > 2500) {
        codeSampleEl.classList.add('from-scale');
      }

      if (y > 3400) {
        educationEl.classList.add('appear-from-top');
      }
      if (y > 3500) {
        languageEl.classList.add('appear-from-top');
      }
      if (y > 3600) {
        contactsEl.classList.add('from-scale');
      }
    }
  }


});