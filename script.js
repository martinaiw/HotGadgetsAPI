// Function to fetch data from the API
const loadPhones = async (searchText, isShowAll) => {
    toggleLoader(true);
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    
    try {
        const res = await fetch(url);
        const data = await res.json();
        const phones = data.data;
        displayPhones(phones, isShowAll);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Function to render cards on the UI
const displayPhones = (phones, isShowAll) => {
    const container = document.getElementById('phones-container');
    container.innerHTML = '';

    const showAllContainer = document.getElementById('show-all-container');
    
    // Check if we should limit the results (Initial search shows 12)
    if (!isShowAll && phones.length > 12) {
        phones = phones.slice(0, 12);
        showAllContainer.classList.remove('hidden');
    } else {
        showAllContainer.classList.add('hidden');
    }

    if (phones.length === 0) {
        container.innerHTML = '<h2 style="grid-column: 1/-1; text-align:center;">No results found. Please try another brand.</h2>';
        toggleLoader(false);
        return;
    }

    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.classList.add('phone-card');
        phoneCard.innerHTML = `
            <img src="${phone.image}" alt="${phone.phone_name}">
            <h3>${phone.phone_name}</h3>
            <p>Find out more about this device specifications and features.</p>
            <button class="btn-primary" onclick="showDetails('${phone.slug}')">Show Details</button>
        `;
        container.appendChild(phoneCard);
    });

    toggleLoader(false);
}

// Search execution logic
const handleSearch = (isShowAll) => {
    const searchField = document.getElementById('search-input');
    const searchText = searchField.value;
    
    if(searchText === "") {
        alert("Please enter a brand name.");
        return;
    }
    loadPhones(searchText, isShowAll);
}

// Button Events
document.getElementById('btn-search').addEventListener('click', () => {
    handleSearch(false);
});

document.getElementById('btn-show-all').addEventListener('click', () => {
    handleSearch(true);
});

// Function to show phone details in a Modal
const showDetails = async (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    const phone = data.data;

    const modalInfo = document.getElementById('modal-info');
    
    // Injecting technical details into the modal
    modalInfo.innerHTML = `
        <img src="${phone.image}" alt="${phone.name}">
        <h2>${phone.name}</h2>
        <p><strong>Brand:</strong> ${phone.brand}</p>
        <p><strong>Storage:</strong> ${phone.mainFeatures.memory}</p>
        <p><strong>Display Size:</strong> ${phone.mainFeatures.displaySize}</p>
        <p><strong>Chipset:</strong> ${phone.mainFeatures.chipSet}</p>
        <p><strong>Sensors:</strong> ${phone.mainFeatures.sensors.join(', ')}</p>
        <p><strong>Release Date:</strong> ${phone.releaseDate ? phone.releaseDate : 'No release date found'}</p>
    `;

    // Show the modal
    document.getElementById('phone-details-modal').classList.remove('hidden');
}

// Event to close the modal
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('phone-details-modal').classList.add('hidden');
});

// Close modal if user clicks outside the content box
window.addEventListener('click', (event) => {
    const modal = document.getElementById('phone-details-modal');
    if (event.target === modal) {
        modal.classList.add('hidden');
    }
});
// Function to show/hide the loading spinner
const toggleLoader = (isLoading) => {
    const loader = document.getElementById('loader');
    if (isLoading) {
        loader.classList.remove('hidden');
    } else {
        loader.classList.add('hidden');
    }
}
loadPhones('iphone', false);