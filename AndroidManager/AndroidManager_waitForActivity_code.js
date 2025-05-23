_call_function(waitForActivity, {
	"serial": (<%= serial %>),
	"activity": (<%= activity %>),
	"delay": (<%= delay %>),
	"maxDuration": (<%= maxDuration %>),
})!
<%= variable %> = _result_function()