function handlePkmMovesListScroll(e: React.UIEvent<HTMLUListElement>) {
  const isAtTop = e.currentTarget.scrollTop === 0;
  const isAtBottom =
    Math.ceil(e.currentTarget.scrollTop) >=
    e.currentTarget.scrollHeight - e.currentTarget.clientHeight - 1;

  if (!isAtTop && !isAtBottom) {
    e.currentTarget.classList.add("shadow-at-top", "shadow-at-bottom");
  } else if (isAtBottom) {
    e.currentTarget.classList.add("shadow-at-top");
    e.currentTarget.classList.remove("shadow-at-bottom");
  } else if (isAtTop) {
    e.currentTarget.classList.add("shadow-at-bottom");
    e.currentTarget.classList.remove("shadow-at-top");
  }
}

export { handlePkmMovesListScroll };
