import { Benefits } from './Components/Benefits/Benefits';
import { Footer } from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import { Partenariat } from './Components/Partenariat';
import { Projects } from './Components/Projects';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Projects />
      <Partenariat />
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;
