export function initMap() {
	const map = L.map("map").setView([52.053931, 1.134981], 12);

	L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
		attribution: "&copy; OpenStreetMap &copy; CARTO",
	}).addTo(map);

	L.marker([52.053931, 1.134981]).addTo(map);

	map.scrollWheelZoom.disable();

	map.on("click", () => {
		map.scrollWheelZoom.enable();
	});

	map.on("mouseout", () => {
		map.scrollWheelZoom.disable();
	});

	const mapElement = document.getElementById("map");
	if (!mapElement) return;

	mapElement.addEventListener("mouseleave", () => {
		map.dragging.disable();

		map.dragging.enable();
	});
}
