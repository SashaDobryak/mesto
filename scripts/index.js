let editButton = document.querySelector('.profile__edit-button');
let popupClose = document.querySelector('.popup__button-close');
let popup = document.querySelector('.popup');
let nameInput = document.querySelector('#popup__name');
let jobInput = document.querySelector('#popup__job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let formElement = document.querySelector('.popup__form');

function openPopup() { 
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopup() { 
    popup.classList.remove('popup_opened');
}


editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value
  profileJob.textContent = jobInput.value
  closePopup()
}

formElement.addEventListener('submit', formSubmitHandler);