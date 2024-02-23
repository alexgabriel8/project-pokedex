type setState = React.Dispatch<React.SetStateAction<boolean>>;

const useCloseSettings = (setShowModal: setState) => {
  const closeSettings = (e: React.MouseEvent) => {
    e.stopPropagation();
    const settingsButton = document.querySelector("#settings-button")!;
    settingsButton.classList.remove("clicked");
    setShowModal(false);
  };

  return closeSettings;
};

export { useCloseSettings };
