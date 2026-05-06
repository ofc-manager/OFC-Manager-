export function TransfersScreen() {
  return `

<div class="screen" id="transfersScreen">
  <div class="topbar">
    <h1>Transferências</h1>
  </div>

  <div class="content">
    <div class="transfers-container">
      
      <div class="transfers-section">
        <h2>Ofertas Enviadas</h2>
        <div class="transfer-card sent">
          <div class="player-info">
            <h3>João Silva</h3>
            <p class="ovr">OVR: 85</p>
            <p class="club">Clube: FC Barcelona</p>
          </div>
          <div class="offer-details">
            <p class="price">€ 35M</p>
            <p class="status pending">Pendente</p>
          </div>
        </div>

        <div class="transfer-card sent">
          <div class="player-info">
            <h3>Carlos Santos</h3>
            <p class="ovr">OVR: 88</p>
            <p class="club">Clube: Real Madrid</p>
          </div>
          <div class="offer-details">
            <p class="price">€ 50M</p>
            <p class="status accepted">Aceita</p>
          </div>
        </div>
      </div>

      <div class="transfers-section">
        <h2>Ofertas Recebidas</h2>
        <div class="transfer-card received">
          <div class="player-info">
            <h3>Lucas Ferraz</h3>
            <p class="ovr">OVR: 91</p>
            <p class="club">Seu Clube</p>
          </div>
          <div class="offer-details">
            <p class="price">€ 40M</p>
            <p class="from">De: Manchester United</p>
          </div>
          <div class="actions">
            <button class="btn btn-accept">Aceitar</button>
            <button class="btn btn-reject">Recusar</button>
          </div>
        </div>

        <div class="transfer-card received">
          <div class="player-info">
            <h3>Pedro Costa</h3>
            <p class="ovr">OVR: 87</p>
            <p class="club">Seu Clube</p>
          </div>
          <div class="offer-details">
            <p class="price">€ 28M</p>
            <p class="from">De: Paris Saint-Germain</p>
          </div>
          <div class="actions">
            <button class="btn btn-accept">Aceitar</button>
            <button class="btn btn-reject">Recusar</button>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>
`;
}