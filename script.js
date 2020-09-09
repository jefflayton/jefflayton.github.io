function startPrompt() {
    var name = prompt("Hello! \nWhat is your name?", "Jeff");
	if (name != null)
	{
		document.getElementById("welcome").innerHTML = "Welcome " + name + "!";
	} else {
		document.getElementById("welcome").innerHTML = "Welcome!";
	}
    
}

window.onload = startPrompt;
