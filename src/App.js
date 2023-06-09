import './App.css';
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import { useRoutes } from 'react-router-dom';
import WebsiteFooter from './WebsiteFooter';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import EditBlogPost from './Components/EditBlogPost/EditBlogPost';
import BlogPost from './Components/BlogPost/BlogPost'
import AboutMe from './Pages/AboutMe';
import AdminLogin from './Components/AdminLogin/AdminLogin';

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home/>
    }, 
    {
      path: "/home",
      element: <Home/>
    },
    {
      path: "/aboutMe",
      element: <AboutMe/>
    },
    {
      path: "/blog",
      element: <Blog/>
    },
    {
      path: "/blog/:id",
      element: <BlogPost/>
    },
    {
      path: "/blog/:id/edit",
      element: <EditBlogPost/>
    },
    {
      path: "/admin/login",
      element: <AdminLogin/>
    }
  ])


  return (
      <div className="App">
        <NavBar/>
        <div className="mainContent">
          {element}
        </div>
        <WebsiteFooter/>
      </div>
  );
}

export default App;