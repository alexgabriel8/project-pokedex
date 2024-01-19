function moveListHasScroll() {
    const moveList = document.querySelector("#pokemon-moves-list")!;

    const isAtTop = moveList.scrollTop === 0;

    if(isAtTop && moveList?.scrollHeight - moveList?.clientHeight > 0) {
        moveList.classList.add("shadow-at-bottom");
    }
}

export { moveListHasScroll }