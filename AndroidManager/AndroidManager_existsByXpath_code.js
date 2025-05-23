_call_function(existsByXpath, {
	"serial": (<%= serial %>),
	"xpath": (<%= xpath %>)
})!
<%= variable %> = _result_function()