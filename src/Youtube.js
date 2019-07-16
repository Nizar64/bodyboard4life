import React, {Component} from 'react';
import {CardDeck, Card, CardBody,CardHeader} from 'reactstrap';
class Youtube extends Component {
    render (){ return (


        <div className="Youtube">
            <div className="Ligne1"style={{marginLeft:"20px", marginRight:"20px"}}>
          <CardDeck>
      <Card>
        <CardHeader style= {{color:"#f0932b"}}> Jamie O'Brien BODYBOARDING  </CardHeader>
        <CardBody>
        
        <iframe width="245" height="141" 
        title='video_Youtube'
        src="https://www.youtube.com/embed/k6jNU9qVYAI" 
        frameborder="0" allow="accelerometer; autoplay; 
        encrypted-media; gyroscope; 
        picture-in-picture" allowFullScreen/>

      
    
        </CardBody>
      </Card>
      <Card>
        <CardHeader style= {{color:"#f0932b"}}> JEFF HUBBARD MAUI</CardHeader>
        <CardBody>
        <iframe 
        width="245" height="141" 
        title='video_Youtube'
        src= "https://www.youtube.com/embed/Shrcq2kGy4o"
        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        />
        </CardBody>
      </Card>
      <Card>
        <CardHeader style= {{color:"#f0932b"}}> BRAHIM IDDOUCH </CardHeader>
        <CardBody>
        <iframe 
        width="245" height="141" 
        title='video_Youtube'
        src= "https://www.youtube.com/embed/XhLUxWdMM3E"
        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        />
        </CardBody>
      </Card>
      <Card>
        <CardHeader style= {{color:"#f0932b"}}> ANAS ADLI</CardHeader>
        <CardBody>
        <iframe 
        width="245" height="141" 
        title='video_Youtube'
        src="https://www.youtube.com/embed/nWJmNj9vQ-U" 
        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        />
        </CardBody>
      </Card>
    </CardDeck> 
    </div>
    <div className="Ligne2" style={{marginTop:"20px",marginLeft:"20px", marginRight:"20px"}}>
    <CardDeck>
      <Card>
        <CardHeader style= {{color:"#f0932b"}}>LEWY FiNNEGAN</CardHeader>
        <CardBody>
        <iframe 
        width="245" height="141" 
        title='video_Youtube'
        src= "https://www.youtube.com/embed/A6pJyrkSq50"
        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        />
        </CardBody>
      </Card>
      <Card>
        <CardHeader style= {{color:"#f0932b"}}>IAIN CAMPBELL</CardHeader>
        <CardBody>
        <iframe 
        width="245" height="141" 
        title='video_Youtube'
        src="https://www.youtube.com/embed/3N06tjVv6cM"
        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        />
        </CardBody>
      </Card>
      <Card>
        <CardHeader style= {{color:"#f0932b"}}> DALLAS SINGER</CardHeader>
        <CardBody>
        <iframe 
        width="245" height="141" 
        title='video_Youtube'
        src= "https://www.youtube.com/embed/HvgFT8QbUAU"
        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        />
        </CardBody>
      </Card>
      <Card>
        <CardHeader style= {{color:"#f0932b"}}>JACK STONNE</CardHeader>
        <CardBody>
        <iframe 
        width="245" height="141" 
        title='video_Youtube'
        src="https://www.youtube.com/embed/p2QVlLTecjg"
        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        />
        </CardBody>
      </Card>
    </CardDeck> 
    </div>  

        
       
</div>
        

     
    );
        


    }
} 
 
export default Youtube;