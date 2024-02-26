import Webcam from 'react-webcam';
import { useRef, useState } from 'react';
import { CameraProps } from '../utils/types';
import { decodeBarcode } from '../utils/barcodes';

function Camera(props: CameraProps) {
  const [pic, setPic] = useState<string | undefined | null>(null);
  const { status, setStatus } = props;
  const camRef = useRef<Webcam>(null);

  const videoConstraints = {
    aspectRatio: 4 / 3,
    resizeMode: 'crop-and-scale',
    facingMode: 'environment',
  };

  const attemptScan = async () => {
    const shot = camRef?.current?.getScreenshot({ width: 1800, height: 400 });
    const newAttempts = status.attempts + 1;
    const img = new Image();
    img.src = shot as string;
    const decoded = await decodeBarcode(img);
    console.log(decoded);
    if (decoded.error && newAttempts === 3) {
      setStatus({ ...status, attempts: newAttempts });
      return;
    }
    if (decoded.error && newAttempts === 5) {
      setStatus({ ...status, attempts: newAttempts, failure: true });
      return;
    }
    if (decoded.error) {
      setStatus({ ...status, attempts: newAttempts });
      return;
    }
    if (decoded.result) {
      setStatus({ ...status, attempts: newAttempts, success: true });
      return;
    }
  };

  return (
    <>
      <div className="flex p-2 md:p-8">
        <Webcam
          className="mx-auto"
          audio={false}
          screenshotFormat="image/png"
          screenshotQuality={1}
          videoConstraints={videoConstraints}
          ref={camRef}
        />
      </div>
      <button className="bg-green-100 text-3xl" onClick={attemptScan}>
        Take Pic
      </button>
      {status.attempts === 3 && (
        <p>
          Hey, looks like you're having a hard time scanning your barcode. If you're on a desktop, you may wish to try
          using a mobile phone instead.
          <br />
          <br />
          Please try two more times and if you're still having trouble, we'll let you manually enter your information.
        </p>
      )}
      <p>{navigator.platform}</p>
    </>
  );
}

export default Camera;
