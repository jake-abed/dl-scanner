import { useRef, useState } from 'react';
import Camera from './components/Camera';
import LicenseResults from './components/LicenseResults';
import { Status } from './utils/types';
import { decodeBarcode } from './utils/barcodes';
import { decode } from 'punycode';

function App() {
  const [status, setStatus] = useState<Status>({ attempts: 0, success: false, failure: false });

  const toggleSuccess = () => {
    setStatus({ ...status, success: !status.success });
  };

  return (
    <>
      <h1 className="text-4xl text-center">Driver's License Extraction</h1>
      {!status.success && !status.failure ? (
        <div className="mx-auto flex flex-col justify-center align-center w-11/12 lg:w-7/12">
          <Camera status={status} setStatus={setStatus} />
        </div>
      ) : (
        <></>
      )}
      {status.success || status.failure ? (
        <>
          <LicenseResults scanFailed={status.failure} />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
