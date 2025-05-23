_call_function(getXpathSelector, {
	"serial": (<%= serial %>),
	"xpath": (<%= xpath %>),
	"elementIndex": (<%= elementIndex %>)
})!
<%= variable %> = _result_function()