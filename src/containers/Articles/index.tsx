import { Feed } from '../../types/medium';
import { useArticlesPage } from './useArticlesPage';
import { Grid } from '../Grid';
import { Sidebar } from '../../components/Sidebar';
import { SideMobile } from '../../components/SideMobile';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import { SvgComponent as MediumIcon } from '../../assets/images/icons/articles-medium';
import { Modal } from '../../components/Modal';

const SideBar = () => {
  const { idConvert: id, data, navForMedium } = useArticlesPage();

  const list: Feed[] = (data as Feed[]).slice(0, 4);

  return (
    <Sidebar content={list} id={id} type="artigos">
      <Button
        text="Continue no Medium"
        width="100%"
        clickEvent={navForMedium}
        icon={<MediumIcon />}
      />
    </Sidebar>
  );
};

const Articles = (): JSX.Element => {
  const {
    data,
    idConvert: id,
    isMobile,
    isLoading,
    modal,
    setModal,
  } = useArticlesPage();

  return (
    <>
      {isMobile && (
        <Modal status={modal} setStatus={setModal}>
          {SideBar()}
        </Modal>
      )}
      <Grid>
        {!isLoading && data ? (
          <>
            {isMobile ? (
              <SideMobile title="Artigos" setState={setModal} />
            ) : (
              SideBar()
            )}
            <Text id={id} type="artigos" />
          </>
        ) : null}
      </Grid>
    </>
  );
};

export { Articles };
