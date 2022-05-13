import { useDispatch, useSelector } from 'react-redux';

import logo from './logo.svg'
import './App.css'
import { increment, decrement, incrementBy } from './store/slices/counter';

function App() {

  const { counter } = useSelector( state => state.counter )
  const dispatch = useDispatch(); 
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>count is: { counter }</p>
        <p>
          <button type="button" onClick={ () => dispatch( increment() ) }>
            Increment
          </button>
          <button type="button" onClick={ () => dispatch( decrement() ) }>
            Decrement
          </button>
          <button type="button" onClick={ () => dispatch( incrementBy(2) ) }>
            Increment by 2
          </button>
        </p>
        
      </header>
    </div>
  )
}

export default App
