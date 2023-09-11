// Обьявляем инпуты
const checkbox = document.querySelector(".input_checkbox")
let elements = document.querySelectorAll(".cont_input_flex > input")
// Если инпут "выбрать все" активен => активируем и остальные инпуты
checkbox.addEventListener("change", () => {
    for (let i = 0; i < elements.length; i ++) {
        if(checkbox.checked) {
            elements[i].checked = true
            
        }
        else {
            elements[i].checked = false
        }
    }
})
// Убираем checked, если один из инпутов false
const remove_checkbox = () => {
    for (let i = 0; i < elements.length; i ++) {
        elements[i].addEventListener("change", () => {
            if (!elements[i].checked) {
                checkbox.checked = false
            }
        })
    }
}
remove_checkbox()

