import { BrowserRouter } from 'react-router-dom';
import { RootRoutes as Routes } from './routes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';
import { Menu } from './containers/Menu';
import { useGetFeedQuery } from './services/API';
import { Structure } from './containers/Structure';

function App() {
  const { isLoading } = useGetFeedQuery();

  const renderPage = (): JSX.Element => {
    if (isLoading) return <></>;

    return (
      <>
        <Menu />
        <Routes />
      </>
    );
  };

  return (
    <BrowserRouter basename="/my-portfolio">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Structure>{renderPage()}</Structure>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
