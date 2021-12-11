const backToList = async (event) => {
    event.preventDefault();

    document.location.replace('/profile');

};

document
    .querySelector('.back-to-list')
    .addEventListener('click', backToList);