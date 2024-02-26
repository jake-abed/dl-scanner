import { ScanResults } from '../utils/types';

export default function LicenseResults(props: ScanResults) {
  return (
    <>
      {props.scanFailed ? (
        <h2 className="text-xl text-center font-bold">Enter Your Driver's License Info</h2>
      ) : (
        <h2 className="text-xl text-center font-bold">Driver's License Info</h2>
      )}
      <form className="flex flex-col justify-center gap-2 mx-auto w-5/6 md:w-3/6 lg:w-2/6" action="/">
        <div className="flex gap-4 items-center justify-between">
          <label htmlFor="full-name">Full Name:</label>
          <input
            type="text"
            id="full-name"
            name="fullName"
            className="rounded border-solid border-2 border-black p-1"
          ></input>
        </div>
        <div className="flex gap-4 items-center justify-between">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            className="rounded border-solid border-2 border-black p-1"
          ></input>
        </div>
        <div className="flex gap-4 items-center justify-between">
          <label htmlFor="license-number">License #:</label>
          <input
            type="text"
            id="license-number"
            name="licenseNumber"
            className="rounded border-slid border-2 border-black p-1"
          ></input>
        </div>
        <div className="flex gap-4 items-center justify-between">
          <label htmlFor="issuance-date">Issuance Date:</label>
          <input
            type="text"
            id="issuanceDate"
            name="issuance-date"
            className="rounded border-solid border-2 border-black p-1"
          ></input>
        </div>
        <div className="flex gap-4 items-center justify-between">
          <label htmlFor="expiry-date">Expiry Date:</label>
          <input
            type="text"
            id="expiry-date"
            name="expiryDate"
            className="rounded border-solid border-2 border-black p-1"
          ></input>
        </div>
        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
}
