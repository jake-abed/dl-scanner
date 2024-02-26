import { WebcamProps } from 'react-webcam';

interface ScanStatus {
  attempts: number;
  success: boolean;
  failure: boolean;
  scanResults?: ScanResults | string;
}

interface ScanResults {
  fullName?: string;
  address?: string;
  issuanceDate?: string;
  expirationDate?: string;
  scanFailed: boolean;
}

interface CameraProps {
  scanStatus: ScanStatus;
  setScanStatus: (scanStatus: ScanStatus) => void;
}

export type { ScanStatus, ScanResults, CameraProps };
