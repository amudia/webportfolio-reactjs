import React, {Component, Image} from 'react';
import './intro.css';
import Avatar from 'material-ui/Avatar';
import avatar from '../../assets/avatar.jpg'


class IntroComponent extends Component {
    render() {
        return (
          <div className="introduction">
          <img src={avatar} style={{height:150, width:150, borderRadius:100}} />
            {/* <Avatar src={avatar} size={150}/> */}
            <p className="introduction-text">
              Junior Programmer
            </p>
          </div>
        );
    }
}

export default IntroComponent;
