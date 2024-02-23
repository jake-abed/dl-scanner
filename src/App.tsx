import { useState } from 'react';
import Camera from './components/Camera';
import { Status } from './utils/types';

function App() {
  const [pic, setPic] = useState<string | undefined | null>(null);
  const [status, setStatus] = useState<Status>({ attempts: 0, success: false, failure: false });

  const toggleSuccess = () => {
    setStatus({ ...status, success: !status.success });
  };

  return (
    <>
      {!status.success ? (
        <div className="mx-auto flex flex-col justify-center align-center w-11/12 lg:w-7/12">
          <h1 className="text-4xl text-center font-extrabold ">Driver's License Scanner</h1>
          <Camera setPic={setPic} />
          {pic ? <img src={pic || ''} alt="pic" /> : <></>}
        </div>
      ) : (
        <></>
      )}
      <button onClick={toggleSuccess} className="bg-green-100 text-3xl">
        TOGGLE SUCCESS
      </button>
    </>
  );
}

export default App;
