const dropdown = document.getElementById("countries");
fetch("https://restcountries.com/v3.1/all")
.then(response => response.json())
.then(data => {
    const countryNames = data
    .map(country => country.name.common)
    .sort((a, b) => a.localeCompare(b));
    
    countryNames.forEach(country => {
        const option = document.createElement("option");
        option.value = country;
        option.textContent = country;
        dropdown.appendChild(option);
    });

    const otherOption = document.createElement("option");
    otherOption.value = "Other";
    otherOption.textContent = "Other / Country not listed";
    dropdown.appendChild(otherOption);
})
.catch(error => {
    console.error("Error fetching country data", error);
});

const ageDropdown = document.getElementById("age");
for (let age = 18; age <= 99; age++) {
    const option = document.createElement("option");
    option.value = age;
    option.textContent = age;
    ageDropdown.appendChild(option);
}

const option100Push = document.createElement("option");
option100Push.value = "100+";
option100Push.textContent = "100+";
ageDropdown.appendChild(option100Push);