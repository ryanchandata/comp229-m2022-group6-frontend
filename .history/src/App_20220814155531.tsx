import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Common Components
import Header from './components/header';
import Footer from './components/footer';

// Content Components
import Home from './content/home';
import About from './content/about';
import Contact from './content/contact';
import Survey from './survey-list/landing';
import Add from './survey-list/add';
import Edit from './survey-list/edit';
import PageNotFound from './content/PageNotFound';
import Answer from './survey-list/answer';

// Authentication Components
import Login from './authentication/login';
import Logout from './authentication/logout';
import Register from './authentication/register';
import RequireAuth from './authentication/requireAuth';
import Account from './authentication/account';

// Styles and Fonts
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

// App Template
class App extends React.Component {
  
  constructor(props: any) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

render(){
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>

        {/* Client-Side Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/survey" element={<RequireAuth><Survey /></RequireAuth>} />
          <Route path="/add" element={<RequireAuth><Add /></RequireAuth>} />
          <Route path="/edit/:id" element={<RequireAuth><Edit /></RequireAuth>} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/answer/:id" element={<Answer />} />
          <Route path="/account/:id" element={<RequireAuth><Account /></RequireAuth>} />
          <Route path="/response/:id" element={<RequireAuth><Account /></RequireAuth>} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </div>
   );
  }
}

export default App;
