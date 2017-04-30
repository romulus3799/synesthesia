
$(document).ready(() => {
	//set title to synesthesia
	$('#titleText').html(fillText('Synesthesia'))

	// let colors = {}
	// $.getJSON('colors.json', (data) => {
	// 	colors = JSON.parse(data)
	// })
	console.log(colors);
	$('#reader').on('keyup', () => {
		console.log('Change!')

		let inText = $('#reader').val()
		let outText = fillText(inText)

		//set writer html to output
		$('#writer').html(outText)
	})
})

function fillText(text) {
	let output = ''
	for(let i = 0; i < text.length; i++) {
		let a = text.charAt(i)
		let ascii = text.toUpperCase().charCodeAt(i)
		console.log(ascii);

		//if color value exists for char, store. If not, black
		let color = colors[ascii] ? colors[ascii] : '#000000'

		console.log(color + ',' + typeof color);
		//turn char into char surrounded by span with color
		output += '<span style="color:' + color + '">' + a + '</span>'
	}
	return output
}
