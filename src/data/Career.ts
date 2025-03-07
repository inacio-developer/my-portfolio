import { Career as TypeCareer } from '../types/career';
const Career: { xp: TypeCareer[]; education: TypeCareer[] } = {
  xp: [
    {
      period: '2021 — 2021',
      office: 'Redator',
      enterprise: 'Prefeitura de Belo Horizonte',
      acronym: 'PBH',
    },
    {
      period: '2019 — 2021',
      office: 'Monitor',
      enterprise: 'Pontifícia Universidade Católica de Minas Gerais',
      acronym: 'PUC Minas',
    },
  ],
  education: [
    {
      period: '2023 — 2027',
      course: 'Engenharia de Software',
      school: 'Universidade Católica de Brasília',
      acronym: 'UCB',
    },
    {
      period: '2019 — 2023',
      course: 'Jornalismo',
      school: 'Pontifícia Universidade Católica de Minas Gerais',
      acronym: 'PUC Minas',
    },
  ],
};
export { Career };
