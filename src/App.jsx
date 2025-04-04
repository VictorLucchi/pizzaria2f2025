import {useState} from "react";
import poke from './assets/pokeapi_256.png'


function App(){

  

 // var nome = "Anjo";

 const Formulario = (props) => {
 
  const [nome, setnome] = useState('pandinha')

    return (
        <div>
           <input
          className="nome"
          name="nome"
          onChange={(e)=>{setnome(e.target.value)}}
          placeholder={props.sombra != null ? props.sombra : "texto padrão"}
        type="text" />
        <button 
        className="butaum"
        onClick={()=>{alert(nome)}}>
        CLIQUE AQUI

        </button>

        </div>

    )

 }

return(
      <div>
        <h3>Pizzaria 2f</h3>
        <p>texto do paragrafo</p>
        <img src={poke} style={{width:200, height:100 }}/>
       <Formulario sombra="digite seu nome..."/>
       <Formulario sombra="digite seu e-mail..."/>
       <Formulario sombra="(99) 90000-0000"/>
       <Formulario/>
      </div>


)
}

export default App
