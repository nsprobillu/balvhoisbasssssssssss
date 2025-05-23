_call_function(setTextByXpath, {
	"serial": (<%= serial %>),
	"xpath": (<%= xpath %>),
	"text": (<%= text %>),
	"clearText": (<%= clearText %>),
	"waitForElement": (<%= waitForElement %>),
	"delay": (<%= delay %>),
	"maxDuration": (<%= maxDuration %>),
	"elementIndex": (<%= elementIndex %>)
})!
<%= variable %> = _result_function()