import React, {Component, Fragment} from 'react';
import Button from '@mui/material/Button';


export class Migas extends Component {
  render(){
    return(
      <div>
        <span>Estas en  :</span>
        <Button variant="contained">Home</Button>
        <Button variant="outlined">Seccion</Button>
      </div>
      )
  }
}

class Cuerpo extends Component {
  parrafos_counter(){
    return this.props.parraf.length;
  }

  render(){
    return(
      <Fragment>
        <Migas />
        <h3>Tienes {this.parrafos_counter()} parrafo(s)</h3>
        {
          this.props.parraf.map((par,indice)=><p>{(indice +1) +'.- '+ par}</p>
          )
        }
      </Fragment>
    )
  }
}

export default Cuerpo;
