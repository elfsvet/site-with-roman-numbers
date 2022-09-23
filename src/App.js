import { useState, useEffect } from 'react';

function App() {
  let [input, setInput] = useState();
  // console.log('State');
  let [value, setValue] = useState();
  // console.log('State');

  useEffect(() => {
    if (value && input) {
      document.title = `${value} is ${input}`;
    }
  }, [input, value]);
  class NumeralConverter {
    constructor(number) {
      this.number = number;
      this.result = '';
    }
    processNumeral(symbol, symbolValue) {
      while (this.number >= symbolValue) {
        this.result += symbol;
        this.number -= symbolValue;
      }
    }
  }
  function convertToRoman(num) {
    let converter = new NumeralConverter(num);
    converter.processNumeral('M', 1000);
    converter.processNumeral('CM', 900);
    converter.processNumeral('D', 500);
    converter.processNumeral('CD', 400);
    converter.processNumeral('C', 100);
    converter.processNumeral('XC', 90);
    converter.processNumeral('L', 50);
    converter.processNumeral('XL', 40);
    converter.processNumeral('X', 10);
    converter.processNumeral('IX', 9);
    converter.processNumeral('V', 5);
    converter.processNumeral('IV', 4);
    converter.processNumeral('I', 1);
    return converter.result;
  }

  const convertNumber = (e) => {
    e.preventDefault();
    setInput(convertToRoman(e.target.number.value));
    setValue(e.target.number.value);
    e.target.reset();
  };

  return (
    <div className='container my-2 text-center'>
      <h1>Convert to Roman Numbers</h1>
      <form onSubmit={convertNumber} className='my-2'>
        <label htmlFor='number'>Number:</label>
        <input
          className='mx-4'
          type='number'
          id='number'
          name='number'
          placeholder='input the number'
        ></input>
        <button className='btn btn-primary ' type='submit'>
          Submit
        </button>
      </form>
      {value && input && (
        <div class='card'>
          <div class='card-body'>
            <h5>Converting {value} to: </h5>
            <p>{input}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
