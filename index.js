// Mobile Menu
const hambugeIcon = document.querySelector('.mobile-hamburger-menu');
const closeIcon = document.getElementById('closeIcon');
const mobileMenu = document.querySelector('.mobile-menu');

function menuClick() {
  hambugerIcon.style.display = 'none';
  mobileMenu.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

hambugerIcon.addEventListener('click', menuClick);

function closeClick() {
  hambugerIcon.style.display = 'flex';
  mobileMenu.style.display = 'none';
  document.body.style.overflow = 'visible';
}

closeIcon.addEventListener('click', closeClick);

// Speakers
const speakers = [
  {
    img: './images/speaker_01.png',
    name: 'Yochai Benkler',
    profession:
      'Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'He studies commons-based peer production',
  },
  {
    img: './images/speaker_02.png',
    name: 'Kilnam Chon',
    profession:
      'Professor of Korea Advanced Institute of Science and Technology',
    description:
      "He opened the Internet era in earnest by developing Asia's first internet protocol network SDN",
  },
  {
    img: './images/speaker_03.png',
    name: 'Sohyeong Noh',
    profession: 'Director of Art Centre Nabi and a board member of CC Korea',
    description:
      'Expert in cross-disciplinary collaboration & science technology, humanities, & the arts.',
  },
  {
    img: './images/speaker_04.png',
    name: 'Julia Reda',
    profession: 'President of Young Pirates of Europe',
    description:
      'Expert in European ingetration, political democracy and participation of youth',
  },
  {
    img: './images/speaker_05.png',
    name: 'Lila Tretikov',
    profession: 'Executive Director of the Wikimedia Foundation',
    description:
      'Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia.',
  },
  {
    img: './images/speaker_06.png',
    name: 'Ryan Merkley',
    profession: 'CEO of Creativve Commons',
    description:
      'Ryan had been leading open-source projects at the Mozilla Foundation',
  },
];

const container = document.getElementById('speakers-container');

function generateSpeakerData() {
  speakers.forEach((speaker) => {
    container.innerHTML += `<div class="speaker-list">
    <img src="${speaker.img}" alt="" class="speaker-img">
    <div class="speaker-content">
      <h2 class="speaker-header">${speaker.name}</h2>
      <h3 class="speaker-profession">${speaker.profession}</h3>
      <hr class="speaker-line">
      <p class="speaker-description">${speaker.description}</p>
    </div>
  </div>`;
  });
}

generateSpeakerData();
