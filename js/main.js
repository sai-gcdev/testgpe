// Modal product details
const productDetails = {
    "platinum-rewards": {
        title: "Platinum Rewards Credit Card",
        img: "images/Platinum Rewards Credit Card.png",
        desc: "Earn reward points on every purchase, with exclusive dining and travel offers.",
        features: [
            "Annual Fee: $99",
            "5x points on dining",
            "Airport lounge access",
            "Fraud protection"
        ]
    },
    "cashback": {
        title: "Cashback Credit Card",
        img: "images/Cashback Credit Card.png",
        desc: "Get instant cashback on groceries, fuel, and online shopping.",
        features: [
            "Annual Fee: $49",
            "Up to 5% cashback",
            "No joining fee",
            "Fuel surcharge waiver"
        ]
    },
    "travel-elite": {
        title: "Travel Elite Credit Card",
        img: "images/Travel Elite Credit Card.png",
        desc: "Perfect for frequent travelers with free travel insurance and global lounge access.",
        features: [
            "Annual Fee: $150",
            "Complimentary travel insurance",
            "Unlimited lounge access",
            "0% foreign transaction fee"
        ]
    },
    "classic-debit": {
        title: "Classic Debit Card",
        img: "images/Classic Debit Card.png",
        desc: "Easy access to your savings with global ATM withdrawals and contactless payments.",
        features: [
            "Zero annual fee",
            "Daily ATM withdrawal limit: $2,000",
            "Fraud protection"
        ]
    },
    "premium-debit": {
        title: "Premium Debit Card",
        img: "images/Premium Debit Card.png",
        desc: "Enjoy higher withdrawal limits and exclusive shopping discounts.",
        features: [
            "Annual Fee: $25",
            "Daily ATM withdrawal limit: $5,000",
            "Concierge services"
        ]
    },
    "youth-debit": {
        title: "Youth Debit Card",
        img: "images/Youth Debit Card.png",
        desc: "Specially designed for students and young adults with zero annual fees.",
        features: [
            "Zero annual fee",
            "Parental controls",
            "Exclusive student offers"
        ]
    }
};

// Card search/filter function
function filterCards() {
    const query = document.getElementById('card-search').value.toLowerCase();
    document.querySelectorAll('.product-card').forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Modal and form logic
document.addEventListener('DOMContentLoaded', function() {
    // Modal open
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const product = productDetails[this.dataset.product];
            if (product) {
                document.getElementById('modal-title').textContent = product.title;
                document.getElementById('modal-img').src = product.img;
                document.getElementById('modal-img').alt = product.title;
                document.getElementById('modal-desc').textContent = product.desc;
                const featuresList = document.getElementById('modal-features');
                featuresList.innerHTML = '';
                product.features.forEach(f => {
                    const li = document.createElement('li');
                    li.textContent = f;
                    featuresList.appendChild(li);
                });
                document.getElementById('product-modal').style.display = 'block';
            }
        });
    });

    // Modal close
    document.querySelector('.close-modal').onclick = function() {
        document.getElementById('product-modal').style.display = 'none';
    };
    window.onclick = function(event) {
        const modal = document.getElementById('product-modal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Card search
    document.getElementById('search-btn').addEventListener('click', filterCards);
    document.getElementById('card-search').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') filterCards();
    });

    // Form submission
    const form = document.getElementById('card-application-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            form.style.display = 'none';
            document.getElementById('confirmation-message').style.display = 'block';
        });
    }
});