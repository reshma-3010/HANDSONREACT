import './App.css';
import FunctionComponent from './components/FunctionComponent';
import ClassComponent from './components/ClassComponent';

function App(){
  return(
    <div>
       <h1 className="heading1">Styling using Functional and Class Component</h1>
       <div className='flex'>
       <FunctionComponent></FunctionComponent>
       <ClassComponent></ClassComponent>
       </div>
    </div>
  )
}
export default App;