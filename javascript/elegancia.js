document.querySelectorAll('.open-modal').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // impede o salto para o topo
    const modalId = this.getAttribute('data-target');
    document.getElementById(modalId).style.display = 'flex';
  });  
  });
  
  document.querySelectorAll('.close').forEach(btn => {
    btn.onclick = () => {
      btn.closest('.modal').style.display = 'none';
    };
  });
  
  document.querySelectorAll('.modal').forEach(modal => {
    modal.onclick = e => {
      if (e.target === modal) modal.style.display = 'none';
    };
  });
  
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
    }
  });