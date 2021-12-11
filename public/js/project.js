const backToList = async (event) => {
    event.preventDefault();

    document.location.replace('/profile');

};

const addProjectAsk = async (event) => {
    event.preventDefault();
    var popup = document.getElementById('add-ask-btn');
    popup.classList.toggle('show');
}

document
    .querySelector('#add-ask-btn')
    .addEventListener('click', addProjectAsk);

document
    .querySelector('.back-to-list')
    .addEventListener('click', backToList);