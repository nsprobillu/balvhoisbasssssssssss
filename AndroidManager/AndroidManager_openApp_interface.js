<div class="container-fluid">
	<%= _.template($('#input_constructor').html())({
		id: "serial",
		description: tr("Serial number"),
		default_selector: "string",
		disable_int: true,
		value_string: "",
		help: {description: tr("Device serial number. Can be obtained from the list returned by the function <strong>\"Get Devices List\"</strong> or by entering the command <code>adb devices</code>.")}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "appName",
		description: tr("Activity name"),
		default_selector: "string",
		disable_int: true,
		value_string: "",
		help: {description: tr("The name of activity. Important! The activity should be passed, not the application name. You can get it by launching the app and doing the <strong>\"Get Current Activity\"</strong> action.")}})
	%>
</div>
<div class="tooltipinternal">
	<div class="tr tooltip-paragraph-first-fold">Open app activity.</div>
	<div class="tr tooltip-paragraph-last-fold">This action does not wait for app elements to load. If you want to interact with an element in the application after it has been opened, call the <strong>"Wait for element"</strong> action after that.</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>
