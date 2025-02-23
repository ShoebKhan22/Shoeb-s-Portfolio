import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from './Frontend/components/About';
import { Home } from './Frontend/components/Home';
import { MyNavbar } from './Frontend/components/Navbar';
import { Skills } from './Frontend/components/Skills';
import { ContactMe } from './Frontend/components/ContactMe';
import { Projects } from './Frontend/components/Projects';

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <div className='appDiv' id='home' ><Home/></div>
      <div className='appDiv' id='about' ><About/></div>
      <div className='appDiv' id='skills' ><Skills/></div>
      <div className='appDiv' id='projects' ><Projects/></div>
      <div className='appDiv' id='contact' ><ContactMe/></div>
    </div>
  );
}

export default App;
