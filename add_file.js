const myForm = document.getElementById("myForm");
const inpFile = document.getElementById("inpFile");


myForm.addEventListener("submit", event => {
	event.preventDefault();
	const endpoint = "add_file.php";
	const formData = new FormData();

	formData.append("inpFile", inpFile.files[0]);

	fetch(endpoint,{
		method:"post",
		body:formData
	}).catch(console.error);
})


inpFile.addEventListener("change", function() {
	console.log(inpFile.files)
})