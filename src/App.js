import './App.css';
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import { useRoutes } from 'react-router-dom';
import Footer from './Footer';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import AboutMe from './Pages/AboutMe';

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home/>
    }, 
    {
      path: "/aboutMe",
      element: <AboutMe/>
    }
  ])


  return (
      <div className="App">
      <NavBar/>
      <div className="mainContent">
        {element}
      </div>
      <Footer/>
      </div>
  );
}

export default App;