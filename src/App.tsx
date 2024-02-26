import { useRef, useState } from 'react';
import Camera from './components/Camera';
import LicenseResults from './components/LicenseResults';
import { ScanStatus } from './utils/types';

function App() {
  const [scanStatus, setScanStatus] = useState<ScanStatus>({ attempts: 0, success: false, failure: false });

  return (
    <>
      <h1 className="text-4xl text-center">Driver's License Extraction</h1>
      {!scanStatus.success && !scanStatus.failure ? (
        <div className="mx-auto flex flex-col justify-center align-center w-11/12 lg:w-7/12">
          <Camera scanStatus={scanStatus} setScanStatus={setScanStatus} />
        </div>
      ) : (
        <></>
      )}
      {scanStatus.failure && (
        <>
          <h2 className="text-xl text-center font-bold">Enter Your Driver's License Info</h2>
          <LicenseResults scanFailed={true} />
        </>
      )}
      {scanStatus.success && (
        <>
          <LicenseResults {...scanStatus.scanResults} scanFailed={false} />
        </>
      )}
    </>
  );
}

export default App;
