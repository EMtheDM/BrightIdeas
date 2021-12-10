const newFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#project-name').value.trim();
    const clientName = document.querySelector('#client-name').value.trim();
    const clientEmail = document.querySelector('#client-email').value.trim();
    const clientPhone = document.querySelector('#client-phone').value.trim();
    const description = document.querySelector('#project-desc').value.trim();

    if (name && clientName && description) {
        const response = await fetch(`/api/projects`, {
            method: 'POST',
            body: JSON.stringify({ name, clientName, description }),
            headers: {
                'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert('Failed to create project!');
    }
}
};


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

document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);

document 
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);
