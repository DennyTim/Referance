import { http } from './http';
import { ui } from './ui';

//Get posts on DOM load

document.addEventListener('DOMContentLoaded', getPosts);

//Listen for add post
document
  .querySelector('.post-submit')
  .addEventListener('click', submitPost);

// Listen form delete 
document
  .querySelector('#posts')
  .addEventListener('click', deletePost);

//Listen for edit state
document
  .querySelector('#posts')
  .addEventListener('click', enableEdit);


//Listen for cancel
document
  .querySelector('.card-form')
  .addEventListener('click', cancelEdit);

//Get posts
function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => {
      console.log(data)
      ui.showPosts(data)
    })
    .catch(err => console.log(err));
}

//Add posts
function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const id = document.querySelector('#id').value;

  //Validate input
  if (title === '' || body === '') {
    ui.showAlert('Please fill in all fields', 'alert alert-danger');
    return;
  }
  const data = { title, body };

  //Check for id
  if (id === '') {
    http.post('http://localhost:3000/posts', data)
      .then(data => {
        ui.showAlert('Post added', 'alert alert-success');
        ui.changeFormState('add');
        getPosts();
      })
      .catch(err => console.log(err));
  } else {
    http
      .put(`http://localhost:3000/posts/${id}`, data)
      .then(data => {
        ui.showAlert('Post updated', 'alert alert-success');
        ui.clearFields();
        getPosts();
      })
      .catch(err => console.log(err));
  }
  ui.changeFormState('edited');
}

//Delete post
function deletePost(e) {
  e.preventDefault();
  console.log('delete');
  if (e.target.parentElement.classList.contains('delete')) {
    const id = e.target.parentElement.dataset.id;
    if (confirm('Are you sure?')) {
      http.delete(`http://localhost:3000/posts/${id}`)
        .then(data => {
          ui.showAlert('Post Updated', 'alert alert-success');
          getPosts();
        })
        .catch(err => console.log(err));
    }
  }
}

//Enable Edit state
function enableEdit(e) {
  console.log(e.target)
  if (e.target.parentElement.classList.contains('edit')) {
    const id = e.target.parentElement.dataset.id;
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;

    const data = { id, title, body };

    ui.fillForm(data);
  }

  e.preventDefault();
}

//Cancel Edit
function cancelEdit(e) {
  if (e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add');

    e.preventDefault();
  }
}