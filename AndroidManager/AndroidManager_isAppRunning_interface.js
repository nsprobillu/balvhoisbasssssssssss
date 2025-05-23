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
		description: tr("Application name"),
		default_selector: "string",
		disable_int: true,
		value_string: "",
		help: {description: tr("The name of the application or its current activity.")}})
	%>
	<%= _.template($('#variable_constructor').html())({
		id: "Save",
		description: tr("Result"),
		default_variable: "IS_APP_RUNNING",
		help: {description: tr("<code>true</code> - application/activity is running;<br><code>false</code> - not running.")}})
	%>
</div>
<div class="tooltipinternal">
	<div class="tr tooltip-paragraph-first-fold">Find out if an app or activity is running.</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>
