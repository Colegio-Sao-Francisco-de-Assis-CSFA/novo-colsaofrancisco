export default class Carousel {
  constructor(items, containerId, indicatorContainerId, prevButtonId, nextButtonId, autoSlideInterval = 6000) {
    this.items = items;
    this.currentIndex = 0;
    this.autoSlideInterval = autoSlideInterval;

    this.container = document.getElementById(containerId);
    this.indicatorsContainer = document.getElementById(indicatorContainerId);
    this.prevButton = document.getElementById(prevButtonId);
    this.nextButton = document.getElementById(nextButtonId);

    this.slideTitle = document.getElementById('slide-title');
    this.slideDescription = document.getElementById('slide-description');
    this.slideButton = document.getElementById('slide-button');
    this.containerImage = document.getElementById('container__image');


    this.createIndicators();
    this.updateSlide(this.currentIndex);
    this.startAutoSlide();

    this.addListeners();
  }

  createIndicators() {
      this.indicatorsContainer.innerHTML = ''; // Limpa os indicadores anteriores
      
      this.items.forEach((_, index) => {
          const indicator = document.createElement('span');
          indicator.classList.add('indicator'); // Adiciona a classe "indicator" ao elemento

          // Verifique se o indicador deve ser ativo e adicione a classe "active" se necessário
          if (index === 0) {
              indicator.classList.add('active'); // Marca o primeiro indicador como ativo
          }

          // Adiciona o evento de clique para cada indicador
          indicator.addEventListener('click', () => {
              this.goToSlide(index); // Vai para o slide correspondente
          });

          // Adiciona o indicador ao container de indicadores
          this.indicatorsContainer.appendChild(indicator);
      });
  }

  updateSlide(index) {
    const item = this.items[index];  // Pega o item atual
    
    this.slideTitle.textContent = item.titulo;
    this.slideDescription.textContent = item.descricao;
    this.slideButton.textContent = `Botão ${item.slide}`;
    this.slideButton.onclick = item.funcao;
    this.containerImage.innerHTML = `<img src='${item.img}' alt='imagem do slide ${item.slide}' style="width: 100%; height: 100%; object-fit: cover;">`;

    const indicators = this.indicatorsContainer.querySelectorAll('.indicator');
    indicators.forEach((ind, i) => ind.classList.toggle('active', i === index));
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateSlide(index);
    this.restartAutoSlide();
  }

  nextSlide() {
    const nextIndex = (this.currentIndex + 1) % this.items.length;
    this.goToSlide(nextIndex);
  }

  prevSlide() {
    const prevIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.goToSlide(prevIndex);
  }

  startAutoSlide() {
    this.autoSlideIntervalId = setInterval(() => this.nextSlide(), this.autoSlideInterval);
  }

  restartAutoSlide() {
    clearInterval(this.autoSlideIntervalId);
    this.startAutoSlide();
  }

  addListeners() {
    this.prevButton.addEventListener('click', () => this.prevSlide());
    this.nextButton.addEventListener('click', () => this.nextSlide());
  }
}
