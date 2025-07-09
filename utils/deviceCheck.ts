export async function isMobileChrome(page: any): Promise<boolean> {
  const ua = await page.evaluate(() => navigator.userAgent);
  return /Mobile/.test(ua) && /Chrome/.test(ua);
}