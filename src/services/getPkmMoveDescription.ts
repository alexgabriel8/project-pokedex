async function getPkmMoveDescription(url: string) {
    const response = await fetch(url);
    if(response.status === 404) throw new Error(`Could not fetch url "${url}"`)
    const json = await response.json();

    let moveDescription = "No description available.";

    for(let i = 0; i < json.effect_entries.length; i++) {
        if(json.effect_entries[i].language.name === "en") {
            moveDescription = json.effect_entries[i].effect
            i = json.effect_entries.length
        }
    }

    return moveDescription
}

export { getPkmMoveDescription }