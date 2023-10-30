
// circles progrss bar 
const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor(dots*marked/ 100);
  var points = "";
  var rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i};--rot:${rotate}deg"></div>`;
  }
  elem.innerHTML = points;
  const pointsMarked = elem.querySelectorAll('.points');
  for(let i=0; i<percent ; i++){
      pointsMarked[i].classList.add('marked')
   }
});

// side navabr
const open = document.querySelector('.container');
    const close = document.querySelector('.close');
    var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
    open.addEventListener('click', () => {
      if (tl.reversed()) {
        tl.play();
      } else {
        tl.to('nav', { right: 0 })
          .to('nav', { height: '70vh' }, '-=.1')
          .to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.8')
          .to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
          .to('nav h2', { opacity: 1 }, '-=1');
      }
    });

    close.addEventListener('click', () => {
      tl.reverse();
    });

