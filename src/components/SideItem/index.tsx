import * as S from './styles';
import { useDate } from '../../hooks/useDate';
import { useSideItem } from './useSideItem';

type ItemProps = {
  id: number;
  title: string;
  resume?: string;
  pubDate: string;
  emphasis?: string;
  page: string;
};

const Item = ({ id, title, resume, pubDate, emphasis, page }: ItemProps) => {
  const { scrollToTopAndNavigate, classPercentage } = useSideItem();
  const { dateAndHours } = useDate();

  return emphasis ? (
    <S.Article key={id}>
      <S.Layer className={classPercentage}></S.Layer>
      <S.Content>{title}</S.Content>
      {resume && <S.Resume>{resume}</S.Resume>}
      {page === 'artigos' && (
        <S.Content className="Article_Date">{dateAndHours(pubDate)}</S.Content>
      )}
    </S.Article>
  ) : (
    <S.ArticleLink
      key={id}
      onClick={e => scrollToTopAndNavigate(e, `/${page}/${id}/${title}`)}
      className="buttonArticle"
    >
      <S.Content>{title}</S.Content>
      {resume && <S.Resume>{resume}</S.Resume>}
      {page === 'artigos' && (
        <S.Content className="Article_Date">{dateAndHours(pubDate)}</S.Content>
      )}
    </S.ArticleLink>
  );
};

export { Item };
