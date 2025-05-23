_call_function(waitForIDLE, {
	"serial": (<%= serial %>),
	"xpath": (<%= xpath %>),
	"delay": (<%= delay %>),
	"maxDuration": (<%= maxDuration %>)
})!
<%= variable %> = _result_function()