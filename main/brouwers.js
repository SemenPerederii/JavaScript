const response = await fetch("https://api.openbrewerydb.org/v1/breweries");

if (response.ok) {
  const brouwers = await response.json();
  const ul = document.getElementById("brouwers");
  for (const brouwer of brouwers) {
    const li = document.createElement("li");
    li.textContent = `${brouwer.name} - ${brouwer.city}`;
    ul.append(li);
  }
} else {
  document.getElementById("probleem").hidden = false;
}
