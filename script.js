const outfits = [
	{
		event: "providence 2025",
		image: "sweater.png",
		description: "dark blue sweater, brown corduroy pants. solo cup is a must."
	},
	{
		event: "red rocks 2025",
		image: "pokemon.jpg",
		description: "vintage pokemon shirt that costs a bajillion dollars online, jeans. must be stupid to wear."
	},
	{
		event: "now deleted ig post 2025",
		image: "puffer.png",
		description: "black puffer jacket, black pants. manspread required."
	},
	{
		event: "several last years",
		image: "magic.jpg",
		description: "untraceable ultravintage orlando magic basketball team sweatshirt."
	}
];

function showRandomFit() {
	const fit = outfits[Math.floor(Math.random() * outfits.length)];
	document.getElementById("event").textContent = fit.event;
	document.getElementById("photo").src = fit.image;
	document.getElementById("photo").alt = fit.event;
	document.getElementById("desc").textContent = fit.description;
}
