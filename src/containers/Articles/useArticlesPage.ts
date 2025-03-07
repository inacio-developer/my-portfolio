import { Feed } from '../../types/medium';
import { useParams } from 'react-router-dom';
import { useAPIMedium } from '../../hooks/useAPIMedium';
import { useState } from 'react';

const useArticlesPage = () => {
  const { id } = useParams();
  const idConvert = parseInt(id as string);
  const { data, isLoading } = useAPIMedium();
  const articles = [...(data as Feed[])];
  const [modal, setModal] = useState(false);
  const isMobile = window.innerWidth <= 1199;

  const navForMedium = () => {
    window.open('https://medium.com/@rafaelinacio.articles', '_blank');
  };

  return {
    idConvert,
    isMobile,
    modal,
    setModal,
    data,
    isLoading,
    articles,
    navForMedium,
  };
};

export { useArticlesPage };
