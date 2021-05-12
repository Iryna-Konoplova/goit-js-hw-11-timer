// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

const CountdownTimer = {
  start() {
    const finishTime = new Date('Jul 17, 2021').getTime();
    console.log(finishTime);
    // const startTime = Date.now('time');
    // console.log(startTime);

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = finishTime - currentTime;
      const { days, hours, mins, secs } = getTimeComponents(deltaTime);
      // console.log(`${days}:${hours}:${mins}:${secs}`);
      // console.log(TimeComponents);
      // console.log(finishTime - currentTime);
    }, 1000);
},

}

CountdownTimer.start();

function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}