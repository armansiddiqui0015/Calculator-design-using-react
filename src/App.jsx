import './App.css'
import BtnContainer from './component/BtnContainer'
import Display from './component/Display'

function App() {
  let ButtonNames = ['AC','DEL','%','/','7','8','9','*','4','5','6','-','1','2','3','+','0','00','.','=']
 
  return (
    <div className='container-div'>
      <Display />
     <BtnContainer ButtonNames={ButtonNames}/>
    </div>
  )
}

export default App
