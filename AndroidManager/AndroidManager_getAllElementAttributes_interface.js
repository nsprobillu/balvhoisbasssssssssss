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
		id: "xpath",
		description: "Xpath",
		default_selector: "string",
		disable_int: true,
		value_string: "",
		help: {description: tr("Xpath expression") + ".<br><br><strong>" + tr("Example") + ":</strong><br><code>//*[contains(@text, \"Авторизоваться\") and @class=\"android.widget.Button\"]</code>."}})
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
	<%= _.template($('#variable_constructor').html())({
		id: "Save",
		description: tr("Result"),
		default_variable: "ELEMENT_ATTRIBUTES",
		help: {description: tr("JSON object with element attributes and their values.")}})
	%>
</div>
<div class="tooltipinternal">
	<div class="tr tooltip-paragraph-first-fold">Get all attributes of an element. The result will be returned as a JSON object if the element is found, if not - <code>false</code>.</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>