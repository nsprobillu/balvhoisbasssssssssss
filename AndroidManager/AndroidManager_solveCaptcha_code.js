_call_function(solveCaptcha, {
	"serial": (<%= serial %>),
	"service": (<%= service %>),
	"apiKey": (<%= apiKey %>),
	"attempts": (<%= attempts %>),
	"waitDuration": (<%= waitDuration %>),
	"solvingDuration": (<%= solvingDuration %>),
	"screenDelay": (<%= screenDelay %>),
	"mainSelector": (<%= mainSelector %>),
	"textSelector": (<%= textSelector %>),
	"imageSelector": (<%= imageSelector %>),
	"buttonSelector": (<%= buttonSelector %>)
})!
<%= variable %> = _result_function()