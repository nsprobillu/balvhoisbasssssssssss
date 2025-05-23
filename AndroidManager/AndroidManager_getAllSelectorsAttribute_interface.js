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
	<%= _.template($('#variable_constructor').html())({
		id: "Save",
		description: tr("Result"),
		default_variable: "XML_ATTRIBUTES",
		help: {description: tr("If the elements are found, then the action will return the values of their attributes, if not found - <code>false</code>.<br>The value of some attributes can be <code>true</code> / <code>false</code>, and for coordinates it is a list of 4 numbers.")}})
	%>
</div>
<div class="tooltipinternal">
	<div class="tr tooltip-paragraph-first-fold">Get a list of attributes for each element.</div>
</div>
<%= _.template($('#back').html())({action: "executeandadd", visible: true}) %>