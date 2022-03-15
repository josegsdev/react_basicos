import React, {Component, Fragment} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';

class Agregar extends Component{
/*
REFERENCIA THIS
  constructor(){
    super();
    this.agregar= this.agregar.bind(this);
    //en la construccion del objeto de la clase se crea la propiedad agregar
    // a la cual se le agrega al valor de la clase a traves de this
  }
  agregar(event){
    console.log(this);
    event.preventDefault();
  }
*/

  nuevoParrafo= React.createRef();
  nuevoParrafoInputNormal= React.createRef();

  agregar = (event)=>{
    console.log(this.nuevoParrafo.value)
  }
  agregarInputNormal =()=>{
    console.log(this.nuevoParrafoInputNormal.current.value);
  }

  render(){
    return(
      <Fragment>

        <form autoComplete="false" onSubmit={this.agregarInputNormal}>

         <input
           type="text"
           label="Parrafo"
           ref={this.nuevoParrafoInputNormal}
           />

         <div className="centrarBoton">
           <Button
             variant="outlined"
             startIcon={<AddCircleSharpIcon />}
             onClick={this.agregarInputNormal}>
             Agregar
           </Button>
         </div>
       </form>


        <form autoComplete="false" onSubmit={this.agregar}>
         <TextField

           type="text"
           label="Parrafo"
           variant="outlined"
           inputRef={(e)=>{this.nuevoParrafo=e}}
           />
         <div className="centrarBoton">
           <Button
             variant="outlined"
             startIcon={<AddCircleSharpIcon />}
             onClick={this.agregar}>
             Agregar
           </Button>
         </div>
       </form>

       
    </Fragment>
    )
  }

}

export default Agregar;
