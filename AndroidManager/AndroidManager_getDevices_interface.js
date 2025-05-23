<div class="container-fluid">
	<%= _.template($('#variable_constructor').html())({
		id: "Save",
		description: tr("Result"),
		default_variable: "DEVICES_LIST",
		help: {description: tr("List of running devices.")}})
	%>
</div>
<div class="tooltipinternal">
	<div class="tr tooltip-paragraph-first-fold">Run the command <code>adb devices</code> and save the running devices to the list.</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>