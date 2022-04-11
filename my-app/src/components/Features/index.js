import icon1 from "../../images/icon1.png"
import icon2 from "../../images/icon2.png"
import icon3 from "../../images/icon3.png"
import icon4 from "../../images/icon4.png"

import "./style.modules.css"


function Features() {
    const features = [
        {
            title:"Declarative",
            src:icon1,
            text:"React makes it painless to create insteractive UIs"
        },
        {
            title:"Components",
            src:icon2,
            text:"Build encapsulated components that manage their state"
        },
        {
            title:"Single-Way",
            src:icon3,
            text:"A set of immutable values are passed to the components"
        },
        {
            title:"JSX",
            src:icon4,
            text:"Statically typed designed to run on modern browsers"
        }
    ]

    return (
        <div className="features-section">
            <div>
                <img src={features[0].src} alt={features[0].tittle}></img>
                <h3>{features[0].title}</h3>
                <p>{features[0].text}</p>
            </div>
            
            <div>
                <img src={features[1].src} alt={features[1].tittle}></img>
                <h3>{features[1].title}</h3>
                <p>{features[1].text}</p>
            </div>

            <div>
                <img src={features[2].src} alt={features[2].tittle}></img>
                <h3>{features[2].title}</h3>
                <p>{features[2].text}</p>
            </div>
            
            <div>
                <img src={features[3].src} alt={features[3].tittle}></img>
                <h3>{features[3].title}</h3>
                <p>{features[3].text}</p>
            </div>
        </div>
            


    );
}

export default Features;