_call_function(waitForXpath, {
	"serial": (<%= serial %>),
	"xpath": (<%= xpath %>),
	"delay": (<%= delay %>),
	"maxDuration": (<%= maxDuration %>)
})!
<%= variable %> = _result_function()