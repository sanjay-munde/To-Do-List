[...document.querySelectorAll('li')].forEach(li => 
  li.addEventListener('click', e => (e.stopPropagation(), li.classList.toggle('done')))
);

// Update the existing JavaScript script
const editButton = document.getElementById('editButton');
const listItems = document.querySelectorAll('li');

let isEditing = false;

function toggleEditing() {
  isEditing = !isEditing;

  listItems.forEach((li) => {
    li.contentEditable = isEditing;
  });

  // Toggle between edit and save icons
  if (isEditing) {
    editButton.innerHTML = '<i class="fas fa-save"></i>';
    editButton.classList.add('save-icon');
  } else {
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.classList.remove('save-icon');
  }
}

editButton.addEventListener('click', toggleEditing);
