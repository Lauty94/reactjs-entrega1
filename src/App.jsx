import Boton from "./componentes/boton/Boton"
import "./App.css"
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {

      function saludo(){
      console.log("Hola")
    }
    saludo()

  return (
    <>
{/*     <header>
      <nav>
        <h1 className="colorTitulo">Bienvenidos!</h1>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>

        </ul>
      </nav>
    </header> */}
    <Boton texto="comprar"/>
    <Boton texto="eliminar"/>
    </>
  )
}

export default App