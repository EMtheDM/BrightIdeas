const backToList = async (event) => {
    event.preventDefault();

    document.location.replace('/profile');

};

const addProjectAsk = async (event) => {
    event.preventDefault();
    prompt('What are the requirements of the project?');
};

document
    .querySelector('.new-ask-btn')
    .addEventListener('click', addProjectAsk);

document
    .querySelector('.back-to-list')
    .addEventListener('click', backToList);