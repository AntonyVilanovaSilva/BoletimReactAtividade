import './App.css';
import Button from './components/Button'
import Input from './components/Input'
import Label from './components/Label'

function App() {
  return (
    <div className="App">
      <h2>Boletim</h2>

     <div className='mb-3'>
     <label>Aluno</label>
      <Input/>
     </div>
      
      <div class="container text-center">
      <div class="row">
      <div class="col-6">

     <div className='text-start '>
      <label>Nota 1</label>
      <Input/>
     </div>
      
      
     <div className='text-start '>
      <label>Nota 2</label>
      <Input/>
     </div>
      
     <div className='text-start '>
      <label>Nota 3</label>
      <Input/>
     </div>
      
     <div className='text-start '>
      <label>Nota 4</label>
      <Input/>
     </div>

     </div>
     <div class="col-6 mt-5">
     <label>Resultado</label>
     </div>
    
     <div className='col-12 d-flex justify-content-center flex-column mt-3'>

    <Button label="Calcular" cor="verde" /> 
    <Button label="Reiniciar" cor="vermelho" /> 


    </div>
    </div>
    </div>


     
    </div>

    
  );
}

export default App;
