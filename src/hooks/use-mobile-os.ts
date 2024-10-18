export function useMobileOS() {
  const isAndroid = Boolean(navigator.userAgent.match(/Android/i));
  const isIOS = Boolean(navigator.userAgent.match(/iPhone|iPad|iPod/i));

  if (isAndroid) return "android";
  if (isIOS) return "iOS";
  return "not-detected";
}
