import logo from './logo.svg';
import './App.css';
import ListaDestinos from './comp/lista';
import Formulario from './comp/form';

function App() {
  return (
    <div className="App">
     <div>
     <ListaDestinos/>
     </div>
     <div>
      <Formulario></Formulario>
     </div>
     
    </div>
  );
}

export default App;
