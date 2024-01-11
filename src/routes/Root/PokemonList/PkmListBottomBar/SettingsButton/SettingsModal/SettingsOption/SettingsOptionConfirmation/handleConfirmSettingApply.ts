function handleConfirmSettingApply(
    e: React.UIEvent<SVGAElement>,
    apply: boolean,
    selector: string
) {
    e.stopPropagation();

    if(apply) {
        // TODO
    }
    
    const confirmSettingContainer = document.querySelector(`#${selector} .confirm-setting-apply`)!;
    confirmSettingContainer.classList.add("hidden")
}

export { handleConfirmSettingApply }