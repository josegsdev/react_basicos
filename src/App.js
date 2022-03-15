import React, {Component} from 'react';
import logo from './assets/img/logo.svg';
import './styles/App.css';
import Header, * as h from './componentes/header'
import Cuerpo from './componentes/cuerpo'
import Agregar from './componentes/agregar'

class App extends Component{
   titulo_variable='Parrafos de Lorem Ipsum';
   parrafos=[
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id justo ac nulla ullamcorper tristique',
    ' Aenean feugiat vitae ex nec dictum',
    'ipsum primis in faucibus. Integer non facilisis leo, nec molestie risus',
    'Etiam pulvinar metus a placerat mollis'
  ];

  render(){
    return (
      <div>

        <h.Topdiv />
        <Header titulo={this.titulo_variable} />
        <Cuerpo parraf={this.parrafos}/>
        <Agregar />

      </div>
    )
  }
}

export default App;
