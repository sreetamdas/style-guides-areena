import data from "./all-scrapped.json";
import "./style.css";

const tableBody = document
	.getElementById("main-table")
	.getElementsByTagName("tbody")[0];

Object.keys(data).forEach((key) => {
	data[key].forEach((item) => {
		const row = tableBody.insertRow();
		const wordCell = row.insertCell();
		const meaningCell = row.insertCell();
		const publicationCell = row.insertCell();
		wordCell.innerHTML = item[`word_${key}`];
		meaningCell.innerHTML = item[`meaning_${key}`];
		publicationCell.innerHTML = key;
	});
});

const input = document.getElementById("search-input");
function handleSearch() {
	const filter = input.value.toLowerCase();
	const table = document.getElementById("main-table");
	const tr = table.getElementsByTagName("tr");
	console.log(filter);

	// Loop through all table rows, and hide those who don't match the search query
	for (let i = 0; i < tr.length; i++) {
		const td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			const txtValue = td.textContent || td.innerText;
			if (txtValue.toLowerCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

input.onkeyup = handleSearch;
