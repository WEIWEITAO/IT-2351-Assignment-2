function checkInput()
	{
    	var name = document.getElementById("name").value;
    	var email = document.getElementById("email").value;
    	var subject = document.getElementById("subject").value;
    	var message = document.getElementById("message").value;
    	var submit = document.getElementById("submit").value;

    	confirm('Please Make sure that all information is correct:\n' + 'Name: ' + name + ';\n' + 'E-mail: ' + email + ';\n'+ 'Subject: ' + subject + ';\n'+ 'Message: ' + message + '.');
  	}
var el = document.getElementById("submit");
el.addEventListener('click', checkInput, false);
