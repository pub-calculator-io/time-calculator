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
	const days = (totalSeconds / (3600 * 24)).toFixed(2);
	const hours = (totalSeconds / 3600).toFixed(2);
	const minutes = (totalSeconds / 60).toFixed(2);
	_('result').innerHTML = toDaysMinutesSeconds(totalSeconds);
	_('result-in-days').innerHTML = 'or ' + plural(days, 'days:day:days:days:days:days');
	_('result-in-hours').innerHTML = 'or '  + plural(hours, 'hours:hour:hours:hours:hours:hours');
	_('result-in-minutes').innerHTML = 'or ' + plural(minutes, 'minutes:minute:minutes:minutes:minutes:minutes');
	_('result-in-seconds').innerHTML = 'or ' + plural(totalSeconds, 'seconds:second:seconds:seconds:seconds:seconds');
}

function toDaysMinutesSeconds(totalSeconds){
	let result = '';
	const seconds = Math.floor(totalSeconds % 60);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
	const days = Math.floor(totalSeconds / (3600 * 24));
	result += plural(days, 'days:day:days:days:days:days') + ' ';
	result += plural(hours, 'hours:hour:hours:hours:hours:hours') + ' ';
	result += plural(minutes, 'minutes:minute:minutes:minutes:minutes:minutes') + ' ';
	result += plural(seconds, 'seconds:second:seconds:seconds:seconds:seconds');
	return result;
}
