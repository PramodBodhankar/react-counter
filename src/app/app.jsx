import React from 'react';
import CounterInput from '../counter/counter.jsx';

function App() {
    return (
            <div className="align-items-center d-flex justify-content-center m-0 main-app-container row">
                <CounterInput></CounterInput>
                {/* With max value and starval input */}
                {/* <CounterInput max={10} startVal={2}></CounterInput> */}
            </div>
    );
}
export default App;