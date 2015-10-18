
$(document).ready(function() {
	$("#add").attr('disabled', 'disabled');
	$("#textarea").change(function() {
		$("#add").removeAttr('disabled');
	});
	
	if (localStorage.length != 0) {
		var notes = JSON.parse(localStorage.notes);
		var dates = JSON.parse(localStorage.dates);
		var i;
		for(i = 0; i < notes.length; i++) {
			var newPanel = $('<div class="panel panel-primary"><button type="button" class="close closePanel">&times;</button><div class="panel-heading"></div><div class="panel-body"></div></div>');
            newPanel.appendTo('.panel-group');
			$(".panel-body:last").html(notes[i]);
			$(".panel-heading:last").html(dates[i]);
		}
	}
	else {
		var notes = [];
    	var dates = [];
	}
	
	$("#add").on('click', function() {
		var newPanel = $('<div class="panel panel-primary"><button type="button" class="close closePanel">&times;</button><div class="panel-heading"></div><div class="panel-body"></div></div>');
		newPanel.appendTo('.panel-group');
		var panelHead = $(".panel-heading:last");
		var panelBody = $(".panel-body:last");
		panelHead.html(Date());
		var text = $("#textarea").val();
		panelBody.html(text);
		$("#textarea").val("");
		$("#add").attr('disabled', 'disabled');

		notes[notes.length] = panelBody.html();
    	dates[dates.length] = panelHead.html();
    	localStorage.notes = JSON.stringify(notes);
    	localStorage.dates = JSON.stringify(dates);
	});
	$(".closePanel").on('click', function() {
		$(this).parent().remove();
	});
	$("#remove").on('click', function() {
		$(".panel").remove();
		localStorage.clear();
	});
});
