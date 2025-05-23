_call_function(clickByXpath, {
	"serial": (<%= serial %>),
	"xpath": (<%= xpath %>),
	"waitForElement": (<%= waitForElement %>),
	"delay": (<%= delay %>),
	"maxDuration": (<%= maxDuration %>),
	"elementIndex": (<%= elementIndex %>)
})!
<%= variable %> = _result_function()