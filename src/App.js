import React from 'react';
import './App.css';
import Transition from './components/Transition';
import Nav from './components/Nav';
import Footer from './components/Footer';

import Index from './components/Index';
import Photography from './components/Photography';

import rocket from './assets/rocket.png';

class App extends React.Component {
  constructor(props){
    super(props)

    this.handler = this.handler.bind(this);
    this.state = {
      currentPage: <Index />,
    }
  }

  componentDidMount()
  {
    document.addEventListener('scroll', () => this.handleScroll())
  }

render(){    
  return (
    <div className="App">
      <Transition />
      <Nav setPage={this.handler} />
      <pageSpacer style={{marginTop: "5%"}} />
      {this.state.currentPage} {/*PAGE CONTENT IS IN HERE*/ }
      {/*<Footer />*/}
      <img src={rocket} className="scroll" />
    </div>
    );
  }

//Functions

  handler(val) 
  {
    this.setState({currentPage: val});
  }

  handleScroll()
  {
    {
      var yPosition = window.scrollY;
      var maxScrollHeight = window.document.body.offsetHeight - window.innerHeight;
  
      let percentage = (yPosition * 100) / maxScrollHeight;
  
      if(percentage > 96)
      {
          percentage = 96;
      }
      if(percentage < 1)
      {
          percentage = 1;
      }
  
      document.getElementsByClassName("scroll")[0].style.top = percentage+"vh";
    }
  }

}//End of component

export default App;
