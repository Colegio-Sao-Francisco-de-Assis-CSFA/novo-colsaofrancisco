export default class Carousel {
    constructor(
        items,
        containerId,
        indicatorsId,
        prevButtonId,
        nextButtonId,
        autoPlayInterval = 6000
    ) {
        // Elementos do DOM
        this.container = document.getElementById(containerId);
        this.content = this.container.querySelector('#container__image');
        this.indicators = document.getElementById(indicatorsId);
        this.prevButton = document.getElementById(prevButtonId);
        this.nextButton = document.getElementById(nextButtonId);

        // Dados dos slides
        this.items = items;
        this.currentIndex = 0;
        this.totalSlides = items.length;

        // Configurações de autoplay
        this.autoPlayInterval = autoPlayInterval;
        this.autoPlayTimer = null;

        // Inicializa o carrossel
        this.init();
    }

    init() {
        // Renderiza slides e indicadores
        this.renderSlides();
        this.renderIndicators();

        // Configura eventos de navegação
        this.prevButton.addEventListener('click', () => this.prevSlide());
        this.nextButton.addEventListener('click', () => this.nextSlide());

        // Configura indicadores
        this.setupIndicators();

        // Inicia autoplay
        this.startAutoPlay();

        // Pausa autoplay em hover
        this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.container.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    renderSlides() {
        // Limpa conteúdo anterior
        this.content.innerHTML = '';

        // Renderiza slides atuais
        const currentItem = this.items[this.currentIndex];

        const slideContainer = document.createElement('div');
        slideContainer.classList.add('slide', 'w-full', 'h-full', 'relative', 'transition-opacity', 'duration-500');

        const img = document.createElement('img');
        img.src = currentItem.img;
        img.alt = currentItem.titulo;
        img.classList.add('w-full', 'h-full', 'object-cover');
        // Melhorias de desempenho
        img.loading = 'lazy'; // Carregamento diferido
        img.decoding = 'async'; // Decodificação assíncrona

        // const textOverlay = document.createElement('div');
        // textOverlay.classList.add(
        //     'absolute', 'bottom-0', 'left-0', 'w-full',
        //     'bg-black/50', 'text-white', 'p-4', 'text-center'
        // );

        // const title = document.createElement('h2');
        // title.textContent = currentItem.titulo;
        // title.classList.add('text-2xl', 'font-bold', 'mb-2');

        // const description = document.createElement('p');
        // description.textContent = currentItem.descricao;
        // description.classList.add('text-sm');

        // const link = document.createElement('a');
        // link.href = currentItem.location;
        // link.textContent = 'Saiba mais';
        // link.classList.add(
        //     'inline-block', 'mt-2', 'px-4', 'py-2',
        //     'bg-blue-500', 'text-white', 'rounded'
        // );

        // textOverlay.appendChild(title);
        // textOverlay.appendChild(description);
        // textOverlay.appendChild(link);

        slideContainer.appendChild(img);
        // slideContainer.appendChild(textOverlay);

        this.content.appendChild(slideContainer);
    }

    renderIndicators() {
        // Limpa indicadores anteriores
        this.indicators.innerHTML = '';

        // Cria indicadores
        this.items.forEach((_, index) => {
            
            const indicator = document.createElement('button');
            indicator.classList.add(
                'w-4', 'h-4', 'rounded-full',
                'transition-colors', 'duration-300'
            );

            // Destaca o slide atual
            if (index === this.currentIndex) {
                indicator.classList.add('bg-blue-500');
            } else {
                indicator.classList.add('bg-white/80');
            }

            indicator.dataset.slide = index;
            this.indicators.appendChild(indicator);
        });
    }

    setupIndicators() {
        // Adiciona evento de clique nos indicadores
        const indicatorButtons = this.indicators.querySelectorAll('button');
        indicatorButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const slideIndex = parseInt(e.target.dataset.slide);
                this.goToSlide(slideIndex);
            });
        });
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
        this.renderSlides();
        this.renderIndicators();
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        this.renderSlides();
        this.renderIndicators();
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.renderSlides();
        this.renderIndicators();
    }

    startAutoPlay() {
        this.autoPlayTimer = setInterval(() => {
            this.nextSlide();
        }, this.autoPlayInterval);
    }

    stopAutoPlay() {
        if (this.autoPlayTimer) {
            clearInterval(this.autoPlayTimer);
        }
    }

    // Método para adicionar slides dinamicamente
    addSlide(slide) {
        this.items.push(slide);
        this.totalSlides = this.items.length;
        this.renderIndicators();
    }

    // Método para remover slides
    removeSlide(index) {
        if (index >= 0 && index < this.totalSlides) {
            this.items.splice(index, 1);
            this.totalSlides = this.items.length;

            // Ajusta o índice atual se necessário
            if (this.currentIndex >= this.totalSlides) {
                this.currentIndex = this.totalSlides - 1;
            }

            this.renderSlides();
            this.renderIndicators();
        }
    }
}