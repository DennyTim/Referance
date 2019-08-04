const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'Wiliam Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lyn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];

const profiles = profileIterator(data);

//Call first profile
nextProfile();

//Next Event
document.getElementById('next').addEventListener('click', nextProfile);

//Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
      <li class="list-group-item">
        Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}
      </li>
    </ul>`;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}" alt="image"/>`;
  }
}

//Profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      if (nextIndex < profiles.length) {
        return { value: profiles[nextIndex++], done: false };
      } else {
        nextIndex = 0
        return { value: profiles[nextIndex++], done: false }
      }
    }
  };
}
