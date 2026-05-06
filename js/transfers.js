export function setupTransfers() {
  const acceptButtons = document.querySelectorAll('.btn-accept');
  const rejectButtons = document.querySelectorAll('.btn-reject');

  acceptButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const card = e.target.closest('.transfer-card');
      const playerName = card.querySelector('.player-info h3').textContent;
      const price = card.querySelector('.offer-details .price').textContent;
      
      alert(`Oferta de ${playerName} (${price}) aceita com sucesso!`);
      card.style.opacity = '0.5';
      card.style.textDecoration = 'line-through';
      e.target.disabled = true;
    });
  });

  rejectButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const card = e.target.closest('.transfer-card');
      const playerName = card.querySelector('.player-info h3').textContent;
      
      alert(`Oferta de ${playerName} recusada!`);
      card.style.opacity = '0.5';
      e.target.disabled = true;
    });
  });
}