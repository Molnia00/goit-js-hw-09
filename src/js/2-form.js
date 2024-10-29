
const email = document.querySelector('.email-input');
const message = document.querySelector('.textarea-A');
const form = document.querySelector('.feedback-form');
const storageKey = "feedback-form-state";

const formData = {
    email: "",
    message: ""
}

form.addEventListener('input', justInput);
function justInput(event) {
   const { name, value } = event.target;
    formData[name] = value;
    localStorage.setItem(storageKey, JSON.stringify(formData));
}

form.addEventListener('submit', subFunClear)
function subFunClear(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.clear(storageKey)

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return; 
    }
}

loadFormData()



function loadFormData() {
    const storedData = localStorage.getItem(storageKey);
    if (storedData) {
        const data = JSON.parse(storedData);
        formData.email = data.email;
        formData.message = data.message;

        email.value = data.email;
        message.value = data.message;
    }
}