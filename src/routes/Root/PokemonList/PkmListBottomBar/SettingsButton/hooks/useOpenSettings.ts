type setState = React.Dispatch<React.SetStateAction<boolean>>;

const useOpenSettings = (setShowModal: setState) => {
  const openSettings = () => {
    const settingsButton = document.querySelector("#settings-button")!;
    settingsButton.classList.add("clicked");
    setShowModal(true);
  };

  return openSettings;
};

export { useOpenSettings };
