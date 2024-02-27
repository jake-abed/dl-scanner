import { parseResult, parseLine } from '../src/utils/barcodes';
import { expect, it } from 'vitest';

// Test DL # - Don't Dox Me Please
const testResult =
    '@\n\u001e\rANSI 636014090102DL00410287ZC03280024DLDAQE3002456\nDCSABED\nDDEN\nDACTHOMAS\nDDFN\nDADJAKE\nDDGN\nDCAC\nDCBNONE\nDCDNONE\nDBD04252022\nDBB10201990\nDBA10202026\nDBC1\nDAU073 IN\nDAYHAZ\nDAG5310 SAN FRANCISCO BLVD\nDAISACRAMENTO\nDAJCA\nDAK958200000 \nDCF04/25/202250148/CCFD/26\nDCGUSA\nDAW195\nDAZBRO\nDCK22115E30024560401\nDDAF\nDDB08292017\nDDK1\rZCZCAHZL\nZCBBRN\nZCC\nZCD\r';

it('parses a line of data', () => {
    const line = 'DCSABED';
    expect(parseLine(line)).toEqual(['lastName', 'ABED']);
});

it('returns an empty string if the line is not recognized', () => {
    const line = 'DCXABED';
    expect(parseLine(line)).toEqual('');
});

it('parses the result into an object', () => {
    expect(parseResult(testResult)).toEqual({
        licenseNumber: 'E3002456',
        lastName: 'ABED',
        firstName: 'THOMAS',
        middleName: 'JAKE',
        issuanceDate: '04252022',
        expiryDate: '10202026',
        address: '5310 SAN FRANCISCO BLVD',
    });
});
