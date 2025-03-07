import { Projects as DataProjects } from '../../data/Projects';
import { useProjectsPage } from './useProjectsPage';
import { Grid } from '../Grid';
import { Modal } from '../../components/Modal';
import { SideMobile } from '../../components/SideMobile';
import { Sidebar } from '../../components/Sidebar';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import { SvgComponent as GitIcon } from '../../assets/images/icons/projects-git';
const SideBar = (id: number) => {
  const { goGitHub } = useProjectsPage();
  return (
    <Sidebar id={id} content={DataProjects} type="projetos">
      <Button
        text="Continue no GitHub"
        width="100%"
        clickEvent={goGitHub}
        icon={<GitIcon />}
      />
    </Sidebar>
  );
};
const Projects = (): JSX.Element => {
  const { isMobile, modal, setModal, convertID: id } = useProjectsPage();
  return (
    <>
      {isMobile && (
        <Modal status={modal} setStatus={setModal}>
          {SideBar(id)}
        </Modal>
      )}
      <Grid>
        {isMobile ? (
          <SideMobile title="Projetos" setState={setModal} />
        ) : (
          SideBar(id)
        )}
        <Text id={id} type="projetos" />
      </Grid>
    </>
  );
};
export { Projects };
