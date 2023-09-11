// Кнопки товары в налчии
const button_hidden = document.getElementById("button_hidden")
const button_hidden2 = document.getElementById("button_hidden2")
// Кнопки товары отсутствующих товаров
const button_hidden3 = document.getElementById("button_hidden3")
const button_hidden4 = document.getElementById("button_hidden4")
const basket_hiden = document.querySelectorAll(".container_basket > label")
const p_basket = document.querySelector(".p_basket")
// Формы которые мы показываем или скрываем
const form_hide1 = document.getElementById("form_hide_show1")
const form_hide2 = document.getElementById("form_hide_show2")
// Функция меняющие кнопки (стрелочки)
const hidden = (button1, button2) => {
    button1.style.display = "none"
    button2.style.display = "block"  
}
// Функция меняющие кнопки (стрелочки)
const show = (button1, button2) => {
    button1.style.display = "block"
    button2.style.display = "none"
}
// Обработки кнопок (товары в наличии)
button_hidden.addEventListener("click", () => {
        hidden(button_hidden,button_hidden2)
        form_hide1.style.display = "none"
        basket_hiden[0].style.display = "none"
        p_basket.style.fontWeight = "600"
        p_basket.style.marginLeft = "0"
        let sum = handler()
        p_basket.textContent = price_format(sum[0]) + " " + "товаров" + " " + "·" + " " + price_format(sum[1]) + " " + "com"
})
button_hidden2.addEventListener("click", () => {
        show(button_hidden,button_hidden2)
        form_hide1.style.display = "block"
        basket_hiden[0].style.display = "block"
        p_basket.style.fontWeight = "400"
        p_basket.style.marginLeft = "11px"
        p_basket.textContent = "Выбрать все"
})
// Обработки кнопок (отсутствиующие товары)
button_hidden3.addEventListener("click", () => {
    hidden(button_hidden3,button_hidden4)
    form_hide2.style.display = "none"
})
button_hidden4.addEventListener("click", () => {
    show(button_hidden3,button_hidden4)
    form_hide2.style.display = "block"
})