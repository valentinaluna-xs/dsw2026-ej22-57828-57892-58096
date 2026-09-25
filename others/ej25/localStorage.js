let specialties = [];

function loadSpecialties() {
    const data = localStorage.getItem("specialties");
    if (data) {
        specialties = JSON.parse(data);
    }
    return specialties;
}

function addSpecialty(specialty) {
    specialties.push(specialty);
    localStorage.setItem(
        "specialties",
        JSON.stringify(specialties)
    );
}