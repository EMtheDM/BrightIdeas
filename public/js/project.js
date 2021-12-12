const backToList = async (event) => {
    event.preventDefault();

    document.location.replace('/profile');

};

const newAskHandler = async (event) => {
    event.preventDefault();

    const description = document.querySelector('#new-ask-title').value.trim();
    if (description) {
        const response = await fetch(`/api/projectAsks`, {
            method: 'POST',
            body: JSON.stringify({ description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const id = document.querySelector('#create-ask').getAttribute('data-id');
            document.location.replace(`/project/${id}`);
        } else {
            alert ('Failed to create Ask!')
        }
    }
};

document
    .querySelector('#create-ask')
    .addEventListener('click', newAskHandler);

document
    .querySelector('.back-to-list')
    .addEventListener('click', backToList);