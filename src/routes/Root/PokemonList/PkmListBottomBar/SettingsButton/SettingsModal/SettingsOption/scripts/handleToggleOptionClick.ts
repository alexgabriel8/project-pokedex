function handleToggleOptionclick(e: React.UIEvent<HTMLLIElement>) {
    e.currentTarget.querySelector(".toggler-icon")!.classList.toggle("active");
}

export { handleToggleOptionclick }
