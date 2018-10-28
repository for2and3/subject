var numbers = [];

function generateNumbers() {
  for (var i = 0; i < 15; i ++) {
    numbers.push(Math.floor(Math.random() * 100));
  }
}

function showNumbers(element) {
  var ul = document.getElementById(element);
  for (var i = 0; i < 15; i ++) {
    ul.innerHTML += "<li>" + numbers[i] + "</li>";
  }
}

function popSort() {
  // 请与此函数内实现对numbers数组的升序冒泡排序
	exnum = 0;
	for(i = 0; i < numbers.length; i++){
		for(j = i; j < numbers.length; j++){
			if(numbers[i] > numbers[j]){
				exnum = numbers[i];
				numbers[i] = numbers[j];
				numbers[j] = exnum;
			}
		}
	}
}

generateNumbers(); 
showNumbers('randomArray');
popSort();
showNumbers('sortedArray');