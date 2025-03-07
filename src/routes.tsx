import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Project } from './pages/Project';
import { Article } from './pages/Articles';
import { Stacks } from './pages/Stacks';
import { About } from './pages/About';
const RootRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projetos/:id/:title" element={<Project />} />
    <Route path="/artigos/:id/:title" element={<Article />} />
    <Route path="/stacks" element={<Stacks />} />
    <Route path="/sobre" element={<About />} />
  </Routes>
);
export { RootRoutes };
