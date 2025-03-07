const useModal = () => {
  const handleModal = (
    c: React.MouseEvent,
    setStatus: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    const target = c.target as HTMLElement;
    const parentElement = target.parentElement as HTMLElement;
    if (
      target.classList.contains('modal') ||
      target.classList.contains('buttonArticle') ||
      parentElement.classList.contains('buttonArticle')
    ) {
      const sideMenu = document.querySelector(
        '.sideBarAnimation',
      ) as HTMLElement;

      sideMenu.classList.add('off');

      setTimeout(() => {
        document.body.style.overflowY = '';
        setStatus(false);
      }, 500);
    }
  };

  return { handleModal };
};

export { useModal };
