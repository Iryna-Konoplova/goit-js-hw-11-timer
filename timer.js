// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });



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
      const deltaTime = this.targetDate - currentTime;
      const time = getTimeComponents(deltaTime);
      // this.onTick(time);
      updateClockface(time);
    }, 1000);
  } 
  
 

    pad(value) {
      return String(value).padStart(2, '0');
    }

    updateClockface(time) {
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





// class CountdownTimer {
//   constructor({ onTick }) {
//     this.onTick = onTick;
//    }
//   start() {
//     const finishTime = new Date('Jul 17, 2021').getTime();
    
//     setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = finishTime - currentTime;
//       const time = getTimeComponents(deltaTime);
//       this.onTick(time);
//       // updateClockface(time);
//     }, 1000);
//   }
  
// }


// const countdownTimer = new CountdownTimer({
//   onTick: updateClockface,
// });
  
// console.log(countdownTimer)











// const CountdownTimer = {
//   start() {
//     const finishTime = new Date('Jul 17, 2021').getTime();
//     console.log(finishTime);
//     // const startTime = Date.now('time');
//     // console.log(startTime);

//     setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = finishTime - currentTime;
//       const time = getTimeComponents(deltaTime);
//       updateClockface(time);
//       // console.log(`${days}:${hours}:${mins}:${secs}`);
//       // console.log(TimeComponents);
//       // console.log(finishTime - currentTime);
//     }, 1000);
// },

// }

// CountdownTimer.start();

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// function getTimeComponents(time) {
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   return { days, hours, mins, secs };
// }


// const fieldDays = document.querySelector('#timer-1 [data-value="days"]');
// const fieldHours = document.querySelector('#timer-1 [data-value="hours"]');
// const fieldMins = document.querySelector('#timer-1 [data-value="mins"]');
// const fieldSecs = document.querySelector('#timer-1 [data-value="secs"]');

// function updateClockface({ days, hours, mins, secs }) {
//   fieldDays.textContent = `${days}`;
//   fieldHours.textContent = `${hours}`;
//   fieldMins.textContent = `${mins}`;
//   fieldSecs.textContent = `${secs}`;
// }


