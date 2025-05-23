_call_function(getDeviceInfo, {
	"serial": (<%= serial %>),
	"responseAsJSON": (<%= responseAsJSON %>)
})!
<%= variable %> = _result_function()