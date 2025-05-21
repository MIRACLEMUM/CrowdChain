// Donate Now Button Alert
document.querySelectorAll('button').forEach(button => {
  if (button.textContent.includes("Donate Now")) {
    button.addEventListener("click", () => {
      alert("Thanks for your interest in donating! This feature is coming soon.");
    });
  }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Wallet Connect Simulation
document.querySelector('.connect-wallet').addEventListener("click", () => {
  alert("Wallet connected! This is a simulation.");
});

// Campaign Donation Progress Update
document.querySelectorAll('.campaign-card button').forEach(button => {
  button.addEventListener('click', function () {
    const campaignCard = this.closest('.campaign-card');
    const raisedText = campaignCard.querySelector('p:nth-child(3)');
    
    const donationIncrease = Math.floor(Math.random() * 100) + 10;
    const currentRaised = parseInt(raisedText.textContent.split('$')[1].split(' ')[0]);
    const updatedRaised = currentRaised + donationIncrease;
    
    raisedText.innerHTML = `$${updatedRaised} Raised | ${(updatedRaised / parseInt(campaignCard.querySelector('p').textContent.split('$')[1])) * 100}% Funded`;
    alert(`Thank you for your donation of $${donationIncrease}!`);
  });
});

// Hover Effects for Campaign Cards
document.querySelectorAll('.campaign-card').forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = 'transform 0.3s ease';
  });
  
  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)';
  });
});

// "Explore All Campaigns" Button Scroll to Top
document.querySelector('.explore-btn button').addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Highlight Active Navigation Link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('.nav-links a').forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');
  });
});
document.querySelector('#search-input').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  document.querySelectorAll('.campaign-card').forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = title.includes(query) ? 'block' : 'none';
  });
});
