import albums from "./assets/albums.json";
import type { IAlbum } from "./types";
import { getAlbumCard } from "./types";

const allAlbums = albums as IAlbum[];
const ul = document.getElementById("itemList") as HTMLUListElement;

allAlbums.map((album) => ul.append(getAlbumCard(album)));
