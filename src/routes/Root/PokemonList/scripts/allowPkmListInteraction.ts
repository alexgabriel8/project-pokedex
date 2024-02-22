function allowPkmListInteraction(allow: boolean): void {
    const pkmList = document.querySelector(".pokemon-list")!;
    const inputAddPkmByInput = document.querySelector("#add-pkm-by-input input") as HTMLInputElement;
    const inputAddPkmByAmount = document.querySelector("#add-pkm-by-amount input") as HTMLInputElement;

    inputAddPkmByInput.disabled = !allow;
    inputAddPkmByAmount.disabled = !allow;

    if(allow) pkmList.classList.remove("disabled");
    else pkmList.classList.add("disabled");
}

export { allowPkmListInteraction };
