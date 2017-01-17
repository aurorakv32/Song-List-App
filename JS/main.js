$(document).ready(function(){

	// target button and the function after the click event 
	// is called an anonymous function
	$('#add').on("click", function(){

		// .val() is getting user input from the input field
		var song = $("#song").val(); // .val() is a getter and a setter
		
		// creating a variable and a list at the same time to display on the screen
		// *build a string that will become html*
		var insertedSongName = "<li>" + song + "</li>"

		// adding each insertedSongName var into a list and adding all new ones to the end
		//*take our insertedSongName string and appends it to the DOM
		$("#song-list").append(insertedSongName);

		// clears the value of the input field after each click
		//*.val("") is the way to clear the field better than the UI
		$("#song").val("");
	});
	
});