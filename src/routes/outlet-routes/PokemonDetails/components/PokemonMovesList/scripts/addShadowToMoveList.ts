function addShadowToMoveList(moveList: Element) {
  const isAtTop = moveList.scrollTop === 0;
  const isAtBottom =
    Math.ceil(moveList.scrollTop) >=
    moveList.scrollHeight - moveList.clientHeight - 1;

  if (!isAtTop && !isAtBottom) {
    moveList.classList.add("shadow-at-top", "shadow-at-bottom");
  } else if (isAtBottom) {
    moveList.classList.add("shadow-at-top");
    moveList.classList.remove("shadow-at-bottom");
  } else if (isAtTop) {
    moveList.classList.add("shadow-at-bottom");
    moveList.classList.remove("shadow-at-top");
  }
}

export { addShadowToMoveList };
