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
		id: "appName",
		description: tr("Application name"),
		default_selector: "string",
		disable_int: true,
		value_string: "",
		help: {description: tr("App name. You should specify the name of the application, not the activity.")}})
	%>
</div>
<div class="tooltipinternal">
	<div class="tr tooltip-paragraph-first-fold">Удалить кэш приложения. Все данные приложения, включая базу данных, файлы и профиль регистрации будут полностью удалены.</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>