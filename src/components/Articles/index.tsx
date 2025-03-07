import { useArticles } from './useArticles';
import { Tag } from '../Tag';
import { Button } from '../Button';
import { SvgComponent as ButtonIcon } from '../../assets/images/icons/projects-view-all';
import * as S from './styles';

const Articles = (): JSX.Element => {
  const { renderArticles, scrollToTopAndNavigate, dateShort } = useArticles();

  return (
    <>
      {renderArticles.map((article, i) => (
        <S.Button
          key={i}
          onClick={e =>
            scrollToTopAndNavigate(
              e,
              encodeURI(`/artigos/${article.id}/${article.title}`),
            )
          }
        >
          <div>
            <S.Title>{article.title}</S.Title>
            <S.DivTags>
              {article.categories.map((category, i) => {
                if (i <= 1) return <Tag key={i} tag={category} />;
                else return null;
              })}
            </S.DivTags>
          </div>
          <S.Date>{dateShort(article.pubDate)}</S.Date>
        </S.Button>
      ))}
      <Button
        text="Confira outros textos"
        icon={<ButtonIcon />}
        width="100%"
        clickEvent={e =>
          scrollToTopAndNavigate(
            e,
            encodeURI(
              `/artigos/${renderArticles[0].id}/${renderArticles[0].title}`,
            ),
          )
        }
      />
    </>
  );
};

export { Articles };
