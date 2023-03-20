
let copy_text = document.querySelector('textarea').textContent;

let copy_btn = document.querySelector('#copy-btn');

let output = document.querySelector('#output');

copy_btn.addEventListener(`click`, () => {

	navigator.clipboard.writeText(copy_text).then(() => {
		output.textContent = 'Copied it to the clipboard.';
	}, () => {
		output.textContent = 'Could not copy.';
	});

});
