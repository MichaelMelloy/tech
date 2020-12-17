import React from 'react';
import '../../css/index.css';

class Icontent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            allowClick: 0,
        }
    }
    render(){
        return(
            <div className={this.props.cover}>
                <div className="icontitle">
                    <div className={this.props.title}>{this.props.titleContent}</div>
                </div>
                <div className="iconmain">
                    <div className={this.props.content}>
                        <div onClick={ () => {this.changePage(this.props.link)} } className="iconmainC">{this.props.mainContent}</div>
                        <div className="ioverlay"></div>
                    </div>
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



} export default Icontent