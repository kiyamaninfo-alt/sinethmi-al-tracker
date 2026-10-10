export function getTargetExamDate(targetYear, customExamDate) {
  if (customExamDate) {
    const custom = new Date(customExamDate);
    if (!isNaN(custom.getTime())) return custom;
  }
  const now = new Date();
  const currentYear = now.getFullYear();
  let targetY = parseInt(targetYear, 10);
  if (!targetY || isNaN(targetY) || targetY < currentYear) {
    const thisYearAug = new Date(currentYear, 7, 1);
    targetY = now > thisYearAug ? currentYear + 1 : currentYear;
  }
  return new Date(targetY, 7, 1);
}

export function calculateDetailedCountdown(targetDate) {
  const diff = Math.max(0, targetDate.getTime() - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return {
    days: String(days),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0')
  };
}
