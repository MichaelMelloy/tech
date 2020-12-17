import React from 'react';
import '../css/footer.css';
import Daten from './Daten';

class Footer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      allowClick: 0,
    }
  }


    render(){    
      return (
        <div className="Footer">
          <div className="wrapper">
            <div className="name">Michael Deiwald</div>
            <div onClick={() => {this.changePage(<Daten />)}} className="datenschutz">Datenschutz | Impressum</div>
          </div>
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

export default Footer;