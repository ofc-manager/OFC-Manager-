# 🔄 Sistema de Transferências - OFC Manager

## 📋 Descrição

O sistema de transferências permite gerenciar ofertas de compra e venda de jogadores entre clubes no OFC Manager.

## 🎯 Funcionalidades

### 1. **Ofertas Enviadas**
- Visualizar ofertas feitas pelo seu clube a outros clubes
- Status das ofertas:
  - 🟡 **Pendente**: Aguardando resposta do clube
  - ✅ **Aceita**: Transferência confirmada
  - ❌ **Rejeitada**: Oferta recusada

### 2. **Ofertas Recebidas**
- Visualizar ofertas recebidas de outros clubes pelos seus jogadores
- Ações disponíveis:
  - ✅ **Aceitar**: Confirmar a transferência do jogador
  - ❌ **Recusar**: Rejeitar a oferta

## 📁 Arquivos do Sistema

```
screens/transfers.js      # Estrutura e layout da tela
css/transfers.css         # Estilos e responsividade
js/transfers.js           # Funcionalidades interativas
```

## 🚀 Como Usar

1. Navegue até a aba **Transferências** no menu inferior
2. Visualize suas ofertas enviadas e recebidas
3. Para ofertas recebidas:
   - Clique em **Aceitar** para confirmar a transferência
   - Clique em **Recusar** para rejeitar a oferta

## 🎨 Design

- **Cores principais**: Azul (#00d4ff), Verde (#51cf66), Vermelho (#ff6b6b), Laranja (#ffa94d)
- **Layout responsivo**: Otimizado para mobile e desktop
- **Transições suaves**: Hover effects e animações

## 📊 Informações Exibidas

Cada oferta mostra:
- 👤 Nome do jogador
- 📈 Overall (OVR)
- 🏟️ Clube atual
- 💰 Valor da oferta
- 📍 Status ou clube oferecedor

## 🔧 Integração

O sistema foi integrado ao `app.js` e está acessível através do menu de navegação.

## 📝 Notas

- As ofertas são simuladas para demonstração
- Futuramente, será integrado com um backend para persistência de dados
- Os botões de ação podem ser expandidos com mais funcionalidades
