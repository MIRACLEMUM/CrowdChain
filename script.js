// Navigation menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Create campaign logic
const createForm = document.getElementById('create-campaign-form');
const campaignList = document.getElementById('campaign-list');

createForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('campaign-name').value.trim();
  const goal = parseFloat(document.getElementById('campaign-goal').value);
  const desc = document.getElementById('campaign-desc').value.trim();

  if (!name || isNaN(goal) || goal <= 0 || !desc) {
    alert('Please fill out all fields with valid values.');
    return;
  }

  const campaign = {
    name,
    goal,
    raised: 0,
    desc
  };

  addCampaign(campaign);
  createForm.reset();
});

function addCampaign(campaign) {
  const card = document.createElement('div');
  card.className = 'campaign-card';

  const percent = (campaign.raised / campaign.goal) * 100;

  card.innerHTML = `
    <h3>${campaign.name}</h3>
    <p>${campaign.desc}</p>
    <div class="progress-container">
      <div class="progress-bar" style="width: ${percent}%;" data-goal="${campaign.goal}" data-raised="${campaign.raised}"></div>
    </div>
    <p><strong>Raised:</strong> $${campaign.raised} / $${campaign.goal}</p>
    <button class="donate-btn">Donate Now</button>
  `;

  campaignList.appendChild(card);

  // Add donation modal trigger
  card.querySelector('.donate-btn').addEventListener('click', () => {
    showModal(campaign);
  });
}

// Modal handling
const modal = document.getElementById('donation-modal');
const closeModalBtn = document.querySelector('.close-modal');
const donateForm = document.getElementById('donate-form');

function showModal(campaign) {
  modal.style.display = 'block';
  donateForm.dataset.campaignName = campaign.name;
}

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});

donateForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const amount = parseFloat(document.getElementById('donation-amount').value);
  const name = donateForm.dataset.campaignName;

  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid donation amount.');
    return;
  }

  const cards = document.querySelectorAll('.campaign-card');
  cards.forEach(card => {
    const title = card.querySelector('h3').textContent;
    if (title === name) {
      const raisedText = card.querySelector('p strong + text');
      const currentRaised = parseFloat(card.querySelector('.progress-bar').dataset.raised);
      const goal = parseFloat(card.querySelector('.progress-bar').dataset.goal);
      const newRaised = currentRaised + amount;
      const percent = (newRaised / goal) * 100;

      card.querySelector('.progress-bar').style.width = `${percent}%`;
      card.querySelector('.progress-bar').dataset.raised = newRaised;
      card.querySelector('p:nth-of-type(2)').innerHTML = `<strong>Raised:</strong> $${newRaised} / $${goal}`;
    }
  });

  modal.style.display = 'none';
  donateForm.reset();
});

// Back to Top button
const backToTop = document.createElement('button');
backToTop.textContent = '↑ Top';
backToTop.classList.add('back-to-top');
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
