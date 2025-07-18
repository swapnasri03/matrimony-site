const profileData = {
  name: "Priya Mehra",
  age: 27,
  location: "Bangalore, India",
  photo: "https://randomuser.me/api/portraits/women/65.jpg",
  bio: "Software engineer who loves to cook, travel, and read novels. Looking for a kind and ambitious partner."
};const profiles = [
  {
    name: "Priya Mehra",
    age: 27,
    location: "Bangalore, India",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Software engineer who loves to cook, travel, and read novels.",
  },
  {
    name: "Ravi Sharma",
    age: 30,
    location: "Delhi, India",
    photo: "https://randomuser.me/api/portraits/men/34.jpg",
    bio: "Entrepreneur and fitness enthusiast. Looking for a life partner who shares similar values.",
  },
  {
    name: "Sneha Kapoor",
    age: 26,
    location: "Mumbai, India",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Classical dancer and teacher. Passionate about arts and culture.",
  },
  {
    name: "Arjun Verma",
    age: 32,
    location: "Pune, India",
    photo: "https://randomuser.me/api/portraits/men/47.jpg",
    bio: "Tech lead at a startup. Loves hiking and photography.",
  },
  {
    name: "Neha Gupta",
    age: 25,
    location: "Chandigarh, India",
    photo: "https://randomuser.me/api/portraits/women/36.jpg",
    bio: "Nutritionist and wellness coach. Believes in holistic living.",
  },
  {
    name: "Vikram Sinha",
    age: 29,
    location: "Hyderabad, India",
    photo: "https://randomuser.me/api/portraits/men/52.jpg",
    bio: "Civil engineer with a love for architecture and cricket.",
  },
  {
    name: "Kavita Joshi",
    age: 28,
    location: "Jaipur, India",
    photo: "https://randomuser.me/api/portraits/women/51.jpg",
    bio: "Interior designer who finds beauty in simplicity.",
  },
  {
    name: "Amit Kulkarni",
    age: 31,
    location: "Nagpur, India",
    photo: "https://randomuser.me/api/portraits/men/68.jpg",
    bio: "Finance professional, traveler and foodie.",
  },
  {
    name: "Meena Iyer",
    age: 29,
    location: "Kochi, India",
    photo: "https://randomuser.me/api/portraits/women/73.jpg",
    bio: "Environmentalist working with NGOs. Enjoys gardening and poetry.",
  },
  {
    name: "Rohan Malhotra",
    age: 33,
    location: "Ahmedabad, India",
    photo: "https://randomuser.me/api/portraits/men/90.jpg",
    bio: "Professor and researcher. Passionate about education and innovation.",
  }
];

function renderProfiles(profileList) {
  const container = document.getElementById("profile");
  container.innerHTML = ""; // Clear existing content

  profileList.forEach(profile => {
    const card = document.createElement("div");
    card.className = "profile-card";
    card.innerHTML = `
      <img src="${profile.photo}" alt="${profile.name}" class="profile-img" />
      <div class="profile-name">${profile.name}</div>
      <div class="profile-age-location">Age ${profile.age} • ${profile.location}</div>
      <div class="profile-bio">${profile.bio}</div>
      <div class="profile-actions">
        <button>Express Interest</button>
        <button>Send Message</button>
      </div>
    `;
    container.appendChild(card);
  });
}

renderProfiles(profiles);


