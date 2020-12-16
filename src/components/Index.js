import React from 'react';
import '../css/index.css';
import moon from '../assets/background.mp4'

class Index extends React.Component {

    render(){    
      return (
        <div className="index">
            <video autoPlay muted loop class="indexBg" src={moon} />
        </div>
        );
      }
    }

export default Index;