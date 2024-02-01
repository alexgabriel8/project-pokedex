function allowPkmListInteraction(allow: boolean): void {
    const pkmList = document.querySelector(".pokemon-list")!;

    if(allow) pkmList.classList.remove("disabled");
    else pkmList.classList.add("disabled");
}

export { allowPkmListInteraction };
