const swipedLeft = (startX: number, endX: number, startY: number, endY: number) => {
    return startX - endX > 45 && Math.abs(startY - endY) < 40;
};

const useSwipeToClosePokemonList = () => {
    const pokemonList = document.querySelector(".pokemon-list")!;

    let touchStartX: number,
        touchStartY: number,
        touchEndX: number,
        touchEndY: number;

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX = e.touches[0].clientX;
        touchEndY = e.touches[0].clientY;

        if(swipedLeft(touchStartX, touchEndX, touchStartY, touchEndY))
            pokemonList.classList.add("semi-hidden");
        else pokemonList.classList.remove("semi-hidden");
    };
    
    const handleTouchEnd = () => {
        pokemonList.classList.remove("semi-hidden");
        if(swipedLeft(touchStartX, touchEndX, touchStartY, touchEndY))
            pokemonList.classList.add("hidden");
    };

    return [ handleTouchStart, handleTouchMove, handleTouchEnd ];
};

export { useSwipeToClosePokemonList };
