export function useDesktopOS() {
  const isWindows = Boolean(navigator.userAgent.match(/Windows/i));
  const isMacOS = Boolean(navigator.userAgent.match(/Macintosh/i));
  const isLinux = Boolean(navigator.userAgent.match(/Linux/i));

  if (isWindows) return "Windows";
  if (isMacOS) return "macOS";
  if (isLinux) return "Linux";
  return "Not detected";
}
