//3D scroll

let zSpacing = -1000,
  //Расстояние по оси Z
  lastPos = zSpacing / 5,
  //стартовая позиция, зависит от расстояния в zSpacing
  $frames = document.getElementsByClassName("frame"),
  //объявляем все фреймы
  frames = Array.from($frames),
  //все фреймы образовываем в массив
  zVals = [];
//массив, который будет заполнен значениями по оси Z

window.onscroll = function () {
  let top = document.documentElement.scrollTop,
    //расстояние сверху до текущей позиции
    delta = lastPos - top;
  lastPos = top;

  frames.forEach(function (n, i) {
    zVals.push(i * zSpacing + zSpacing);
    zVals[i] += delta * -5;
    let frame = frames[i],
      transform = `translateZ(${zVals[i]}px)`,
      opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
    // цифра на которую делим zSpacing настраивает как скоро кадр пропайдет
    frame.setAttribute("style", `transform: ${transform}; opacity: ${opacity}`);
  });
};

window.scrollTo(0, 1);

//Audio

let soundButton = document.querySelector(".soundbutton"),
  audio = document.querySelector(".audio");

soundButton.addEventListener("click", e => {
  soundButton.classList.toggle("paused");
  audio.paused ? audio.play() : audio.pause();
});

window.onfocus = function () {
  soundButton.classList.contains("paused") ? audio.pause() : audio.play();
};

window.onblur = function () {
  audio.pause();
};
