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
		id: "scrollableElement",
		description: tr("Scrollable area"),
		default_selector: "string",
		disable_int: true,
		value_string: "",
		help: {description: tr("The xpath of the element with the scroll area. If the element is not found, then the action will abort with an error.")}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "targetElement",
		description: tr("Element to scroll") + " (" + tr("can be empty") + ")",
		default_selector: "string",
		disable_int: true,
		value_string: "",
		help: {description: tr("The xpath of the element to scroll to. If the field is empty, then the scroll will continue until it reaches the end of the scroll area or the timeout expires.")}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "direction",
		description: tr("Scroll direction"),
		default_selector: "string",
		variants: [tr("up"), tr("down"), tr("to the left"), tr("to the right")],
		disable_int: true,
		value_string: tr("down"),
		help: {description: ""}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "elementIndex",
		description: tr("Element index"),
		default_selector: "int",
		disable_string: true,
		value_number: 0,
		min_number: 0,
		max_number: 999999,
		help: {description: tr("The index of the expected element.<br>The first element is <code>0</code>.<br>If the number of elements is not known in advance and the last element is needed, then you can explicitly specify it in the xpath query") + ":<br><code>(//*[@text=\"OK\"])[last()]</code>."}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "delay",
		description: tr("Delay"),
		default_selector: "int",
		disable_string: true,
		value_number: 200,
		min_number: 1,
		max_number: 999999,
		help: {description: tr("Delay between element searches, ms.")}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "maxDuration",
		description: tr("Maximum execution time"),
		default_selector: "int",
		disable_string: true,
		value_number: 60000,
		min_number: 1,
		max_number: 999999,
		help: {description: tr("Maximum element wait time, ms.")}})
	%>
	<%= _.template($('#variable_constructor').html())({
		id: "Save",
		description: tr("Result"),
		default_variable: "ELEMENT_FOUND",
		help: {description: tr("Returns <code>true</code> if the element to search is specified and it was found<br><code>false</code> - if the element was not found when the timeout or end of the scroll area was reached.")}})
	%>
</div>
<div class="tooltipinternal">
	<div class="tr tooltip-paragraph-first-fold">Scroll in the specified direction until the expected element is found. If the element to be scrolled to is not specified, the scroll will continue until the timeout expires or the end of the scroll area is reached.</div>
	<div class="tooltip-paragraph-fold"><span class="tr">When performing this action, the thread may be terminated with an error. You can handle errors with the <strong>"Ignore errors"</strong> action.</span><br><br></div>
	<div class="tr tooltip-paragraph-last-fold">You can use <strong>uiautomatorviewer.bat</strong>, which is included with <strong>Android Studio SDK tools</strong>, to search for items.</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>