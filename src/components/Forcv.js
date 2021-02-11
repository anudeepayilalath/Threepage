import React from 'react';
import './Forcv.css';
import Mypic from '../Untitled design (1).png';
import Giffy from '../yy3.gif';
import Mygif from '../source.gif';
// import Giff2 from '../60203889.png';

import Cv from '../newresume.png';
import Usflag from '../usflag.png';
import {Link} from 'react-router-dom';

const Forcv = () =>{
    return(
        <div>
            <div>
            <Link to="/"><img className="langchange2" src={Usflag}></img></Link>
                <Link to="/second"><img className="langchange" src="https://cdn.countryflags.com/thumbs/spain/flag-400.png"></img></Link>
            </div>
            <div className="imgdiv">
            
                <img className="giffy" src={Giffy} width="250px" ></img>
            
            <div className="title">
                <img src={Mypic} className="Mypic"></img>
            <h1 className="myname"> <span className="Annu">ANUDEEP</span> AYILALATH PUTHALATH  <span className="p">
            <p>"I am an enthusiastic and hardworking front-end developer <br></br>committed to learning and developing creative solutions. 
                I consider the trust and satisfaction <br></br>from my superiors and colleagues to be the most valuable assets in my professional career."
            </p></span></h1>
            <img className="mygif" width=" 200px"src={Mygif}></img>
            </div>
            
            
            </div>

            <div>
               
               <a href="https://drive.google.com/file/d/1oh5B_G52Cj-M-N869trbtzogLAJN77TS/view?usp=sharing"><img className="cv" src={Cv} width="800px"></img></a> 
            </div>


            
        </div>
    )
}

export default Forcv;