import {useState} from 'react'
import './App.css';


function App() {
  const [firstNumber, setFirstNumber] = useState(2);
  const [secondNumber, setSecondNumber] = useState(null);

  const getNumber=(number) =>{
    setFirstNumber('' + firstNumber + number)
  };

  const getDisplay = () => {
    return firstNumber;
  }


  return (
    <div className="d-flex align-items-center justify-content-center mx-auto vh-100 w-100">
        <div id="calculator" className="py-2 rounded">
            <div className="container">
                <div className="row g-2">
                    <div className="col-12">
                        <h1 id="display"
                            className="fs-1 my-4 text-end text-white">
                            {getDisplay()}
                        </h1>
                    </div>
                    <div className="col-3">
                        <div className="button
                            fs-5 fw-bold text-bg-secondary text-center rounded-circle"
                            id="clearMemoryButton">
                            C
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="button
                            fs-5 fw-bold text-bg-secondary text-center rounded-circle"
                            onClick ={() => {
                              secondNumber ? setSecondNumber(secondNumber * -1)
                              ! setFirstNumber(firstNumber * -1);
                            }}
                          
                            ±
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="button
                            fs-5 fw-bold text-bg-secondary text-center rounded-circle"
                            onclick="switchToPercent()">
                            %
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="button
                            fs-5 fw-bold text-bg-warning text-center rounded-circle"
                            onclick="clickOperation('/')">
                            ÷
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="button
                            fs-5 fw-bold text-bg-dark text-center rounded-circle"
                            onClick={() => {
                              getNumber(7);
                            }}
                            7
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="button
                            fs-5 fw-bold text-bg-dark text-center rounded-circle"
                            onclick="clickNumber(8)">
                            8
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="button
                            fs-5 fw-bold text-bg-dark text-center rounded-circle"
                            onclick="clickNumber(9)">
                            9
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="button
                            fs-5 fw-bold text-bg-warning text-center rounded-circle"
                            onclick="clickOperation('x')">
                            x
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="button
                            fs-5 fw-bold text-bg-dark text-center rounded-circle"
                            onclick="clickNumber(4)">
                            4
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="button
                            fs-5 fw-bold text-bg-dark text-center rounded-circle"
                            onclick="clickNumber(5)">
                            5
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="button
                            fs-5 fw-bold text-bg-dark text-center rounded-circle"
                            onclick="clickNumber(6)">
                            6
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="button
                            fs-5 fw-bold text-bg-warning text-center rounded-circle"
                            onclick="clickOperation('-')">
                            -
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="button
                            fs-5 fw-bold text-bg-dark text-center rounded-circle"
                            onclick="clickNumber(1)">
                            1
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="button
                            fs-5 fw-bold text-bg-dark text-center rounded-circle"
                            onclick="clickNumber(2)">
                            2
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="button
                            fs-5 fw-bold text-bg-dark text-center rounded-circle"
                            onclick="clickNumber(3)">
                            3
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="button
                            fs-5 fw-bold text-bg-warning text-center rounded-circle"
                            onclick="clickOperation('+')">
                            +
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="button
                            fs-5 fw-bold text-bg-dark text-center rounded-pill"
                            onclick="clickNumber(0)">
                            0
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="button
                            fs-5 fw-bold text-bg-dark text-center rounded-circle"
                            onclick="clickNumber('.')">
                            .
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="button
                            fs-5 fw-bold text-bg-warning text-center rounded-circle"
                            onclick="calculate()">
                            =
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
}

export default App;
