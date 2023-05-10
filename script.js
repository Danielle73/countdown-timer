let secondsUntil;

function getStartingDate() {
  const dateInput = document.getElementById('dateInput');
  const startDate = new Date(dateInput.value);
  startCountdown(startDate);
}

function startCountdown(startDate) {
  let countDownDate = startDate.getTime();

  secondsUntil = setInterval(function() {
    const timeNow = new Date().getTime();
    const timeLeft = countDownDate - timeNow;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = 'You have ' + days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds ' + ' remaining.';

    if (timeLeft < 0) {
      clearInterval(secondsUntil);
      document.getElementById('timer').innerHTML = "This countdown has expired";
    }
  }, 1000);
}

function resetCountdown() {
  clearInterval(secondsUntil);
  document.getElementById('timer').innerHTML = "";
}
