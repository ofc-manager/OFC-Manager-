export function setupTransfers() {
  const acceptButtons = document.querySelectorAll('.btn-accept');
  const rejectButtons = document.querySelectorAll('.btn-reject');

  acceptButtons.forEach(button => {
    button.addEventListener('click', function() {
      const card = this.closest('.transfer-card');
      const playerName = card.querySelector('h3').textContent;
      
      alert(`✅ Transferência de ${playerName} aceita com sucesso!`);
      
      card.style.opacity = '0.5';
      card.style.pointerEvents = 'none';
      
      const newStatus = document.createElement('p');
      newStatus.className = 'status accepted';
      newStatus.textContent = 'Aceita';
      card.querySelector('.offer-details').appendChild(newStatus);
      
      this.parentElement.style.display = 'none';
    });
  });

  rejectButtons.forEach(button => {
    button.addEventListener('click', function() {
      const card = this.closest('.transfer-card');
      const playerName = card.querySelector('h3').textContent;
      
      alert(`❌ Transferência de ${playerName} rejeitada!`);
      
      card.style.opacity = '0.3';
      card.style.pointerEvents = 'none';
      
      const newStatus = document.createElement('p');
      newStatus.className = 'status rejected';
      newStatus.textContent = 'Rejeitada';
      card.querySelector('.offer-details').appendChild(newStatus);
      
      this.parentElement.style.display = 'none';
    });
  });
}