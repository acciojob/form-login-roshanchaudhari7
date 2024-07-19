function getFormvalue() {
    //Write your code here
	let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;

    let fullName = firstName + " " + lastName;
    alert(fullName);
}

document.getElementById('submitbtn').addEventListener('click', function(event) {
    event.preventDefault(); 
    getFormvalue(); 
});
