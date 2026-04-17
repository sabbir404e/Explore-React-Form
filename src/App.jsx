import './App.css';
import NormalForm from './components/normalForm/NormalForm';
import FormAction from './components/formAction/FormAction';
import ControlledField from './components/controlledFilled/ControlledField';
import UnControlledField from './components/unControlledField/UnControlledField';

function App() {

  return (
    <>

     <h2>Explore React Form</h2>
     {/* <NormalForm></NormalForm> */}
     {/* <FormAction></FormAction> */}
     {/* <ControlledField></ControlledField> */}
     <UnControlledField></UnControlledField>
              
    </>
  )
}

export default App
