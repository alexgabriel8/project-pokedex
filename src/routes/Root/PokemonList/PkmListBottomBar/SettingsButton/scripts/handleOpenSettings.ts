function handleOpenSettings() {
    const settingsModal = document.querySelector("#settings-modal")!;
    settingsModal.classList.remove("hidden");

    const settingsButton = document.querySelector("#settings-button")!;
    settingsButton.classList.add("clicked");
}

export { handleOpenSettings }