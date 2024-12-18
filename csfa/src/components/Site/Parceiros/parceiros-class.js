export default class AdvancedInfiniteCarousel {
    constructor(containerId, options = {}) {
        // Configurações padrão
        this.defaultOptions = {
            speed: 50, // pixels por segundo
            direction: 'left',
            pauseOnHover: true
        };

        // Mescla opções padrão com opções personalizadas
        this.options = { ...this.defaultOptions, ...options };

        // Elementos do DOM
        this.container = document.getElementById(containerId);
        this.track = this.container.querySelector('.cs-container');

        // Estado do carrossel
        this.isPaused = false;
        this.animationFrame = null;
        this.scrollPosition = 0;
        this.viewportWidth = 0;

        // Inicialização
        this.init();
    }

    init() {
        // Prepara o container para rolagem
        this.track.style.display = 'flex';
        this.track.style.position = 'relative';
        this.track.style.width = '100%';

        // Calcula dimensões iniciais
        this.calculateViewportWidth();

        // Duplica logos inicialmente para garantir continuidade
        this.duplicateInitialLogos();

        // Configura eventos de pausa
        if (this.options.pauseOnHover) {
            this.track.addEventListener('mouseenter', () => this.pause());
            this.track.addEventListener('mouseleave', () => this.resume());
        }

        // Inicia animação
        this.start();

        // Observa mudanças de tamanho
        this.resizeObserver = new ResizeObserver(() => {
            this.calculateViewportWidth();
        });
        this.resizeObserver.observe(this.track);
    }

    calculateViewportWidth() {
        // Calcula a largura da viewport
        this.viewportWidth = this.track.parentElement.offsetWidth;
    }

    duplicateInitialLogos() {
        const originalLogos = Array.from(this.track.querySelectorAll('.cs-logo'));
        
        // Duplica logos até cobrir pelo menos duas vezes a viewport
        let totalWidth = 0;
        while (totalWidth < this.viewportWidth * 100) {
            originalLogos.forEach(logo => {
                const clone = logo.cloneNode(true);
                this.track.appendChild(clone);
                totalWidth += logo.offsetWidth + 16; // considera o gap
            });
        }
    }

    start() {
        const animate = () => {
            if (this.isPaused) return;

            // Move para a esquerda
            this.scrollPosition -= this.options.speed / 60; // ajuste para 60 FPS

            // Aplica transformação
            this.track.style.transform = `translateX(${this.scrollPosition}px)`;

            // Obtém todos os logos
            const logos = Array.from(this.track.querySelectorAll('.cs-logo'));

            // Verifica se o primeiro logo saiu completamente da tela
            logos.forEach((logo, index) => {
                const logoRect = logo.getBoundingClientRect();
                const trackRect = this.track.getBoundingClientRect();

                // Se o logo saiu completamente da tela pela esquerda
                if (logoRect.right < trackRect.left) {
                    // Remove o logo atual
                    this.track.removeChild(logo);

                    // Encontra o próximo logo para duplicar
                    // Se for o último logo, volta para o primeiro
                    const nextLogoIndex = (index + 1) % logos.length;
                    const nextLogo = logos[nextLogoIndex];

                    // Clona o próximo logo
                    const clonedLogo = nextLogo.cloneNode(true);
                    this.track.appendChild(clonedLogo);

                    // Ajusta a posição de rolagem
                    this.scrollPosition += logo.offsetWidth + 16; // considerando o gap
                }
            });

            // Próximo frame de animação
            this.animationFrame = requestAnimationFrame(animate);
        };

        // Inicia animação
        this.animationFrame = requestAnimationFrame(animate);
    }

    pause() {
        // Pausa a animação
        this.isPaused = true;
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
    }

    resume() {
        // Retoma a animação
        this.isPaused = false;
        this.start();
    }

    // Método para alterar velocidade
    setSpeed(speed) {
        this.options.speed = speed;
    }

    // Método para destruir o carrossel
    destroy() {
        // Para o observador de redimensionamento
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }

        // Remove eventos
        if (this.options.pauseOnHover) {
            this.track.removeEventListener('mouseenter', this.pause);
            this.track.removeEventListener('mouseleave', this.resume);
        }

        // Para animação
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }

        // Restaura estilos originais
        this.track.style.transform = '';
        this.track.style.overflow = '';
        this.track.style.position = '';
    }
}
