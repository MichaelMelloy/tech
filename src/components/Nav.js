import React from 'react';
import '../css/nav.css'
import Footer from './Footer';
import rocket from '../assets/rocket.png';

import Photography from './Photography';
import Astrophotography from './Astrophotography';
import Projects from './Projects';
import About from './About';
import Index from './Index';

class Nav extends React.Component {
    constructor(props){
        super(props)

        this.state=  {
            allowClick: 0,
            lastScrollPosition: 0,
            currentScrollPosition: 0,
        }
    }

    componentDidMount() 
    {
        this.setState({allowClick: Date.now()})
        document.addEventListener('scroll', () => this.handleScroll())
    }

    render(){    
      return (
        <ul className="navbar">
            <li ref={node => this.list = node} className="navitem" onClick={ () => {this.changePage(<Index setPage={this.props.setPage} />)} }><img className="navrocket" src={rocket} /></li>
            <li className="navitem" onClick={() => {this.changePage(<Photography />)}}>PHOTOGRAPHY</li>
            <li className="navitem" onClick={() => {this.changePage(<Astrophotography />)}}>ASTROPHOTOGRAPHY</li>
            <li className="navitem" onClick={() => {this.changePage(<Projects />)}}>PROJECTS</li>
            <li className="navitem" onClick={() => {this.changePage(<About />)}}>ABOUT</li>
        </ul>
        );
      }

    //Functions

    changePage = (val) => 
    {
        if(Date.now() - this.state.allowClick >= 1300){ 
            let thingy = document.getElementsByClassName("transitionBody")[0].style
            thingy.display = "block"
            setTimeout(() => {
            thingy.top = "0%"
                setTimeout(() => {
                    this.props.setPage(val); 
                    document.getElementsByClassName("transitionBody")[0].style.top = "-100%"
                    setTimeout(() => {
                        thingy.top = "100%"
                        thingy.display = "none"
                    },500)
                }, 700)
            }, 100)
            this.setState({allowClick: Date.now()})
         }
    }

    handleScroll()
        {
            this.setState({lastScrollPosition: this.state.currentScrollPosition})
            this.setState({currentScrollPosition: window.scrollY})

            if(this.state.currentScrollPosition > this.state.lastScrollPosition)
            {
                // Hide Navbar
                document.getElementsByClassName("navbar")[0].style.opacity = 0;
                document.getElementsByClassName("scroll")[0].style.transform = "rotate(180deg)" //Not for navbar, but same function and i am just bored to make the same function twice
            }else
            {
                // Show Navbar
                document.getElementsByClassName("navbar")[0].style.opacity = 1;
                document.getElementsByClassName("scroll")[0].style.transform = "rotate(0deg)" //Not for navbar, but same function and i am just bored to make the same function twice
            }
        }

} //End of Component


export default Nav;