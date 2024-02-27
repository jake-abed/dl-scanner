import { BrowserPDF417Reader } from '@zxing/browser';

/*
This is a fantastic candidate for a new OSS library on NPM or JSR. There's a library out there that claims to do this, but it's just an expirement and did not seem super great to be honest.
*/

// Parse each line into a key-value pair.
function parseLine(line: string) {
    if (line.includes('ANSI')) {
        return ['licenseNumber', line.split('DAQ')[1]];
    }
    if (line.startsWith('DCS')) {
        return ['lastName', line.slice(3)];
    }
    if (line.startsWith('DAC')) {
        return ['firstName', line.slice(3)];
    }
    if (line.startsWith('DAD')) {
        return ['middleName', line.slice(3)];
    }
    if (line.startsWith('DBD')) {
        return ['issuanceDate', line.slice(3)];
    }
    if (line.startsWith('DBA')) {
        return ['expiryDate', line.slice(3)];
    }
    if (line.startsWith('DAG')) {
        return ['address', line.slice(3)];
    } else return '';
}

// Split the result into lines and parse each line.
function parseResult(result: string) {
    const lines = result.split('\n');
    const parsed = lines.map((line) => parseLine(line)).filter((line) => line !== '') as [string, string][];
    return Object.fromEntries(parsed);
}

// Decode the barcode wrapped in a try-catch block. Pass the either the result or error name over.
async function decodeBarcode(img: HTMLImageElement) {
    const hints = new Map();
    hints.set('TRY_HARDER', 'true');
    const reader = new BrowserPDF417Reader(hints);
    try {
        const res = await reader.decodeFromImageElement(img);
        return { result: parseResult(res.getText()) };
    } catch (e: unknown) {
        if (e instanceof Error) {
            return { error: e.name };
        }
        return { result: 'unknown error' };
    }
}

export { decodeBarcode, parseResult, parseLine };
