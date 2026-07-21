import albums from "./assets/albums.json";
const ul = document.getElementById("itemList") as HTMLUListElement;

const allAlbums = albums;
console.log("albums", albums);

const albumList = allAlbums.map((album) => {
  const li = document.createElement("li");
  li.textContent = `${album.title} by ${album.artist.name}`;

  const ol = document.createElement("ol");
  album.tracks.map((track) => {
    const trackLi = document.createElement("li");
    trackLi.textContent = `${track.title}`;

    ol.appendChild(trackLi);
  });
  li.appendChild(ol);
  ul.appendChild(li);
});

console.log("albumList", albumList);

/*
interface Artist {
  name: string;
}

interface Track {
  title: string;
}

interface Album {
  title: string;
  release_date: string;
  artist: Artist;
  tracks: Track[];
}
*/
