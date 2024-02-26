import { BrowserPDF417Reader } from '@zxing/browser';
const { parse } = require('driver-license-parser');

async function decodeBarcode(img: HTMLImageElement) {
  const hints = new Map();
  hints.set('TRY_HARDER', 'true');
  const reader = new BrowserPDF417Reader(hints);
  let result: string | null = null;
  try {
    const res = await reader.decodeFromImageElement(img);
    return { result: parse(res.getText()) };
  } catch (e: unknown) {
    if (e instanceof Error) {
      return { error: e.name };
    }
    return { error: 'unknown error' };
  }
}

export { decodeBarcode };
