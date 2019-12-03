import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navbar extends React.Component {

    render() {
        return (

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Blog</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" name='home' onClick={this.props.click} href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" name='articles' onClick={this.props.click} href="#">Articles</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" name='about' onClick={this.props.click} href="#">About</a>
                        </li>                      
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
