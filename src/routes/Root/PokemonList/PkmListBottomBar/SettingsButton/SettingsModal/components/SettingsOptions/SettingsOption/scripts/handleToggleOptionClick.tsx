const handleToggleOptionclick = (
  e: React.UIEvent<HTMLLIElement>,
  updateSettingValue: () => void,
) => {
  e.currentTarget.querySelector(".toggler-icon")!.classList.toggle("active");
  updateSettingValue();
};

export { handleToggleOptionclick };
