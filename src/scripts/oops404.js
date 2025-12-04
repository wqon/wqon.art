const oops404 = () => {
  let countdown = 9;
  const interval = setInterval(function () {
    document.getElementById("oops404").innerHTML = --countdown;
    if (countdown <= 0) {
      clearInterval(interval);
      window.location.href = "/";
    }
  }, 1000);
};
oops404();
