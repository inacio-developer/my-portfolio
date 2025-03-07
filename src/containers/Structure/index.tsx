import * as S from './styles';
import { useStructure } from './useStructure';

type StructureProps = {
  children: JSX.Element | JSX.Element[];
};

const Structure = ({ children }: StructureProps) => {
  const { effect } = useStructure();

  return <S.Structure>{children}</S.Structure>;
};

export { Structure };
