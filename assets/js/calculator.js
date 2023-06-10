function calculate() {
	const d1 = input.get('one_day').number().val();
	const h1 = input.get('one_hour').number().val();
	const m1 = input.get('one_minute').number().val();
	const s1 = input.get('one_second').number().val();
	const action = input.get('add_subtract').raw();
	const d2 = input.get('two_day').number().val();
	const h2 = input.get('two_hour').number().val();
	const m2 = input.get('two_minute').number().val();
	const s2 = input.get('two_second').number().val();
	if(!input.valid()) return;
	let totalSeconds = 0;
	const seconds1 = (d1 * (3600 * 24)) + (h1 * 3600) + (m1 * 60) + s1;
	const seconds2 = (d2 * (3600 * 24)) + (h2 * 3600) + (m2 * 60) + s2;
	if(action === 'add'){
		totalSeconds = seconds1 + seconds2;
	}
	else {
		totalSeconds = seconds1 - seconds2;
	}
	_('result').innerHTML = toDaysMinutesSeconds(totalSeconds);
	_('result-in-days').innerHTML = 'or ' + plural(+(totalSeconds / (3600 * 24)).toFixed(8), 'd');
	_('result-in-hours').innerHTML = 'or '  + plural(+(totalSeconds / 3600).toFixed(5), 'h');
	_('result-in-minutes').innerHTML = 'or ' + plural(+(totalSeconds / 60).toFixed(5), 'm');
	_('result-in-seconds').innerHTML = 'or ' + plural(totalSeconds, 's');
}

function toDaysMinutesSeconds(totalSeconds){
	let result = '';
	const seconds = Math.floor(totalSeconds % 60);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
	const days = Math.floor(totalSeconds / (3600 * 24));
	result += plural(days, 'd') + ' ';
	result += plural(hours, 'h') + ' ';
	result += plural(minutes, 'm') + ' ';
	result += plural(seconds, 's');
	return result;
}

function plural(number, label) {
	if (label === 'd') return number === 1 ? number + ' day' : number + ' days';

	if (label === 'h') return number === 1 ? number + ' hour' : number + ' hours';

	if (label === 'm') return number === 1 ? number + ' minute' : number + ' minutes';

	if (label === 's') return number === 1 ? number + ' second' : number + ' seconds';

}
