import NavBar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services'
import About from './components/About';
import Team from './components/Team'
import { Box } from '@material-ui/core';
import "./App.css";

function App() {
  return (
    <Box>
      <NavBar />
      <Home />
      <Services />
      <About />
      <Team />  
    </Box>
  );
}

export default App;
