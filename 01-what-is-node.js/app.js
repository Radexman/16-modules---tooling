async function getUser() {
	const res = await fetch('httsp://api.github.com/users/bradtraversy');
	const data = await res.json();
	console.log(data);
}

getUser();
