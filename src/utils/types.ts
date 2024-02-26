import { WebcamProps } from 'react-webcam';

interface Status {
  attempts: number;
  success: boolean;
  failure: boolean;
}

interface ScanResults {
  fullName?: string;
  address?: string;
  issuanceDate?: string;
  expirationDate?: string;
  scanFailed: boolean;
}

interface CameraProps {
  status: Status;
  setStatus: (status: Status) => void;
}

export type { Status, ScanResults, CameraProps };
