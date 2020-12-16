import React from 'react';
import '../css/nav.css'
import Footer from './Footer';
import rocket from '../assets/rocket.png';

import Index from './Index';
import Photography from './Photography';

class Nav extends React.Component {
    constructor(props){
        super(props)
        this.state=  {
            lastScrollPosition: 0,
            currentScrollPosition: 0,
        }
    }

    componentDidMount() 
    {
        document.addEventListener('scroll', () => this.handleScroll())
    }

    render(){    
      return (
        <ul className="navbar">
            <li ref={node => this.list = node} className="navitem" onClick={() => {this.changePage(<Index />)}}><img className="navrocket" src={rocket} /></li>
            <li className="navitem" onClick={() => {this.changePage(<Photography />)}}>PHOTOGRAPHY</li>
            <li className="navitem" onClick={() => {this.changePage(<Index />)}}>ASTROPHOTOGRAPHY</li>
            <li className="navitem" onClick={() => {this.changePage(<Index />)}}>PROJECTS</li>
            <li className="navitem" onClick={() => {this.changePage(<Index />)}}>ABOUT</li>
        </ul>
        );
      }

    //Functions

    changePage = (val) => 
    {
        let thingy = document.getElementsByClassName("transitionBody")[0].style
        thingy.display = "block"
        thingy.opacity = 1
        setTimeout(() => {
        thingy.top = "0%"
            setTimeout(() => {
                console.log("helo")
                this.props.setPage(val); 
                document.getElementsByClassName("transitionBody")[0].style.top = "-100%"
                setTimeout(() => {
                    thingy.top = "100%"
                    thingy.display = "none"
                },1000)
            }, 1000)
        }, 100)

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