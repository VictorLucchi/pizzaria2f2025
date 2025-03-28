import {useState} from "react";


function App(){

  const [nome, setnome] = useState('pandinha')

 // var nome = "Anjo";

return(
      <div>
        <h3>Pizzaria 2f</h3>
        <input
          className="nome"
          name="nome"
          onChange={(e)=>{setnome(e.target.value)}}
          placeholder="Digite um nome..."
        type="text" />
        <button 
        className="butaum"
        onClick={()=>{alert(nome)}}>
        CLIQUE AQUI

        </button>
      </div>


)
}

export default App
