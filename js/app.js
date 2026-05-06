import { HomeScreen } from '../screens/home.js';
import { MarketScreen } from '../screens/market.js';
import { MatchesScreen } from '../screens/matches.js';

import { setupNavigation } from './navigation.js';

const app = document.getElementById('app');

app.innerHTML = `

${HomeScreen()}
${MarketScreen()}
${MatchesScreen()}

<div class="bottom-nav">

  <button class="nav-btn" data-screen="homeScreen">
    Home
  </button>

  <button class="nav-btn" data-screen="marketScreen">
    Mercado
  </button>

  <button class="nav-btn" data-screen="matchesScreen">
    Partidas
  </button>

</div>

`;

setupNavigation();