export function TransfersScreen() {
  return `
    <div class="screen" id="transfersScreen">
      <div class="topbar">
        <h1>Transferências</h1>
      </div>

      <div class="content">
        <h2>Minhas Ofertas</h2>

        <div class="card">
          <div class="transfer-item">
            <strong>Jogador:</strong> João Silva
            <br>
            <strong>OVR:</strong> 87
            <br>
            <strong>Oferta:</strong> € 35M
            <br>
            <strong>Status:</strong> <span class="status pending">Pendente</span>
          </div>
        </div>

        <div class="card">
          <div class="transfer-item">
            <strong>Jogador:</strong> Pedro Santos
            <br>
            <strong>OVR:</strong> 84
            <br>
            <strong>Oferta:</strong> € 28M
            <br>
            <strong>Status:</strong> <span class="status accepted">Aceita</span>
          </div>
        </div>

        <h2>Ofertas Recebidas</h2>

        <div class="card">
          <div class="transfer-item">
            <strong>Jogador:</strong> Carlos Mendes
            <br>
            <strong>OVR:</strong> 89
            <br>
            <strong>Oferta:</strong> € 50M
            <br>
            <strong>Status:</strong> <span class="status new">Nova</span>
            <br>
            <button class="transfer-btn accept">Aceitar</button>
            <button class="transfer-btn reject">Recusar</button>
          </div>
        </div>

        <div class="card">
          <div class="transfer-item">
            <strong>Jogador:</strong> Bruno Costa
            <br>
            <strong>OVR:</strong> 86
            <br>
            <strong>Oferta:</strong> € 32M
            <br>
            <strong>Status:</strong> <span class="status new">Nova</span>
            <br>
            <button class="transfer-btn accept">Aceitar</button>
            <button class="transfer-btn reject">Recusar</button>
          </div>
        </div>

      </div>
    </div>
  `;
}
