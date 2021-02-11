import React from 'react';
import './Header.css';
import Mypic from '../Untitled design (1).png';
import Giffy from '../yy3.gif';
import Mygif from '../source.gif';
// import Giff2 from '../60203889.png';
import Htmlp from '../htmlp.webp';
import Jsp from '../jsp.gif';
import Np from '../np.webp';
import Rp from '../rp.webp';
import Pp from '../pp.png';
import Cssp from '../cssp.gif';
import Usflag from '../usflag.png';
import {Link} from 'react-router-dom';


const Second = () =>{
    return(
        <div>
            <div>
                <Link to="/"><img className="langchange" src={Usflag}></img></Link>
                <Link to="/forcv"><img className="langchange2" src="http://pngimg.com/uploads/cv/cv_PNG13.png"></img></Link>
            </div>
            <div className="imgdiv">
            
                <img className="giffy" src={Giffy} width="250px" ></img>
            
            <div className="title">
                <img src={Mypic} className="Mypic"></img>
            <h1 className="myname"> <span className="Annu">ANUDEEP</span> AYILALATH PUTHALATH  <span className="p">
            <p>"Soy un desarrollador front-end entusiasta y trabajador<br></br>
comprometidos con el aprendizaje y el desarrollo de soluciones creativas. <br></br>Considero la confianza y la satisfacción
de mis superiores y colegas para<br></br> ser el activo más valioso de mi carrera profesional. "  </p></span></h1>
            <img className="mygif" width=" 200px"src={Mygif}></img>
            </div>
            <h1 className="expert">Áreas de Especialización:</h1>
                <div className="iconz">
                    <img src={Jsp} width="100px"></img>
                    <img src={Rp} width="100px"></img>
                    <img src={Np} width="100px"></img>
                    <img src={Htmlp} width="100px"></img>
                    <img src={Cssp} width="100px"></img>
                    <img src={Pp} width="88px"></img>
                  
                </div>
            
            </div>


            
        </div>
    )
}

export default Second;