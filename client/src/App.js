import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import convertToRoman from './convertToRoman';
import Main from './components/Main';

function App() {
  // let [input, setInput] = useState();
  // // console.log('State');
  // let [value, setValue] = useState();
  // // console.log('State');

  // useEffect(() => {
  //   if (value && input) {
  //     document.title = `${value} is ${input}`;
  //   }
  // }, [input, value]);

  // const convertNumber = (e) => {
  //   e.preventDefault();
  //   setInput(convertToRoman(e.target.number.value));
  //   setValue(e.target.number.value);
  //   e.target.reset();
  // };

  return (
    <>
      <NavBar />
      <div className='container my-2 text-center'>
        {/* navbar will be here */}
        <Main />
      </div>
    </>
  );
}

export default App;
