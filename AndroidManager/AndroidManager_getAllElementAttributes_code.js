_call_function(getAllElementAttributes, {
	"serial": (<%= serial %>),
	"xpath": (<%= xpath %>),
	"elementIndex": (<%= elementIndex %>)
})!
<%= variable %> = _result_function()