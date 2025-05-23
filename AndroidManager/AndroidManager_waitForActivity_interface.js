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
		id: "activity",
		description: tr("Activity name"),
		default_selector: "string",
		disable_int: true,
		value_string: "",
		help: {description: ""}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "delay",
		description: tr("Delay"),
		default_selector: "int",
		disable_string: true,
		value_number: 200,
		min_number: 1,
		max_number: 999999,
		help: {description: tr("Delay between checks, ms.")}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "maxDuration",
		description: tr("Maximum execution time"),
		default_selector: "int",
		disable_string: true,
		value_number: 60000,
		min_number:1,
		max_number: 999999,
		help: {description: tr("How long to wait for the activity to appear, ms.")}})
	%>
	<%= _.template($('#variable_constructor').html())({
		id: "Save",
		description: tr("Result"),
		default_variable: "ACTIVITY_EXISTS",
		help: {description: tr("<code>true</code> - activity exists;<br><code>false</code> - does not exist.")}})
	%>
</div>
<div class="tooltipinternal">
	<div class="tr tooltip-paragraph-first-fold">Wait for Activity.</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>