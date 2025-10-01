const input = document.getElementById('searchInput');
if (input) {
  input.addEventListener('input', () => {
    const filter = input.value.toLowerCase();
    document.querySelectorAll('.record').forEach(el => {
      const texto = [
        el.dataset.banda,
        el.dataset.sello,
        el.dataset.año
      ].join(' ').toLowerCase();
      el.style.display = texto.includes(filter) ? 'block' : 'none';
    });
  });
}
