import { Benefits } from './Components/Benefits/Benefits';
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
      <Benefits />
    </div>
  );
}

export default App;
