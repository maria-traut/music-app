import { Inter } from "next/font/google";
import albums from "../assets/albums.json";

const inter = Inter({ subsets: ["latin"] });

const allAlbums = albums;
console.log("albums", albums);

const albumList = allAlbums.map((album) => (
  <li key={album.id}>
    <span className="font-bold">{album.title}</span> by {album.artist.name}
    <ol className="list-decimal list-inside">
      {album.tracks.map((track) => (
        <li key={track.id}>{track.title}</li>
      ))}
    </ol>
  </li>
));
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

export default function Home() {
  return (
    <>
      <h2>Album List</h2>
      <ul>{albumList}</ul>
    </>
  );
}
