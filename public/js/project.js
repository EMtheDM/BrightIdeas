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

const newCommentHandler = async (event) => {
    event.preventDefault();

    console.log('did we even make it here?');
    const comment = document.querySelector('#new-comment-title').value.trim();
    const id = document.querySelector('#create-comment').getAttribute('data-id');
    console.log(comment);
    if (comment) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {

            console.log(id);
            document.location.replace(`/project/${id}`);
        } else {
            alert ('Failed to create comment!')
        }
    }
};


document
    .querySelector('#create-ask')
    .addEventListener('click', newAskHandler);

document
    .querySelector('#create-comment')
    .addEventListener('click', newCommentHandler);

document
    .querySelector('.back-to-list')
    .addEventListener('click', backToList);