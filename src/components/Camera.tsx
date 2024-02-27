import Webcam from 'react-webcam';
import { useRef } from 'react';
import { CameraProps, ScanResults } from '../utils/types';
import { decodeBarcode } from '../utils/barcodes';

function Camera(props: CameraProps) {
    // This should probably be integrated into props - vestigial from early testing.
    const MAX_ATTEMPTS = 6;
    const { scanStatus, setScanStatus } = props;
    const camRef = useRef<Webcam>(null);

    // Video constraints may need to be adjusted for mobile devices
    const usingMobile = navigator.platform === 'iPhone' || navigator.platform === 'Android';
    const aspectRatio = usingMobile ? 3 / 10 : 10 / 3;
    const width = usingMobile ? 600 : 2000;
    const height = usingMobile ? 2000 : 600;

    const videoConstraints = {
        aspectRatio: aspectRatio,
        width: width,
        height: height,
        resizeMode: 'crop-and-scale',
        facingMode: 'environment',
    };

    const attemptScan = async () => {
        // Grab the screenshot as base64 encoded string.
        const shot = camRef?.current?.getScreenshot({ width: 1800, height: 400 });
        const newAttempts = scanStatus.attempts + 1;
        // Create an image element and set the src to the base64 string before passing it to the decoder.
        const img = new Image();
        img.src = shot as string;
        const decoded = await decodeBarcode(img);
        if (decoded.error && newAttempts === MAX_ATTEMPTS) {
            setScanStatus({ ...scanStatus, attempts: newAttempts, failure: true });
            return;
        }
        if (decoded.error) {
            setScanStatus({ ...scanStatus, attempts: newAttempts });
            return;
        }
        const scanResults = decoded.result as ScanResults;
        setScanStatus({ ...scanStatus, attempts: newAttempts, success: true, scanResults: scanResults });
        return;
    };

    return (
        <div className="bg-zinc-900 p-4 md:p-8 gap-4 flex flex-col align-center rounded-xl">
            <div className="flex">
                <Webcam
                    className="mx-auto"
                    audio={false}
                    screenshotFormat="image/png"
                    screenshotQuality={1}
                    videoConstraints={videoConstraints}
                    ref={camRef}
                />
            </div>
            <button className="bg-zinc-700 p-2 rounded-xl text-3xl" onClick={attemptScan}>
                Take Pic
            </button>
            {scanStatus.attempts >= MAX_ATTEMPTS / 2 && scanStatus.attempts < MAX_ATTEMPTS && (
                <div className="text-lg py-2">
                    Having a hard time scanning your barcode?
                    <ul className="list-disc px-6 py-2 text-md font-normal">
                        <li>If you&apos;re on a desktop, you may wish to try using a mobile phone instead.</li>
                        <li>Make sure you&apos;re in a well-lit room.</li>
                    </ul>
                    After {MAX_ATTEMPTS - scanStatus.attempts} more attempts, we&apos;ll have you manually enter your
                    information.
                </div>
            )}
        </div>
    );
}

export default Camera;
