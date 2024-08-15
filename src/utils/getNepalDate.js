export default function getNepalDate() {
  const now = new Date();
  // Convert to Nepal's time zone
  const nepalTimeOffset = 5.75 * 60; // Nepal is UTC+5:45
  const localOffset = now.getTimezoneOffset();
  const nepalDate = new Date(
    now.getTime() + (nepalTimeOffset + localOffset) * 60000
  );

  return nepalDate;
}
