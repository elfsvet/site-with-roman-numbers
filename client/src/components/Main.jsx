import { useEffect, useState } from 'react';
import convertToRoman from '../convertToRoman';

const Main = () => {
  let [input, setInput] = useState();
  // console.log('State');
  let [value, setValue] = useState();
  // console.log('State');

  useEffect(() => {
    if (value && input) {
      document.title = `${value} is ${input}`;
    }
  }, [input, value]);

  const convertNumber = (e) => {
    e.preventDefault();
    setInput(convertToRoman(e.target.number.value));
    setValue(e.target.number.value);
    e.target.reset();
  };
  return (
    <>
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
    </>
  );
};

export default Main;
