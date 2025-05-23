_call_function(longClickByXpath, {
	"serial": (<%= serial %>),
	"xpath": (<%= xpath %>),
	"waitForElement": (<%= waitForElement %>),
	"delay": (<%= delay %>),
	"maxDuration": (<%= maxDuration %>),
	"elementIndex": (<%= elementIndex %>),
	"steps": (<%= steps %>)
})!
<%= variable %> = _result_function()