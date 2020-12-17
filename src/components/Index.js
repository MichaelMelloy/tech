import React from 'react';
import '../css/index.css';
import moon from '../assets/background.mp4'
import Photography from './Photography';
import Astrophotography from './Astrophotography';
import Projects from './Projects';
import About from './About';
import Icontent from './subcomponents/Icontent';

class Index extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      allowClick: 0,
    }
  }


  componentDidMount() 
  {
      this.setState({allowClick: Date.now()})
  }

    render(){    
      return (
        <div className="index">
            <video autoPlay muted loop class="indexBg" src={moon} />

          <div class="icover">
            <div className="ititle">MICHAEL MELLOY</div>
            <div className="icontainer">
              <div onClick={ () => {this.changePage(<Photography />)} } className="iButton">ABOUT</div>
              <div className="ioverlay"></div>
            </div>
          </div>

          <Icontent titleContent="PHOTOGRAPHY" mainContent="VIEW" cover="iconcover fire" content="contentcontainer contentcontainer1" title="icontitleC icontitleC1"  link={<Photography />} setPage={this.props.setPage} />
          <Icontent titleContent="ASTROPHOTOGRAPHY" mainContent="VIEW" cover="iconcover astro" content="contentcontainer contentcontainer2" title="icontitleC icontitleC2"  link={<Astrophotography />} setPage={this.props.setPage} />
          <Icontent titleContent="PROJECTS" mainContent="VIEW" cover="iconcover projects" content="contentcontainer contentcontainer1" title="icontitleC icontitleC1"  link={<Projects />} setPage={this.props.setPage} />

        </div>
        );
      }

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

    }

export default Index;