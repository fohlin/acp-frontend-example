const BASE_URL = 'https://myafterpay-api-ac.afterpay.dev';
const ENDPOINT_VERSION = `${BASE_URL}/v1/version`;


export const requestVersion = async () => {
  try {
    const result = await fetch(ENDPOINT_VERSION);
    return await result.json();
  } catch {
    return false;
  }
}
