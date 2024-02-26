import { useState } from 'react';
import { ScanResults } from '../utils/types';

export default function LicenseResults(props: ScanResults) {
  return (
    <>
      {props.scanFailed ? (
        <>
          <h2 className="text-xl text-center font-bold">Enter Your Driver's License Info</h2>
          <form className="flex flex-col justify-center items-center gap-2 mx-auto w-5/6 md:w-4/6" action="/">
            <div className="flex gap-4 items-center">
              <label htmlFor="full-name">Full Name:</label>
              <input
                type="text"
                id="full-name"
                name="fullName"
                className="rounded border-solid border-2 border-black p-1"
              ></input>
            </div>
            <div className="flex gap-4 items-center">
              <label htmlFor="license-number">License #:</label>
              <input
                type="text"
                id="license-number"
                name="licenseNuymber"
                className="rounded border-slid border-2 border-black p-1"
              ></input>
            </div>
            <div className="flex gap-4">
              <label htmlFor="issuance-date">Issuance Date:</label>
              <input type="text" id="issuanceDate" name="issuance-date"></input>
            </div>
            <label htmlFor="expiry-date">Expiry Date:</label>
            <input type="text" id="expiry-date" name="expiryDate"></input>
            <input type="submit" value="Submit"></input>
          </form>
        </>
      ) : (
        <>
          <h2>Here's Your Driver's License Info</h2>
          <p>DL INFO GOES HERE</p>
        </>
      )}
    </>
  );
}
