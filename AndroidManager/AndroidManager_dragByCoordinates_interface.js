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
		id: "startX",
		description: tr("Start") + " " + tr("coordinate") + " X",
		default_selector: "int",
		disable_string: true,
		value_number: 0,
		min_number: 0,
		max_number: 999999,
		help: {description: ""}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "startY",
		description: tr("Start") + " " + tr("coordinate") + " Y",
		default_selector: "int",
		disable_string: true,
		value_number: 0,
		min_number: 0,
		max_number: 999999,
		help: {description: ""}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "endX",
		description: tr("End") + " " + tr("coordinate") + " X",
		default_selector: "int",
		disable_string: true,
		value_number: 0,
		min_number: 0,
		max_number:999999,
		help: {description: ""}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "endY",
		description: tr("End") + " " + tr("coordinate") + " Y",
		default_selector: "int",
		disable_string: true,
		value_number: 0,
		min_number: 0,
		max_number: 999999,
		help: {description: ""}})
	%>
</div>
<div class="tooltipinternal">
	<div class="tr tooltip-paragraph-first-fold">Drag the element along the coordinates.</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>