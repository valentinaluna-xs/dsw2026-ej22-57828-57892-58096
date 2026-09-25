let specialties = [];
const tableBody = document.getElementById("specialties-table-body");
const searchInput = document.getElementById("search");
const searchButton = document.getElementById("search-button");


fetch("specialties.json")
    .then(response => response.json())
    .then(data => {
        specialties = data; //datos quedan en memoria
        showSpecialties(specialties);
    })
    .catch(error => {
        console.error("Error al cargar las especialidades:", error);
    });

function showSpecialties(data) {
    tableBody.innerHTML = ""; //limpiar cuerpo de tabla
    data.forEach(specialty => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${specialty.name}</td>
            <td>${specialty.description}</td>
        `;
        tableBody.appendChild(row);
    });
}

searchButton.addEventListener("click", () => {
    const searchValue = searchInput.value.toLowerCase();
    const filteredSpecialties = specialties.filter(specialty => {
        return specialty.name
            .toLowerCase()
            .includes(searchValue);
    });
    showSpecialties(filteredSpecialties);
});