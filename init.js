
document.querySelector('#btnGenerate').addEventListener('click', ()=> {
    const initPerson = personGenerator.getPerson();
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
    document.querySelector('#specOutput').innerText = initPerson.spec;
    document.querySelector('#birhtDayOutput').innerText = initPerson.birthDay;
    document.querySelector('#birthMonthOutput').innerText = initPerson.birthMonth;
    document.querySelector('#birthYearOutput').innerText = initPerson.birthYear;
});

