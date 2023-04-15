import './App.css';
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import AboutMe from './Pages/AboutMe';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavBar/>
      <Routes>
        <Route path="home" element={<Home />}/>
        <Route path="blog" element={<Blog />}/>
        <Route path="aboutMe" element={<AboutMe />}/>
      </Routes>
      <Footer/>
      </div>
    </BrowserRouter>

  );
}

export default App;


    //   {/* <header className="App-header">
    //     <Container>
    //     <Form className="mb-3" controlId="formEmail">
    //       <Row>
    //         <Col md>
    //           <Form.Group>
    //             <Form.Label>Email Address</Form.Label>
    //             <Form.Control type="email" placeholder='Example@email.com'/>
    //             <Form.Text className="text-muted">
    //               We'll will never share your email
    //             </Form.Text>
    //           </Form.Group>
    //         </Col>
    //         <Col md>
    //           <Form.Group>
    //             <Form.Label>Password</Form.Label>
    //             <Form.Control type="password" placeholder='Example@email.com'/>
    //           </Form.Group>
    //         </Col>
    //       </Row>
    //       <Row>
    //         <Button variant="secondary" type="submit">Login</Button>
    //       </Row>
    //     </Form>


    //     <Card className="mb-3" style={({color: "#000"})}>
    //       <Card.Img src="https://picsum.photos/200/100"/>
    //       <Card.Body>
    //         <Card.Title>A Title</Card.Title>
    //         <Card.Text>
    //           This is a text of a body of a card.
    //         </Card.Text>
    //         <Button variant='primary'>Read More</Button>
    //       </Card.Body>
    //     </Card>

    //     <Breadcrumb>
    //       <Breadcrumb.Item>Test 1</Breadcrumb.Item>
    //       <Breadcrumb.Item>Test 2</Breadcrumb.Item>
    //       <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
    //     </Breadcrumb>
    //     {/* Success, Primary, Secondary, Failure */}
    //     <Alert variant='success' className='alert-dismissible'>
    //       This is an Alert
    //       <Button className='btn-close' aria-label='close' data-bs-dismiss="alert"></Button>
    //     </Alert>
    //     <Button>Test Button</Button>
    //     </Container>
    //   </header> */}
    // </div>