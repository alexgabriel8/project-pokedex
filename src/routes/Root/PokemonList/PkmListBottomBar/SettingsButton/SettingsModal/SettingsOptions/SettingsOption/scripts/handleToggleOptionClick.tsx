const handleToggleOptionclick = (e: React.UIEvent<HTMLLIElement>, updateSetting: () => void) => {
    e.currentTarget.querySelector(".toggler-icon")!.classList.toggle("active");
    updateSetting();
}

export { handleToggleOptionclick }
