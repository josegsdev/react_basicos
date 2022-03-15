import React, {Component} from 'react';
//import '../styles/header.css';


class Header extends Component {
  render(){
    return(
      <div className="header">
        {
          this.props.titulo
        }
      </div>
    )
  }
}

export class Topdiv extends Component {
  render(){
    return React.createElement('div',{},'menu superior : Home | Cosas');
  }
}

export default Header;
