import React from "react";
import {Link} from 'react-router-dom';

class About extends React.Component{
    render(){
        let imgUrl = "http://www.randyconnolly.com/funwebdev/3rd/images/travel/large1600/9496792166.jpg";
        return(
            <div className = 'banner'
                style = {{ backgroundImage: `url(${imgUrl})`,
                height: '800px',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }}>
            <div>
                <h1>About</h1>
                <h3>About</h3>
                <p>
                    <Link to='/home'>
                        <button>Home</button>
                    </Link>
                    <Link to='/browse'>
                        <button>Browse</button>
                    </Link>
                </p>
            </div>

            </div>
        );
    }
}

export default About;