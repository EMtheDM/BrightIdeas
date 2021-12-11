// New Project form handler
const newFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#project-name').value.trim();
    const clientName = document.querySelector('#client-name').value.trim();
    const clientEmail = document.querySelector('#client-email').value.trim();
    const clientPhone = document.querySelector('#client-phone').value.trim();
    const description = document.querySelector('#project-desc').value.trim();
    debugger

    // Project can be created as long as it has a name, clientName, and description
    if (name && clientName && description) {
        const response = await fetch(`/api/projects`, {
            method: 'POST',
            body: JSON.stringify({ name, clientName, description }),
            headers: {
                'Content-Type': 'application/json',
        },
    });

    // If response is acceptable, replace the doc location with the profile?
    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert('Failed to create project!');
    }
}
};

// Delete project handler
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/projects/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete project');
        }
    }
};

// Event listener for New Project form handler
document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);


// Event listener for Delete Project handler
document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);
