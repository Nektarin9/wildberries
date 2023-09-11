// Обьявляем инпуты с количеством товара
const jacket_input = document.getElementById("jacket")
const case_input = document.getElementById("case")
const FaberCastell_input = document.getElementById("FaberCastell")
const input_number = [jacket_input, case_input, FaberCastell_input]
// Обьявляем кнопки плюс и минус для инпута
const btn = document.querySelectorAll(".input > button")
// Обьявляем текст с ценой в правой форме
const price_form_right = document.getElementById("price1")
const price_form_right2 = document.getElementById("price2")
const price_form_right_discount = document.getElementById("discount")
// Обьявляем текст "количество товара"
const quantity_goods = document.getElementById("quantity_goods")
// Цена за 1 товар без скидки
const price_discount = [522, 10500.235, 247]
// Цена за 1 товар скидой
const price = [1051, 11500.235, 475]
// Количество товаров (Да-да, сомневаюсь что чехлов на складе больше 200шт, они ведь не бесконечные :) )
const remaining_goods = [2, 200, 2]
// Кнопки плюс и минус для инпута
const button_minus = document.querySelectorAll(".input > .number-minus")
const button_plus = document.querySelectorAll(".input > .number-plus")

const color_minus_disabled = document.querySelectorAll(".svg_minus > .svg_minus_color")
const color_plus_disabled = document.querySelectorAll(".svg_plus > .svg_plus_color")

// Обьявляем сумарную цену исходя из количества товаров
const price_target_discount = document.querySelectorAll(".cont_price > p")
const price_target = document.querySelectorAll(".cont_old_price > p")
const price_target_mobile = document.querySelectorAll(".mobile > p")
// Кнопка заказать
const input_right = document.querySelectorAll(".input_flex > input")


// Функция подсчитывающия количество выбранных товаров и их сумарную стоимость со скидкой и без
function number (elements, mas, price_discount, price) {
    let sum = 0
    let sum_price_discount = 0
    let sum_price = 0
    let discount
    let result = []
    let counter_mas = []
    let counter = 0
    for (let i = 0; i < elements.length; i = i + 1) {
        if (elements[i].checked) {
            sum = sum + + mas[i].value
            counter_mas.push(mas[i].value)
            sum_price_discount = sum_price_discount + counter_mas[counter] * price_discount[i]
            sum_price = sum_price + counter_mas[counter] * price[i]
            counter = counter + 1
        }
    }
    discount = sum_price_discount - sum_price
    result.push(sum)
    result.push(Math.round(sum_price_discount))
    result.push(Math.round(sum_price))
    result.push(Math.round(discount))
    return result
}
// Отображаем цену товаров (сумарную) со скидой и без скидки и для мобильной версии
function price_selected_product (price_target, price_target_discount, price_target_mobile, text_input, price_discount, price) {
    price_target.innerHTML = `${price_format(Math.round(+text_input.value * +price))} сом`
    price_target_discount.innerHTML = `${price_format(Math.round(+text_input.value * +price_discount))} <span>сом</span>`
    price_target_mobile.innerHTML = `${price_format(Math.round(+text_input.value * +price_discount))} сом <span><img class="img_old" src="igmp_index/Vector668.svg">${Math.round(+text_input.value * +price)} сом</span>`
}

// Функция определяет как выводим на экран  слово, товара или товар
function Spelling(sum) {
    let str = String(sum)
    let product
    if (+str[str.length - 1] === 1) {
        product = "товар"
    }
    else {
        product = "товара"
    }
    return product
}
// Показываем сумму в определенном формате (разделить тысячи пробелом)
function price_format (sum) {
    let str_sum = String(sum)
    let index = 0
    let str = []
    for (let i = str_sum.length; i > 0; i = i - 1) {
        if (index === 3) {
            str.push(" ")
            str.push(str_sum[i-1])
            index = 1
        }
        else {
            str.push(str_sum[i-1])
            index = index + 1
        }
    }
    str = str.reverse().join("")
    return str
}


// Фукция событий (показать количество товаров)
function handler () {
    let sum = number(elements, input_number, price_discount , price)
    quantity_goods.innerHTML = sum[0] + " " + Spelling(sum[0])
    price_form_right.innerHTML = price_format(sum[1])+ " " + `<span class="h1_span">сом</span></h2>`
    price_form_right2.innerHTML = price_format(sum[2])+ " " + "сом"
    price_form_right_discount.innerHTML = price_format(sum[3]) + " " + "сом"
    if (input_right[0].checked && sum[1] !=0) {
        button_right[0].innerHTML = "Оплатить" + " " + price_format(sum[1]) + " " + "сом"
        text_rite_form.style.display = "none"
    }
    if (input_right[0].checked === false || sum[1] === 0) {
        button_right[0].innerHTML = "Заказать"
        text_rite_form.style.display = "block"
    }
    return sum
}

// Обработка события инпута (выбрать все)
checkbox.addEventListener("change", () => { 
    handler ()
})
// Обьявляем картинки с тоарами
const img = document.querySelectorAll(".block_product > .position_spam")
// Обьявляем строчку с 5-6 числом
const block_delivery = document.getElementById("5-6")
// Обьявляем строчку с 7-8 числом
const block_delivery2 = document.getElementById("7-8")

// Скрыть все продукты
function hide_product() {
    for (let i = 0; i < elements.length; i = i + 1) {
        img[i].style.display = "none"
    }
    block_delivery.style.display = "none"
    block_delivery2.style.display = "none"
    img[3].style.display = "none"
}
// Скрываем все продукты
hide_product()
button_plus_minus() 
// Навешиваем событие на кнопку "выбрать все" показываем продукт или скрываем продукт в блоке "Способк доставки"
checkbox.addEventListener("change", () => {
    for (let i = 0; i < elements.length; i = i + 1) {
        if(checkbox.checked) {
            delivery (img[i], elements[i])
            img[3].style.display = "block"
            block_delivery2.style.display = "block"
        }
        else {
            hide_product()
            img[3].style.display = "none"
            block_delivery2.style.display = "none"
        }
    }
})
// Показываем или скрываем продукт в зависимости от выбранного инпута
function delivery (img, input) {
    block_delivery.style.display = "block"
    if (input.checked) {
        img.style.display = "block"
    }
    if (input.checked === false){
        img.style.display = "none"  
    }
}
// Если все инпуты false убираем число в блоке "Способ доставки"
function verification_checked () {
    let counter = 0
    for (let i = 0; i < elements.length; i = i + 1) {
        if (elements[i].checked === false) {
            counter = counter + 1
        }
        if (counter === elements.length) {
            block_delivery.style.display = "none"

        }
    }
}
// Навешиваем события на инпут
for (let i = 0; i < elements.length; i = i + 1){
    elements[i].addEventListener("change", () => { 
        handler ()
        delivery (img[i],elements[i])
        verification_checked ()
        if (i === 1 && elements[i].checked) {
            img[3].style.display = "block"
            block_delivery2.style.display = "block"
        }
        else if (i === 1 && elements[i].checked === false) {
            img[3].style.display = "none"
            block_delivery2.style.display = "none"

        }
        for (let j = 0; j < input_number.length; j = j + 1) {
        input_number[j].addEventListener("input", () => {
            handler ()
        })
    }
    })
}

// Навешиваем событие на инпуты с выбором количества товаров
for (let i = 0; i < input_number.length; i = i + 1) {
    input_number[i].addEventListener("input", () => {
        // Ограничиваем ввод в инпут
        if (input_number[i].value >= remaining_goods[i]) {
            input_number[i].value = remaining_goods[i]
        }
        price_selected_product (price_target[i], price_target_discount[i], price_target_mobile[i], input_number[i], price_discount[i], price[i])
        button_plus_minus() 
    })   
}
// Функция определяющая в какой момент мы блокируем кнопку и определяем какую именно блокируем
function button_plus_minus() {
    for (let i = 0; i < remaining_goods.length; i = i + 1){
        if (input_number[i].value < remaining_goods[i]) {
            button_plus[i].disabled = false
            button_minus[i].disabled = true
        }
        else {
            button_plus[i].disabled = true
            button_minus[i].disabled = false
        }
        if (input_number[i].value <= 1) {
            button_minus[i].disabled = true
        }
        else {
            button_minus[i].disabled = false
        }
    }
}

for (let i = 0; i < remaining_goods.length; i = i + 1){
    button_minus[i].addEventListener("click", () => {
        button_plus_minus()
    })
}
for (let i = 0; i < remaining_goods.length; i = i + 1){
    button_plus[i].addEventListener("click", () => {
        button_plus_minus()
    })
}

// Навешиваем события на кнопки плюс и минус, а именно они должны подсчитывать и выводить суммы (числовое изменение инпута уменя реализовано в html)
for (let i = 0; i < btn.length; i = i + 1) {
    btn[i].addEventListener("click", () => {
        handler ()
        price_selected_product (price_target[Math.floor(i / 2)], price_target_discount[Math.floor(i / 2)],
             price_target_mobile[Math.floor(i / 2)], input_number[Math.floor(i / 2)], price_discount[Math.floor(i / 2)], price[Math.floor(i / 2)])
    })
}


const button_right = document.querySelectorAll(".block_rite > button")
const text_rite_form = document.getElementById("p_payment")
input_right[0].addEventListener("change", () => { 
    handler()
})



// Скрываем все продукты
hide_product()
// Блокируем кнопки исходя из начального положения
button_plus_minus() 



