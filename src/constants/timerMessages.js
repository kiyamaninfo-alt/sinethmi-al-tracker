export const TIMER_MESSAGES = {
  si: {
    focusStatus: 'දැන් පාඩම් කරන වෙලාව',
    breakStatus: 'පොඩි විවේකයක් ගන්න',
    pausedStatus: 'වෙලාව නවතා ඇත',
    timeRemainingWarning: 'අවධානය දෙන්න: තත්පර 10ක් ඉතිරිව ඇත!',
    sessionCompleted: 'නියමිත පාඩම් කාලය අවසන් විය!',
    stopAlarmBtn: 'Stop Alarm (නවත්වන්න)',
    readyForRound: (round) => `ඔබට ${round} වන වටය ආරම්භ කිරීමට අවශ්‍යද?`,
    startRoundBtn: (round) => `${round} වටය අරඹන්න (OK)`,
    cancelBtn: 'පසුවට (Cancel)'
  },
  en: {
    focusStatus: 'Focus Time Now',
    breakStatus: 'Take a Short Break',
    pausedStatus: 'Session Paused',
    timeRemainingWarning: 'Attention: 10 seconds remaining!',
    sessionCompleted: 'Study session duration completed!',
    stopAlarmBtn: 'Stop Alarm',
    readyForRound: (round) => `Do you want to start round ${round}?`,
    startRoundBtn: (round) => `Start Round ${round} (OK)`,
    cancelBtn: 'Cancel'
  }
};

export function getTimerMessages(lang = 'si') {
  return TIMER_MESSAGES[lang] || TIMER_MESSAGES.si;
}
