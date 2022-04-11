import navImage from "../../images/menu-top-xs.png"
import ironHackImage from "../../images/ironhack-logo-xs.png"
import './style.modules.css'

function Hero() {
    return ( 
        <div className = "hero">
            <div className="content-area">
                <nav>    
                    <img id="logo" src={ironHackImage} alt="ironhack logo"/>
                    <img id="menu" src={navImage} alt="menu"/>
                </nav>

                <div className='title'>
                    <h1>Say hello to</h1>
                    <h1>ReactJS</h1>
                </div>
                
                <div className="description">
                    <p>You will learn how to use</p>
                    <p>the most popular frontend library,</p>
                    <p>and become a Ninja developer</p>
                </div>

                <button>Awesome!</button>
            </div>
        </div>
    );
}

export default Hero;