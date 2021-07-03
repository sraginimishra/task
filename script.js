// for task manager
	let addToDoButton = document.getElementById('addTodo');
	let toDoContainer = document.getElementById('toDoContainer');
	let inputField = document.getElementById('inputField');

	addToDoButton.addEventListener('click', function(){
		var paragraph = document.createElement('p');
		paragraph.classList.add('paragraph-styling');
		paragraph.innerText = inputField.value;
		toDoContainer.appendChild(paragraph);
		inputField.value = "";

		// paragraph.addEventListener('click',function(){
		// 	toDoContainer.start(paragraph);
		// })
		paragraph.addEventListener('click',function(){
			paragraph.style.textDecoration = "line-through";
			 

		})
		paragraph.addEventListener('dblclick', function(){
			toDoContainer.removeChild(paragraph);
		})
	})		



	//for stop watch
	 	var ms = 0, s = 0, m = 0;
		var timer;

		var stopwatchEl = document.querySelector('.stopwatch');
		var lapsContainer = document.querySelector('.laps');

		function start() {
			if(!timer) {
				timer = setInterval(run, 10);
			}
		}

		function run() {
			stopwatchEl.textContent = getTimer();
			ms++;
			if(ms == 100) {
				ms = 0;
				s++;
			}
			if(s == 60) {
				s = 0;
				m++;
			}
		}

		function pause() {
			stopTimer();
		}

		// function stop() {
		// 	stopTimer();
		// 	ms = 0;
		// 	s = 0;
		// 	m = 0;
		// 	stopwatchEl.textContent = getTimer();
		// }

		function stopTimer() {
			clearInterval(timer);
			timer = false;
		}

		function getTimer() {
			return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
		}

		// function restart() {
		// 	stop();
		// 	start();
		// }

		function lap() {
			if(timer) {
				var li = document.createElement('li');
				li.innerText = getTimer();
				lapsContainer.appendChild(li);
			}
		}

		// function resetLaps() {
		// 	lapsContainer.innerHTML = '';
		// } 

	