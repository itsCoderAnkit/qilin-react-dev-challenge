import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import GitHubUser from './Components/GitHubUser';
import RegistrationForm from './Components/RegistrationForm';
import ThemeSwitcher from './Components/Theme/ThemeSwitcher';
import SimpleComp from './Components/Logger/SimpleComp';

const Profile = React.lazy(() => import('./Pages/Profile'));

function App() {
  return (
  
      <React.Suspense fallback={<p>Loading Profile...</p>}>
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/about' exact>
          <About/>
        </Route>
       
        <Route path="/profile" exact>
          
            <Profile/>          
       </Route >
       <Route path="/userProfile" exact>
          
          <GitHubUser/>          
     </Route >
     <Route path="/register" exact>
          
          <RegistrationForm/>          
     </Route >
     <Route path="/theme" exact>
          
          <ThemeSwitcher/>          
     </Route >
     <Route path="/simple" exact>
          
          <SimpleComp/>       
     </Route >
      </Switch>
      </React.Suspense>
   
  );
}

export default App;
