document.addEventListener('DOMContentLoaded', () => {

  /* --- Aspect Card Highlight on Click --- */
  const cards = document.querySelectorAll('.aspect-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const wasActive = card.classList.contains('is-active');
      cards.forEach(c => c.classList.remove('is-active'));
      if (!wasActive) card.classList.add('is-active');
    });
  });

});