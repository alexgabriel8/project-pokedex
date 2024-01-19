function abilityHasScrolling(querySelector: string) {
  const element = document.querySelector(querySelector)!;
  const isAtTop = element.scrollTop === 0;

  if (isAtTop && element.scrollHeight !== element.clientHeight)
    element.classList.add("shadow-at-bottom");
}

export { abilityHasScrolling };
