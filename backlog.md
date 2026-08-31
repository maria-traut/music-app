const form = document.getElementById("search-form") as HTMLFormElement;
const input = document.getElementById("search-input") as HTMLInputElement;
const button = document.getElementById("search-button") as HTMLButtonElement;

function renderSongList(tracks: ISong[]) {
tracks.forEach((track) => {
const li = document.createElement("li");
li.textContent = `${track.title}`;
ul.appendChild(li);
});
}

form.addEventListener("submit", async (event: SubmitEvent) => {
event.preventDefault();
const formElement = event.target as HTMLFormElement;
const formData = new FormData(formElement);
const dataObject = Object.fromEntries(formData.entries());
const books = await fetchTrack(dataObject.query as string);
ul.innerHTML = "";
renderSongList(track);
});

export async function fetchSong(trackID: number): Promise<ISong> {
const response = await fetch(`https://api.deezer.com/track/${trackID}`);
console.log("response", response);
const data = await response.json();
console.log("data", data);
return data as ISong;
}

console.log(fetchSong(116348398));
