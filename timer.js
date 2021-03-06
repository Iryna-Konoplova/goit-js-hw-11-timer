class CountdownTimer {
  constructor({ selector, targetDate } = {}) {
    this.targetDate = new Date(targetDate).getTime();
    this.fieldDays = document.querySelector(`${selector} [data-value="days"]`);
    this.fieldHours = document.querySelector(`${selector} [data-value="hours"]`);
    this.fieldMins = document.querySelector(`${selector} [data-value="mins"]`);
    this.fieldSecs = document.querySelector(`${selector} [data-value="secs"]`);
    this.start();
  }
    
  start() {
    setInterval(() => {
      const currentTime = Date.now();
      this.updateClockface(currentTime);
    }, 1000);
  } 
  
  pad(value) {
      return String(value).padStart(2, '0');
  }

  updateClockface(currentTime) {
      const time = this.targetDate - currentTime;
      this.fieldDays.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      this.fieldHours.textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      this.fieldMins.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      this.fieldSecs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  }
}

const myCountdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});