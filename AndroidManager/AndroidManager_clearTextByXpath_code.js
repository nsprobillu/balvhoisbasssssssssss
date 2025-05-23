_call_function(clearTextByXpath, {
	"serial": (<%= serial %>),
	"xpath": (<%= xpath %>),
	"waitForElement": (<%= waitForElement %>),
	"delay": (<%= delay %>),
	"maxDuration": (<%= maxDuration %>),
	"elementIndex": (<%= elementIndex %>)
})!
<%= variable %> = _result_function()