const map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

const addresses = [
    { name: 'Address 1', coordinates: { lat: 51.505, lng: -0.09 }, equipment: [], ip: '192.168.1.1', customers: [] }
];

addresses.forEach(address => {
    L.marker([address.coordinates.lat, address.coordinates.lng]).addTo(map).bindPopup(address.name);
});

const addressList = document.getElementById('address-list');
addresses.forEach(address => {
    const li = document.createElement('li');
    li.textContent = address.name;
    li.addEventListener('click', () => {
        map.setView([address.coordinates.lat, address.coordinates.lng], 15);
    });
    addressList.appendChild(li);
});
