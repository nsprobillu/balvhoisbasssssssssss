<div class="container-fluid">
	<%= _.template($('#input_constructor').html())({
		id: "command",
		description: tr("Command"),
		default_selector: "string",
		disable_int: true,
		value_string: "",
		help: {description: tr("The command to be executed in the console.<br><br>Space is the separator between commands. Therefore, if the expression contains spaces, then it must be wrapped in quotes. Relevant, for example, for paths to WIndows files.<br><br>Incorrect:<br><code>adb pull C://file with spaces.txt /data/data/</code><br><br> Correct:<br><code>adb pull \"C://file with spaces.txt\" /data/data/</code>.")}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "resultAsList",
		description: tr("Result format"),
		default_selector: "string",
		variants: [tr("list of the strings"), tr("string")],
		disable_int: true,
		value_string: tr("list of the strings"),
		help: {description: ""}})
	%>
	<%= _.template($('#variable_constructor').html())({
		id: "Save",
		description: tr("Result"),
		default_variable: "PROCESS_SUCCESS_OUTPUT",
		help: {description: tr("The result of executing the command as a list of strings or a string.")}})
	%>
</div>
<div class="tooltipinternal">
	<div class="tr tooltip-paragraph-first-fold">Run command in console. Useful for running <code>adb</code> commands.</div>
	<div class="tr tooltip-paragraph-fold">Unlike the standard module <strong>"Start process"</strong>, this action does not parse extra "garbage" from the response and automatically throws an exception in case of an error.</div>
	<div class="tr tooltip-paragraph-last-fold">If you need to handle exceptions yourself, you can do this with the <strong>"Ignore errors"</strong> action.</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>