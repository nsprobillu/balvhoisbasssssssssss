_call_function(scrollToElement, {
	"serial": (<%= serial %>),
	"scrollableElement": (<%= scrollableElement %>),
	"targetElement": (<%= targetElement %>),
	"direction": (<%= direction %>),
	"elementIndex": (<%= elementIndex %>),
	"maxDuration": (<%= maxDuration %>),
	"delay": (<%= delay %>)
})!
<%= variable %> = _result_function()