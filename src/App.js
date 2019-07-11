import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './menu'
import Carousel from './carousel';
import "../node_modules/video-react/dist/video-react.css"; // import css
//import { Player } from 'video-react';
import YouTube from './Youtube';

function App() {
  return (
      
   <div className= "Body"> 
      <Menu />
      <Carousel id="car"/>
      <br/>
      <div style= {{width:'100%', height:'100%',backgroundColor:'black'}}> 
      <h1 id="t2"style= {{height:'100%', fontSize:'60px',color:'red'}}>Videos</h1>
      </div>
      <br/>
      
      <YouTube />
        
        </div>

  );
}



//Player
//playsInline
//poster="/assets/poster.png"
//src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
// />

//}


export default App;
