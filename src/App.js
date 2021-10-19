import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Details from './Component/Details/Details';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import AuthProvider from './Component/Context/AuthProvider';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import FooterPage from './Component/Footer/Footer';
import MyProfile from './Component/Profile/MyProfile';
import UserProfile from './Component/UserProfile/UserProfile';
import NotFound from './Component/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header/>
        <Switch>

        <Route exact path="/">
        <Home></Home>
        </Route>

        <Route exact path="/home">
        <Home></Home>
        </Route>

        

        <PrivateRoute exact path="/details/:uID">
        <Details></Details>
        </PrivateRoute>

        <Route exact path="/details">
         <Details></Details>
          </Route>

          <Route exact path="/login">
        <Login></Login>
        </Route>
        
        <Route exact path="/register">
        <Register></Register>
        </Route>

        <PrivateRoute exact path="/profile">
       <MyProfile></MyProfile>
        </PrivateRoute>

        <PrivateRoute exact path="/userprofile">
       <UserProfile></UserProfile>
        </PrivateRoute>
        
        <Route path="*">
        <NotFound></NotFound>
        </Route>

        </Switch>
        <FooterPage></FooterPage>
      </Router>
      </AuthProvider>
     
    </div>
  );
}

export default App;
