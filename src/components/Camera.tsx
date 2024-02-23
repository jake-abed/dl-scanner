import Webcam from 'react-webcam';
import { useRef } from 'react';

function Camera({ setPic }: { setPic: (pic: string | undefined | null) => void }) {
  const camRef = useRef<Webcam>(null);

  const videoConstraints = {
    width: 1600,
    height: 500,
  };

  return (
    <>
      <div className="flex px-2 md:px-8">
        <Webcam
          className="mx-auto"
          audio={false}
          screenshotFormat="image/png"
          minScreenshotHeight={500}
          minScreenshotWidth={1600}
          screenshotQuality={1}
          videoConstraints={videoConstraints}
          ref={camRef}
        />
      </div>
      <button className="bg-green-100 text-3xl" onClick={() => setPic(camRef?.current?.getScreenshot())}>
        Take Pic
      </button>
    </>
  );
}

export default Camera;
