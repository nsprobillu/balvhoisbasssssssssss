_call_function(isAppInstalled, {
	"serial": (<%= serial %>),
	"appName": (<%= appName %>)
})!
<%= variable %> = _result_function()