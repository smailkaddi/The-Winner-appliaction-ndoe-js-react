import React, { Component } from 'react';
import './App.css';
import Home from './components/home.component';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import CategoriesList from './components/CategoriesList';
import CategoriesEdit from './components/CategoriesEdit';
import QuestionsEdit from './components/questionEdit';
import AuthService from "./services/auth.service";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardAdmin from "./components/board-admin.component";
import catyadd from "./components/categories-admin.component";
import qstadd from "./components/QuestionList";
import Login from "./components/login.component";
import Register from "./components/register.component";


class App extends Component {
constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }
  


  render() {
     const { currentUser, showAdminBoard } = this.state;
     return (
       <Router>
      <div className="form">
        <nav className="navbar navbar-expand navbar-dark bg-dark ">
          <Link to={"/"} className="navbar-brand">
            The Winning
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/Categories"} className="nav-link">
                  Categories
                </Link>
              </li>
            )}
            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/qstadd"} className="nav-link">
                  Questions
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
       
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>
        <div className="container mt-3">
      
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/QtsAdmin" component={catyadd} />
            <Route path="/qstadd" component={qstadd} />
         <Route exact path={["/", "/home"]} component={Home} />
          <Route path='/Categories' exact={true} component={CategoriesList}/>
          <Route path='/Categories/:id' component={CategoriesEdit}/>
          <Route path='/Questions/:id' component={QuestionsEdit}/>
        </Switch>
      
      </div>
      </div>
      </Router>
    )
  }
}

export default App;