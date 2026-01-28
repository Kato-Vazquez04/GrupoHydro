// <!-- JS: menú móvil -->
  
    const hamb = document.getElementById('hamb');
    const menu = document.getElementById('menu');
    hamb.addEventListener('click', () => menu.classList.toggle('show'));
    // Cerrar al hacer click
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=> menu.classList.remove('show')));
 