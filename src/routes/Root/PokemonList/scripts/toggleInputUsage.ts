function allowInputUse(allow: boolean) {
  const inputAddPkmByAmount = document.querySelector(
    "#input-add-pkm-by-amount",
  )!;
  const iconAddPkmByAmount: HTMLElement = document.querySelector(
    "#icon-add-pkm-by-amount",
  )!;
  const inputAddPkmByInput = document.querySelector("#input-add-pkm-by-input")!;
  const iconAddPkmByInput: HTMLElement = document.querySelector(
    "#icon-add-pkm-by-input",
  )!;

  if (allow) {
    inputAddPkmByAmount.removeAttribute("disabled");
    iconAddPkmByAmount.style.removeProperty("pointer-events");

    inputAddPkmByInput.removeAttribute("disabled");
    iconAddPkmByInput.style.removeProperty("pointer-events");
  } else {
    inputAddPkmByAmount.setAttribute("disabled", "");
    iconAddPkmByAmount.style.pointerEvents = "none";
    
    inputAddPkmByInput.setAttribute("disabled", "");
    iconAddPkmByInput.style.pointerEvents = "none";
  }
}

export { allowInputUse };
