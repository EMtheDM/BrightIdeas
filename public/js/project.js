const backToList = async (event) => {
    event.preventDefault();

    document.location.replace('/profile');

};

const newAskHandler = async (event) => {
    event.preventDefault();

    const description = document.querySelector('#new-ask-title').value.trim();
    const id = document.querySelector('#create-ask').getAttribute('data-id');

    if (description) {
        const response = await fetch(`/api/projectAsks`, {
            method: 'POST',
            body: JSON.stringify({ description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            // const id = document.querySelector('#create-ask').getAttribute('data-id');
            document.location.replace(`/project/${id}`);
        } else {
            alert ('Failed to create Ask!')
        }
    }
};


const newTaskHandler = async (event) => {
    event.preventDefault();
    console.log("----------DID WE MAKE IT HERE?-----------");
    const task_content = document.querySelector('#new-task-title').value.trim();
    const id = document.querySelector('#create-task').getAttribute('data-id');

    if (task_content) {
        console.log(task_content,
            id);
        const response = await fetch(`/api/tasks`, {
            method: 'POST',
            body: JSON.stringify({ task_content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {

            // const id = document.querySelector('#create-task').getAttribute('data-id');
            document.location.replace(`/project/${id}`);
        } else {
            alert ('Failed to create Task!')

        }
    }
};

document
    .querySelector('#create-ask')
    .addEventListener('click', newAskHandler);

document
    .querySelector('#create-task')
    .addEventListener('click', newTaskHandler);

document
    .querySelector('.back-to-list')
    .addEventListener('click', backToList);