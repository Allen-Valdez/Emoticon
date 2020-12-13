/* The function below takes in a string and displays an emoticon 
depending of the input*/
const toEmoticon = (emoticon) => {
  switch(emoticon){
    case 'shrug':
      return '|_{"}_|';
    case 'smiley face':
      return ':)';
    case 'frowny face':
      return ':(';
    case 'winky face':
      return ';)';
    case 'heart':
      return '<3'
    default:
      return '|_(* ~ *)_|'
  }
};

console.log(toEmoticon("whatever")) // Should print  '|_(* ~ *)_|'
