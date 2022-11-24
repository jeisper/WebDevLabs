const { fromEvent, interval, merge, EMPTY } = rxjs;
const { take } = rxjs.operators;

const hour = document.querySelector("#hour");
const min = document.querySelector("#min");
const result = document.querySelector("#result");
const start = document.querySelector("#start");

const getStartValue = () => {
  let hrs = hour.value * 60 * 60;
  let mns = min.value * 60;
  return hrs + mns;
};

const getTimeFromSeconds = (totalSeconds) => {
  const hour = Math.floor(totalSeconds / (60 * 60));
  const min = Math.floor(totalSeconds / 60) % 60;
  const second = Math.floor(totalSeconds % 60);

  return { hour, min, second };
};

const startObservable = fromEvent(start, "click");

const startTime = getTimeFromSeconds(getStartValue());
result.innerHTML =
  startTime.hour +
  "hours " +
  (startTime.min == 60 ? 0 : startTime.min) +
  " mins ";

let timerSubscription = null;

const subscription = startObservable.subscribe(() => {
  if (timerSubscription) timerSubscription.unsubscribe();

  const startValue = getStartValue();
  const timer = interval(1000).pipe(take(getStartValue()));

  timerSubscription = timer.subscribe((x) => {
    const time = getTimeFromSeconds(startValue - x);

    result.innerHTML =
      time.hour +
      "hours " +
      (time.min == 60 ? 0 : time.min) +
      " mins " +
      time.second +
      "s";
  });
});
