class AlarmClock {
    constructor () {
    this.alarmCollection = [];
    this.intervalId = null;
    };
    
    addClock(startTime, action){
if (!startTime || !action) {
throw new Error('Отсутствуют обязательные аргументы')
    }
  if (this.alarmCollection.some(item => item.time === startTime)) {
    console.warn('Уже присутствует звонок на это же время');
  }
  this.alarmCollection.push({
    callback: action,
    time: startTime,
    canCall: true
  })
}
removeClock(delTime) {
this.alarmCollection = this.alarmCollection.filter(item => item.time != delTime)
}
getCurrentFormattedTime(){
  return new Date().toLocaleTimeString("ru-Ru", {
    hour: "2-digit",
    minute: "2-digit",
  });
}
start(){
if (this.intervalId) {
  return
}
this.intervalId = setInterval(() => {
  this.alarmCollection.forEach((element) => {
    if (element.time === this.getCurrentFormattedTime() && element.canCall) {
      element.canCall = false;
      element.callback()
    }
  })
}, 1000);
}

stop(){
clearInterval(this.intervalId)
  this.intervalId = null;
}
resetAllCalls(){
  this.alarmCollection.forEach((element) => {
    element.canCall = true;
  })
}
clearAlarms(){
  this.stop();
  this.alarmCollection = [];
}
}