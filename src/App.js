import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './menu'
import Carousel from './carousel';
import "../node_modules/video-react/dist/video-react.css"; // import css
import { Player } from 'video-react';


function App() {
  return (
   <div> 
      <Menu />
      <Carousel id="car"/>
      <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
}
      <h2 id="t2">Coucou</h2>
     

  
   </div>
  );
}


export default App;
