
    // Form: construir mailto
    const form = document.getElementById('quoteForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const product = document.getElementById('product').value;
      const message = document.getElementById('message').value.trim();

      if(!name || !email || !product){
        alert('Por favor completa Nombre, Correo y Producto.');
        return;
      }

      const to = 'ventas@grupohydro.com';
      const subject = encodeURIComponent('Solicitud de cotización: ' + product);
      const bodyLines = [
        'Hola Grupo Hydro,',
        '',
        'Quisiera solicitar una cotización.',
        '',
        'Nombre: ' + name,
        'Correo: ' + email,
        'Producto: ' + product,
        '',
        'Comentarios:',
        message || '(sin comentarios)',
        '',
        '— Enviado desde Contacto.html'
      ];
      const body = encodeURIComponent(bodyLines.join('\n'));
      const mailtoUrl = `mailto:${to}?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;
    });
  