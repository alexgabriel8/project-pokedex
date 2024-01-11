function handleCloseSettings() {
    const settingsModal = document.querySelector("#settings-modal")!;
    settingsModal.classList.add("hidden");

    const settingsButton = document.querySelector("#settings-button")!;
    settingsButton.classList.remove("clicked");
}

export { handleCloseSettings }