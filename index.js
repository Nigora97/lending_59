function correctDate(date) {
  return date < 10 ? "0" + date : date;
}

function saleDate() {
  const day = document.getElementsByClassName("time")[0];
  const hour = document.getElementsByClassName("time")[1];
  const minuts = document.getElementsByClassName("time")[2];
  const seconds = document.getElementsByClassName("time")[3];
  const finishDate = new Date(2024, 11, 31);
  const currentDate = new Date();
  const date = finishDate - currentDate;
  console.log(Math.trunc);
  day.innerHTML = correctDate(Math.trunc(date / (1000 * 60 * 60 * 24)));
  hour.innerHTML = correctDate(
    Math.trunc((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  minuts.innerHTML = correctDate(
    Math.trunc((date % (1000 * 60 * 60)) / (1000 * 60))
  );
  seconds.innerHTML = correctDate(Math.trunc((date % (1000 * 60)) / 1000));
}
saleDate();
setInterval(function () {
  saleDate();
}, 1000);

happyDate();
function happycorrectDate(date) {
  return date < 10 ? "0" + date : date;
}

function happyDate() {
  const day = document.getElementsByClassName("happytime")[0];
  const hour = document.getElementsByClassName("happytime")[1];
  const minuts = document.getElementsByClassName("happytime")[2];
  const seconds = document.getElementsByClassName("happytime")[3];
  const finishDate = new Date(2024, 11, 31);
  const currentDate = new Date();
  const date = finishDate - currentDate;
  console.log(Math.trunc);
  day.innerHTML = happycorrectDate(Math.trunc(date / (1000 * 60 * 60 * 24)));
  hour.innerHTML = happycorrectDate(
    Math.trunc((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  minuts.innerHTML = happycorrectDate(
    Math.trunc((date % (1000 * 60 * 60)) / (1000 * 60))
  );
  seconds.innerHTML = happycorrectDate(Math.trunc((date % (1000 * 60)) / 1000));
}
happyDate();
setInterval(function () {
  happyDate();
}, 1000);
