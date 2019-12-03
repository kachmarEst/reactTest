import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Navbar extends React.Component {

    render() {
        return (

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/">Blog</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                          <Link  class="nav-link"  to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                          <Link  class="nav-link" to="/articles">Articles</Link>
                        </li>
                        <li class="nav-item">
                          <Link  class="nav-link"  to="/about">About</Link>
                        </li>                      
                    </ul>
                </div>
            </nav>
           
        );
    }
}

export default Navbar;
