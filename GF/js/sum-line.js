var sumLevel  = document.querySelector('.calculation__sum-level');
var sumLine = sumLevel.querySelector('.sum-level__line');
var sumPin = sumLevel.querySelector('.sum-level__pin');
var calculationValue = document.querySelector('.calculation__value');
var tariffValue = document.querySelector('.best-tariff__item-value');
var lineRightBarrier = 26;
var minCalculationValue = 100;
var maxCalculationValue = 50000;
var leftBorder = 0;
var rightBorder = 615;
var minSum = 100;
var maxSum = 50000;


/**
*опряделяет 0 процентное соотношение относително промежутка между минимальным значением и максимальным;
*@param {number} min минимально значене
*@param {number} max максимальное значение
*@param {number} percent   процент
*@return {number} ratio соотношение.
*/
var determinesRatio = function (min, max, percent) {
  if (min < max && percent >= 0) {
    var ratio = (max - min) * (percent / 100) + min;
    return ratio;
  } else {
    ratio = 0;
    return ratio;
  }
};

/**
*Перемещаем ползунок. При перемещении изменяется уровень эффекта
*@param {HTMLObject} evt элемент на котором сработало событие.
*/
function omMousedownPin(evt) {
  evt.preventDefault();
  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };
  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();
    var shift = {
      x: startCoords.x - moveEvt.clientX,
    };
    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    sumPin.style.left = (sumPin.offsetLeft - shift.x ) + 'px';
    sumLine.style.width = sumPin.style.left ;
    if (sumPin.offsetLeft - shift.x + lineRightBarrier > sumLevel.offsetWidth) {
      sumPin.style.left = (sumLevel.offsetWidth - lineRightBarrier) + 'px';
      sumLine.style.width = (sumLevel.offsetWidth - lineRightBarrier) + 'px';
    }
    if (sumPin.offsetLeft - shift.x < 0) {
      sumPin.style.left = 0 + 'px';
      sumLine.style.width = 0 + 'px';
    }

    var leftSumPin = sumPin.style.left.substring(0, sumPin.style.left.length - 2);
    console.log(leftSumPin);
    var fillingPercentage = (100 * leftSumPin) / rightBorder;
    console.log(fillingPercentage);
    var amountOfInvestment = Math.round(determinesRatio(minSum, maxSum, fillingPercentage));
    console.log(determinesRatio(minSum, maxSum, fillingPercentage));
    calculationValue.textContent = (amountOfInvestment + ' ' + '$');
    tariffValue.textContent = '≈' + ' ' + Math.round((amountOfInvestment/100) * 8.5) + ' ' + '$';
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}

sumPin.addEventListener('mousedown', omMousedownPin);
