import { useState } from 'react';
import { LicenseResults } from '../utils/types';

export default function License_Results(props: LicenseResults) {
  return (
    <>
      {props.scanFailed ? (
        <>
          <h2>Enter Your Driver's License Info</h2>
          <form action="/">
            <label htmlFor="full-name">Full Name:</label>
            <input type="text" id="full-name" name="fullName"></input>
            <label htmlFor="license-number">Driver's License #:</label>
            <input type="text" id="license-number" name="licenseNuymber"></input>
            <label htmlFor="issuance-date">Issuance Date:</label>
            <input type="text" id="issuanceDate" name="issuance-date"></input>
            <label htmlFor="expiry-date">Expiry Date:</label>
            <input type="text" id="expiry-date" name="expiryDate"></input>
            <input type="submit" value="Submit"></input>
          </form>
        </>
      ) : (
        <h2>Scan Failed</h2>
      )}
    </>
  );
}
