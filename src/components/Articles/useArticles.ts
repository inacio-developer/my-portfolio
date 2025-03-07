import { Feed } from '../../types/medium';
import { useAPIMedium } from '../../hooks/useAPIMedium';
import { useNavigating } from '../../hooks/useNavigating';
import { useDate } from '../../hooks/useDate';

export const useArticles = () => {
  const { data } = useAPIMedium();
  const { scrollToTopAndNavigate } = useNavigating();
  const { dateShort } = useDate();

  const renderArticles = (data as Feed[]).slice(0, 4);

  return { renderArticles, scrollToTopAndNavigate, dateShort };
};
