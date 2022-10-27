import './App.css';
import { Operation, Number, Sign } from './Components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  let state = useSelector((state: string) => state);
  let dispatch = useDispatch();
  const reset = () => {
    dispatch({ type: "RESET" });
  }

  const evaluate = () => {
    dispatch({type: "EVALUATE"})
  }
  return (
    <div className="App">
      <div className="calculator">
        <p className="calculator-display">{state}</p>
        <div className="calculcator__control">
          <div className="control__group">
            <Number value='1' content='1' />
            <Number value='2' content='2' />
            <Number value='3' content='3' />
            <Operation value='+' content='+' />
          </div>
          <div className="control__group">
            <Number value='4' content='4' />
            <Number value='5' content='5' />
            <Number value='6' content='6' />
            <Operation value='-' content='-' />
          </div>
          <div className="control__group">
            <Number value='7' content='7' />
            <Number value='8' content='8' />
            <Number value='9' content='9' />
            <Operation value='*' content='*' />
          </div>
          <div className="control__group">
            <Number value='0' content='0' />
            <Sign value='.' content='.' />
            <button className='btn' onClick={evaluate} 
            disabled={['+', '-', '*', '/','.'].includes(state[state.length - 1])}
            >=</button>
            <Operation value='/' content='/' />
          </div>
          <div className="control__group">
            <button className='btn' onClick={reset}>Очистить</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
