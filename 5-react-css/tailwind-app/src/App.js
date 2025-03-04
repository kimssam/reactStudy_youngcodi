import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div>
        <div className='m-0 text-gray-400 rounded-2xl p-5 m-2 flex justify-around items-center border border-gray-400'>
          <p>tailwindcss입니다.</p>
          <button className='bg-gray-300 border-0 p-2 rounded-md hover:bg-gray-400 hover:text-white'>버튼</button>
        </div>
      </div>
    </>
  );
}

export default App;
