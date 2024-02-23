interface Status {
  attempts: number;
  success: boolean;
  failure: boolean;
}

interface LicenseResults {
  fullName?: string;
  address?: string;
  issuanceDate?: string;
  expirationDate?: string;
  scanFailed: boolean;
}

export type { Status, LicenseResults };
