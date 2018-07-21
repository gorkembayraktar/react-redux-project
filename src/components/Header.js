import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component{
    // ilk çağırılan
    constructor(){
        super();

        this.state = {
            isNavOpen: false
        }
    }

    buttonClicked(){
        this.setState({
           isNavOpen: !this.state.isNavOpen
        })
    }

    render(){
        console.log('render');
        return(
            <header>
                <nav className="container navbar navbar-expand-lg navbar-light justify-content-between">
                    <a className="navbar-brand">Tag</a>

                    <button className="navbar-toggler" type="button" onClick={this.buttonClicked.bind(this)}>

                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse" style={{display: this.state.isNavOpen ? "block" : "none"}}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link activeClassName="active" className="nav-link" to="/">Anasayfa</Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClassName="active" className="nav-link" to="/hakkimda">Hakkımızda</Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClassName="active" className="nav-link" to="/iletisim">İletisim</Link>
                            </li>
                        </ul>

                    </div>

                </nav>
            </header>
        )
    }
}


export default Header;