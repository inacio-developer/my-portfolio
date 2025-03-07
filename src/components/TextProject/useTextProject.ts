import { Projects as TypeProjects } from '../../types/projects';
import { Projects } from '../../data/Projects';
import { useDate } from '../../hooks/useDate';
import parse from 'html-react-parser';

const useTextProject = () => {
  const data = Projects;
  const isData = data as TypeProjects[];
  const { monthPerExtense } = useDate();

  const projectsBodyText = (id: number) => {
    return parse(isData[id - 1].description);
  };

  return { isData, monthPerExtense, projectsBodyText };
};

export { useTextProject };
