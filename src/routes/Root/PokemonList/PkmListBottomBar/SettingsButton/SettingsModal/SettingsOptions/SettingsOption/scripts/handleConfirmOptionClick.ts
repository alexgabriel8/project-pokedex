function handleConfirmOptionClick(e: React.UIEvent<HTMLLIElement>) {
    e.currentTarget.querySelector(".confirm-setting-apply")!.classList.remove("hidden");
}

export { handleConfirmOptionClick }