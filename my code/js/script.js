var count = document.getElementById("count");
count.innerHTML = 0;
let sum = 0;

var button1 = document.getElementById("lower");
var button2 = document.getElementById("add");

button1.addEventListener('click', function () {
  sum -= 1;
  color();
  count.innerHTML = sum;
});

button2.addEventListener('click', function () {
    sum += 1;
    color();
    count.innerHTML = sum;
});
var color = function () {
    if (sum < 0) {
        count.style.color = 'red';
    }else if (sum > 0) {
        count.style.color = 'green';
    }else {
        count.style.color = 'black';
}

}