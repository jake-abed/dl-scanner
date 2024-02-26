interface ScanStatus {
  attempts: number;
  success: boolean;
  failure: boolean;
  scanResults?: ScanResults;
}

interface ScanResults {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  licenseNumber?: string;
  address?: string;
  issuanceDate?: string;
  expiryDate?: string;
  scanFailed?: boolean;
}

interface CameraProps {
  scanStatus: ScanStatus;
  setScanStatus: (scanStatus: ScanStatus) => void;
}

export type { ScanStatus, ScanResults, CameraProps };
