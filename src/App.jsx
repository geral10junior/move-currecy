import Header from './Components/Header';
import Home from './Components/Home';
import { Partenariat } from './Components/Partenariat';
import { Projects } from './Components/Projects';

function App() {
  return (
    <div className="mb-40">
      <Header />
      <Home />
      <Projects />
      <Partenariat />
    </div>
  );
}

export default App;
