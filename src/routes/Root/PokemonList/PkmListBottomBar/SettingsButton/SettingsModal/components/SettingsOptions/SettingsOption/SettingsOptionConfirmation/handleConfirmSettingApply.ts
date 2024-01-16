function handleConfirmSettingApply(
    e: React.UIEvent<SVGAElement>,
    apply: boolean,
    selector: string,
    applySetting?: () => void
) {
    e.stopPropagation();

    if(apply && applySetting) {
        applySetting();
    }
    
    const confirmSettingContainer = document.querySelector(`#${selector} .confirm-setting-apply`)!;
    confirmSettingContainer.classList.add("hidden")
}

export { handleConfirmSettingApply }