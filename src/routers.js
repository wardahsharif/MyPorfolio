import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './home';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Achievements from './achievements';
import Contact from './contact';



const Routers = () => {
    return (
  <Router>
      <Routes>
         <Route path="/" element={<Homepage/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/skills" element={<Skills/>} />
         <Route path="/projects" element={<Projects/>} />
         <Route path="/achievements" element={<Achievements/>} />
         <Route path="/contact" element={<Contact/>} />
      </Routes>
     </Router> 
    )
}

export default Routers;

