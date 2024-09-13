// Open booking modal and set room price
function openBookingModal(roomPrice) {
    document.getElementById('booking-modal').style.display = 'flex';
    document.getElementById('room-price').value = roomPrice;
}

// Close booking modal
function closeBookingModal() {
    document.getElementById('booking-modal').style.display = 'none';
}

// Open dining modal and set dining type and price
function openDiningModal(diningType, pricePerPerson) {
    document.getElementById('dining-modal').style.display = 'flex';
    document.getElementById('dining-price-per-person').value = pricePerPerson;
}

// Close dining modal
function closeDiningModal() {
    document.getElementById('dining-modal').style.display = 'none';
}

// Random Invoice Number Generator
function generateInvoiceNumber() {
    return Math.floor(1000 + Math.random() * 9000); // Generates 6-digit random number
}

// Confirm booking and show confirmation message
document.getElementById('confirm-booking-btn').addEventListener('click', function () {
    const name = document.getElementById('guest-name').value;
    const phone = document.getElementById('phone-number').value;
    const checkin = document.getElementById('checkin-date').value;
    const checkout = document.getElementById('checkout-date').value;
    const roomPrice = parseFloat(document.getElementById('room-price').value);

    if (!name || !phone || !checkin || !checkout || isNaN(roomPrice)) {
        alert('Please fill out all required fields.');
        return;
    }

    const daysStayed = calculateDays(checkin, checkout);
    const roomCost = daysStayed * roomPrice;
    const totalBill = roomCost;

    document.getElementById('invoice-number').textContent = generateInvoiceNumber();
    document.getElementById('total-bill').textContent = totalBill.toFixed(2);
    document.getElementById('room-total-cost').textContent = roomPrice.toFixed(2);
    document.getElementById('days-stayed').textContent = daysStayed;
    document.getElementById('checkin-confirmation').textContent = checkin;
    document.getElementById('checkout-confirmation').textContent = checkout;

    document.getElementById('booking-confirmation').style.display = 'block';
    closeBookingModal();
});

// Function to calculate the number of days between two dates
function calculateDays(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDiff = end - start;
    return Math.ceil(timeDiff / (1000 * 3600 * 24)) || 1;
}

// Function to generate an invoice number
function generateInvoiceNumber() {
    return  Math.floor(Math.random() * 1000);
}

// Function to close the booking modal
function closeBookingModal() {
    document.getElementById('booking-modal').style.display = 'none';
}

// Function to open the booking modal (if needed)
function openBookingModal() {
    document.getElementById('booking-modal').style.display = 'block';
}


// Confirm dining booking and show confirmation message
document.getElementById('confirm-dining-booking-btn').addEventListener('click', function () {
    const name = document.getElementById('dining-guest-name').value;
    const phone = document.getElementById('dining-phone-number').value;
    const date = document.getElementById('dining-date').value;
    const time = document.getElementById('dining-time').value;
    const guests = parseInt(document.getElementById('dining-guests').value, 10);
    const pricePerPerson = parseFloat(document.getElementById('dining-price-per-person').value) || 0;

    // Validate inputs
    if (!name || !phone || !date || !time || isNaN(guests) || isNaN(pricePerPerson)) {
        alert('Please fill out all required fields correctly.');
        return;
    }

    const totalCost = guests * pricePerPerson;

    // Update confirmation details
    document.getElementById('dining-invoice-number').textContent = generateInvoiceNumber();
    document.getElementById('dining-total-bill').textContent = totalCost.toFixed(2);
    document.getElementById('dining-total-cost').textContent = pricePerPerson.toFixed(2);
    document.getElementById('dining-guests-confirmation').textContent = guests;
    document.getElementById('dining-date-confirmation').textContent = date;
    document.getElementById('dining-time-confirmation').textContent = time;

    // Display confirmation and close modal
    document.getElementById('dining-modal').style.display = 'none';
    document.getElementById('dining-confirmation').style.display = 'block';
});

// Close dining modal function
function closeDiningModal() {
    document.getElementById('dining-modal').style.display = 'none';
}

// Generate an invoice number
function generateInvoiceNumber() {
    return Math.floor(Math.random() * 10000);
}

// Booking Modal Logic (if used for dining)
function openBookingModal(price) {
    document.getElementById('booking-modal').style.display = 'block';
    document.getElementById('room-price').value = price;
}

function closeBookingModal() {
    document.getElementById('booking-modal').style.display = 'none';
}


// Close Modals when clicking outside of them
window.onclick = function(event) {
    if (event.target == document.getElementById('booking-modal')) {
        closeBookingModal();
    } else if (event.target == document.getElementById('dining-modal')) {
        closeDiningModal();
    }
}


// Helper function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to apply the fade-up animation when the element enters the viewport
function handleScroll() {
    const fadeElements = document.querySelectorAll('.fade-up');

    fadeElements.forEach((el) => {
        if (isInViewport(el)) {
            el.classList.add('visible');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Trigger the animation on page load as well
window.addEventListener('DOMContentLoaded');


document.querySelectorAll('.nav-links a, .cta-button').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the target section id from href attribute
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('.header').offsetHeight,
                behavior: 'smooth'
            });
        }
    });
});


