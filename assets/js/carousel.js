// Carrusel simple
    const track = document.getElementById('track');
    const thumbs = Array.from(document.querySelectorAll('#thumbs img'));
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    let index = 0;

    function goTo(i){
      index = (i + thumbs.length) % thumbs.length;
      track.style.transform = `translateX(-${index * 100}%)`;
      thumbs.forEach(t => t.classList.remove('active'));
      thumbs[index].classList.add('active');
    }

    prev.addEventListener('click', ()=> goTo(index - 1));
    next.addEventListener('click', ()=> goTo(index + 1));
    thumbs.forEach(t => t.addEventListener('click', ()=> goTo(parseInt(t.dataset.index,10))));

    // Swipe para móvil
    let startX = 0;
    document.getElementById('carousel').addEventListener('touchstart', e => startX = e.touches[0].clientX, {passive:true});
    document.getElementById('carousel').addEventListener('touchend', e => {
      const endX = e.changedTouches[0].clientX;
      const dx = endX - startX;
      if(Math.abs(dx) > 40){ dx < 0 ? goTo(index + 1) : goTo(index - 1); }
    }, {passive:true});