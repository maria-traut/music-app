export interface ITrack {
  id: number;
  title: string;
  duration: number;
  link: string;
  preview: string;
}

export interface IAlbum {
  id: number;
  title: string;
  link: string;
  cover: string;
  cover_medium: string;
  release_date: string;
  artist: IArtist;
  tracks: ITrack[];
}

interface IArtist {
  id: number;
  name: string;
  picture: string;
}

function getTrack(track: ITrack): HTMLElement {
  const trackListItem = document.createElement("li");
  trackListItem.textContent = `${track.title}`;

  const trackLink = document.createElement("a");
  trackLink.href = track.link;
  trackLink.textContent = `💜 Find on Deezer`;
  trackLink.style.textDecoration = "none"; // inline styling for testing only
  trackLink.style.color = "inherit";

  const trackPreview = document.createElement("audio");
  trackPreview.src = track.preview;
  trackPreview.controls = true;

  trackListItem.append(trackLink);
  trackListItem.append(trackPreview);
  return trackListItem;
}

export function getTrackList(album: IAlbum): HTMLElement {
  const trackDetails = document.createElement("details");

  const trackSummary = document.createElement("summary");
  trackSummary.textContent = `Show Songs`;

  const songList = document.createElement("ol");
  album.tracks.map((track) => {
    songList.append(getTrack(track));
  });

  trackDetails.append(trackSummary);
  trackDetails.append(songList);

  return trackDetails;
}

export function getAlbumCard(album: IAlbum): HTMLElement {
  const albumCard = document.createElement("li");
  albumCard.style.border = "5px solid lightgrey"; // inline styling for testing only
  albumCard.style.listStyle = "none";
  albumCard.style.borderRadius = "10px";
  albumCard.style.padding = "30px 25px 20px 40px";

  const albumHeadline = document.createElement("h3");
  albumHeadline.textContent = `${album.title} by ${album.artist.name}`;

  const albumCover = document.createElement("img");
  albumCover.src = `${album.cover_medium}`;
  albumCover.alt = `${album.title} by ${album.artist}`;

  albumCard.append(albumHeadline);
  albumCard.append(albumCover);
  albumCard.append(getTrackList(album));

  return albumCard;
}
