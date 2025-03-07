import { Feed } from '../../types/medium';
import { Projects } from '../../types/projects';
import { Item } from '../SideItem';
import * as S from './styles';

type SidebarProps = {
  content: Feed[] | Projects[];
  id: number;
  type: 'projetos' | 'artigos';
  children: JSX.Element;
};

const Sidebar = ({
  content,
  id,
  type,
  children,
}: SidebarProps): JSX.Element => {
  const item = content[id - 1];
  const resume = type === 'projetos' ? (item as Projects).resume : '';

  return (
    <S.Section>
      <S.Menu className="sideBarAnimation on">
        <div>
          <S.Category>Artigos</S.Category>
          <div>
            <S.Tag>Lendo: </S.Tag>
            <Item
              id={item.id as number}
              title={item.title}
              pubDate={item.pubDate}
              emphasis="true"
              page={type}
              resume={resume}
            />
          </div>
          <div>
            {content.length > 1 && (
              <>
                <S.Tag>Outros:</S.Tag>
                {content.map((content, i) => {
                  if (i === id - 1) return <></>;
                  return (
                    <Item
                      key={content.id}
                      id={content.id as number}
                      title={content.title}
                      pubDate={content.pubDate}
                      page={type}
                      resume={
                        type === 'projetos' ? (content as Projects).resume : ''
                      }
                    />
                  );
                })}
              </>
            )}
          </div>
        </div>
        <div>{children}</div>
      </S.Menu>
    </S.Section>
  );
};

export { Sidebar };
