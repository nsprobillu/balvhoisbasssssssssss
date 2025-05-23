<div class="container-fluid">
	<%= _.template($('#input_constructor').html())({
		id: "serial",
		description: tr("Serial number"),
		default_selector: "string",
		disable_int: true,
		value_string: "",
		help: {description: tr("Device serial number. Can be obtained from the list returned by the function <strong>\"Get Devices List\"</strong> or by entering the command <code>adb devices</code>.")}})
	%>
	<%= _.template($('#variable_constructor').html())({
		id: "Save",
		description: tr("Result"),
		default_variable: "SCREENSHOT",
		help: {description: tr("A string in BASE64 format.")}})
	%>
</div>
<div class="tooltipinternal">
	<div class="tr tooltip-paragraph-first-fold">Take a screenshot and save it to the variable in BASE64 format.</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>