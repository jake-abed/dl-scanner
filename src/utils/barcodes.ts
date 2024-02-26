import { BrowserPDF417Reader } from '@zxing/browser';

/* Test DL # - Don't Dox Me Please
const testResult =
  '@\n\u001e\rANSI 636014090102DL00410287ZC03280024DLDAQE3002456\nDCSABED\nDDEN\nDACTHOMAS\nDDFN\nDADJAKE\nDDGN\nDCAC\nDCBNONE\nDCDNONE\nDBD04252022\nDBB10201990\nDBA10202026\nDBC1\nDAU073 IN\nDAYHAZ\nDAG5310 SAN FRANCISCO BLVD\nDAISACRAMENTO\nDAJCA\nDAK958200000 \nDCF04/25/202250148/CCFD/26\nDCGUSA\nDAW195\nDAZBRO\nDCK22115E30024560401\nDDAF\nDDB08292017\nDDK1\rZCZCAHZL\nZCBBRN\nZCC\nZCD\r';
*/

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

function parseResult(result: string) {
    const lines = result.split('\n');
    const parsed = lines.map((line) => parseLine(line)).filter((line) => line !== '') as [string, string][];
    return Object.fromEntries(parsed);
}

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

export { decodeBarcode };
