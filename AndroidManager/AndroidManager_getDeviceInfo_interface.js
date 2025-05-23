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
		id: "responseAsJSON",
		description: tr("Result format"),
		default_selector: "string",
		variants: [tr("JSON object"), tr("JSON string")],
		disable_int: true,
		value_string: tr("JSON object"),
		help: {description: tr("The result can be saved either as a JSON object or as a string.<br><br>Use an object to get the data you need, and a string to write to a file or log.")}})
	%>
	<%= _.template($('#variable_constructor').html())({
		id: "Save",
		description: tr("Result"),
		default_variable: "DEVICE_INFO",
		help: {description: ""}})
	%>
</div>
<div class="tooltipinternal">
	<div class="tr tooltip-paragraph-first-fold">Get information about the device.</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>