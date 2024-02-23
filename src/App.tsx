import { useState } from 'react';
import Camera from './components/Camera';

function App() {
  const [pic, setPic] = useState<string | undefined | null>(null);

  return (
    <div className="mx-auto flex flex-col justify-center align-center w-11/12 lg:w-7/12">
      <h1 className="text-4xl text-center font-extrabold ">Driver's License Scanner</h1>
      <Camera setPic={setPic} />
      {pic ? <img src={pic || ''} alt="pic" /> : <></>}
    </div>
  );
}

export default App;
