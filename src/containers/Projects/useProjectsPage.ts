import { useState } from 'react';
import { useParams } from 'react-router-dom';
const useProjectsPage = () => {
  const { id } = useParams();
  const convertID = parseInt(id as string);
  const isMobile = window.innerWidth <= 1199;
  const [modal, setModal] = useState(false);
  const goGitHub = () => {
    window.open(
      'https://github.com/inacio-developer?tab=repositories',
      '_blank',
    );
  };
  return {
    convertID,
    isMobile,
    modal,
    setModal,
    goGitHub,
  };
};
export { useProjectsPage };
