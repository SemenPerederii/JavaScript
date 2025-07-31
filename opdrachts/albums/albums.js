"use strict";

const names = document.getElementById("naamen");
const albums = document.getElementById("albums");

const response = await fetch("https://jsonplaceholder.typicode.com/users");

if (response.ok) {
  const users = await response.json();
  for (const user of users) {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = user.name;
    const li = document.createElement("li");
    li.append(link);
    names.append(li);

    link.onclick = async () => {
      albums.innerHTML = "";
      document.getElementById("naam").textContent = user.name;
      const responseAlbums = await fetch(
        `https://jsonplaceholder.typicode.com/albums?userId=${user.id}`
      );
      if (responseAlbums.ok) {
        const albumsArray = await responseAlbums.json();
        for (const album of albumsArray) {
          const li = document.createElement("li");
          li.textContent = album.title;
          albums.append(li);
        }
      }
    };
  }
} else {
  document.getElementById("fout").hidden = false;
}
