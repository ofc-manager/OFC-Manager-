export function setupNavigation() {

const buttons = document.querySelectorAll('.nav-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {

    const target = button.dataset.screen;

    document.querySelectorAll('.screen').forEach(screen => {
      screen.classList.remove('active');
    });

    document.getElementById(target).classList.add('active');

  });
});
}