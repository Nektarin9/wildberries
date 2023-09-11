const email_valid = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const name_valid = /^[a-zа-яё]+$/i;
const phone_valid = /(\+7|8)[\s(]*\d{3}[)\s]*\d{3}[\s-]?\d{2}[\s-]?\d{2}/;
const inn_valid = /(\s+)?(\d{10})/;

// Обьявляем инпут для имени и строчку с ошибкой для него
const input_name = document.getElementById("name")
const error_name = document.getElementById("error_name")
// Обьявляем инпут для имени и строчку с ошибкой для него
const input_surname = document.getElementById("surname")
const error_surname = document.getElementById("error_surname")
// Обьявляем инпут для почты с ошибкой для него
const input_email = document.getElementById("email")
const error_email = document.getElementById("error_email")
// Обьявляем инпут для телефона с ошибкой для него
const input_phone = document.getElementById("phone")
const error_phone = document.getElementById("error_phone")
// Обьявляем инпут для ИНН с ошибкой для него
const input_inn = document.getElementById("inn")
const error_inn = document.getElementById("error_inn")

// Валидируем инпут
const is_Name_Valid = (value) => { 
    return name_valid.test(value);
};
const is_Email_Valid = (value) => { 
    return email_valid.test(value);
};
const is_Phone_Valid = (value) => { 
    return phone_valid.test(value);
};
const is_Inn_Valid = (value) => { 
    return inn_valid.test(value);
};

// Функция проверки инпута и вывода ошибки
const validInput = (input, isValidFunction, error, text_error) => {
    if (!isValidFunction(input.value)) {
        error.textContent = text_error
        input.style.color = "#F55123"
        input.style.borderBottom = "1px solid #F55123"
    }
    else {
        error.textContent = ""
        input.style.color = "#000000"
        input.style.borderBottom = "1px solid #00000033"
    }
  }
// Функция запрещающая вводить буквы
function proverka_number(input) {
    var value = input.value;
    var rep = /[=\.;,":'a-zA-Zа-яА-Я]/;
    if (rep.test(value)) {
    value = value.replace(rep, '');
    input.value = value;
}
}

// Навешиваем события на наши формы
input_name.addEventListener("change", () => {
    validInput(input_name, is_Name_Valid, error_name, "Укажите имя");
})
input_surname.addEventListener("change", () => {
    validInput(input_surname, is_Name_Valid, error_surname, "Укажите фамилию");
})
input_email.addEventListener("change", () => {
    validInput(input_email, is_Email_Valid, error_email, "Укажите адрес электронной почты");
})
input_phone.addEventListener("change", () => { 
    validInput(input_phone, is_Phone_Valid, error_phone, "Формат: +9 999 999 99 99");
})
input_inn.addEventListener("change", () => { 
    validInput(input_inn, is_Inn_Valid, error_inn, "Проверьте ИНН");
})


// Запрет на ввод букв
input_phone.addEventListener("keyup", () => {
    proverka_number(input_phone)
  })
input_inn.addEventListener("keyup", () => { 
    proverka_number(input_inn)
})
