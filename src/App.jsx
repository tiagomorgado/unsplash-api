import Gallery from './components/Gallery';
import SearchForm from './components/SearchForm';
import ThemeToggle from './components/ThemeToggle'
import { useGlobalContext } from './context';

const App = () => {
  return (
    <>
      <ThemeToggle/>
      <SearchForm/>
      <Gallery/>
    </>
  );
};
export default App;
