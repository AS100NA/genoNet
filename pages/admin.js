const map = L.map('map').setView([51.505, -0.09], 13); // Default coordinates
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

let addresses = [];

function renderAddresses() {
    const addressList = document.getElementById('address-list');
    addressList.innerHTML = '';
    addresses.forEach((address, index) => {
        const li = document.createElement('li');
        li.textContent = address.name;
        li.addEventListener('click', () => {
            map.setView([address.coordinates.lat, address.coordinates.lng], 15);
        });
        addressList.appendChild(li);
    });
}

document.getElementById('add-address').addEventListener('click', () => {
    const name = prompt('Enter address name:');
    const lat = parseFloat(prompt('Enter latitude:'));
    const lng = parseFloat(prompt('Enter longitude:'));
    if (name && !isNaN(lat) && !isNaN(lng)) {
        const address = {
            name,
            coordinates: { lat, lng },
            equipment: [],
            ip: '',
            customers: []
        };
        addresses.push(address);
        L.marker([lat, lng]).addTo(map).bindPopup(name);
        renderAddresses();
    }
});

// Load mock data (replace with API calls later)
addresses = [
    { name: 'Address 1', coordinates: { lat: 51.505, lng: -0.09 }, equipment: [], ip: '192.168.1.1', customers: [] }
];
renderAddresses();
