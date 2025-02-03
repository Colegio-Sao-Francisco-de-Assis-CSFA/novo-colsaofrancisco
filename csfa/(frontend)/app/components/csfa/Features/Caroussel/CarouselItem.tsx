interface CarouselItem {
  id: number;
  src: string;
}

export const carouselItems: CarouselItem[] = [
    { id: 1, src: "https://i.pinimg.com/736x/ee/5a/58/ee5a58fdefa47b9515ab5b4ebfb27628.jpg" },
    { id: 2, src: "https://i.pinimg.com/736x/ad/58/d4/ad58d4dbe6d6e7f174f5c79cd88e6efa.jpg" },
    { id: 3, src: "https://i.pinimg.com/736x/ce/b7/f6/ceb7f670336f2452910940c9868ebcf0.jpg" },
    { id: 4, src: "https://i.pinimg.com/736x/1e/9a/29/1e9a29db7588afc93bc0a0930d9e7118.jpg" },
  ] as const

