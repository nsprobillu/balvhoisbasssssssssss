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
		id: "attribute",
		description: tr("Attribute name"),
		default_selector: "string",
		variants: ["bounds", "checkable", "checked", "class", "clickable", "content-desc", "enabled", "focusable", "focused", "index", "long-clickable", "package", "resource-id", "scrollable", "selected", "text"],
		disable_expression: true,
		disable_int: true,
		value_string: "text",
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
	<%= _.template($('#variable_constructor').html())({
		id: "Save",
		description: tr("Result"),
		default_variable: "ELEMENT_ATTRIBUTE",
		help: {description: tr("If the element is found, then the action will return the value of this attribute, if not found - <code>null</code>.<br>The value of some attributes can be <code>true</code> / <code>false</code>, and for coordinates it is a list of 4 numbers.")}})
	%>
</div>
<div class="tooltipinternal">
	<div class="tr tooltip-paragraph-first-fold">Get an element attribute.</div>
</div>
<%= _.template($('#back').html())({action: "executeandadd", visible: true}) %>