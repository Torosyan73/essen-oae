const map = L.map('map').setView([25.21991799045428, 55.27704577684833], 14);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);
L.marker([25.21991799045428, 55.27704577684833]).addTo(map)
    .bindPopup('Essen commercial refrigeration')
    .openPopup();


    