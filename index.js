let form = document.querySelector('.form')
let name = document.querySelector('.name')
let surname = document.querySelector('.surname')
let patronymic = document.querySelector('.patronymic')
let b_day = document.querySelector('.b_day')
let start_education = document.querySelector('.start_education')
let faculty = document.querySelector('.faculty')
let btn = document.querySelector('.btn')



let error = document.querySelector('.error')
let p_name = document.getElementById('p_name')
let p_surname = document.getElementById('p_surname')
let p_patronymic = document.getElementById('p_patronymic')
let p_b_day = document.getElementById('p_b_day')
let p_start_education = document.getElementById('p_start_education')
let p_faculty = document.getElementById('p_faculty')

let header = document.querySelector('header')
let div_table = document.querySelector('.table_students')
let addBtn = document.querySelector('.addBtn')
let studentsTbody = document.getElementById('students-tbody')
let table = document.querySelector('.info')

table.style.display = 'none'
addBtn.style.display = 'none'

let students = []

let flag = true


function isValidBirthday(b_day) {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    const birthDate = new Date(students.b_day)
    const minDate = new Date('1900-01-01')

    if (birthDate < minDate) {
        b_day.style.backgroundColor = 'red'
        p_b_day.textContent = 'Дата рождения не может быть раньше 01.01.1900'
    } else if (birthDate > currentYear) {
        b_day.style.backgroundColor = 'red'
        p_b_day.textContent = 'Дата рождения не может быть в будущем'
    } else {
        // b_day.style.backgroundColor = 'pink'
        p_b_day.textContent = ''
    }

}

btn.addEventListener('click', (event) => {
    event.preventDefault()


    if (name.value.trim() === '') {
        name.style.backgroundColor = 'red'
        p_name.textContent = 'Введите имя'
        flag = false
    } else {
        name.style.backgroundColor = 'pink'
        p_name.textContent = ''
    }

    if (surname.value.trim() === '') {
        surname.style.backgroundColor = 'red'
        p_surname.textContent = 'Введите фамилию'
        flag = false
    } else {
        surname.style.backgroundColor = 'pink'
        p_surname.textContent = ''
    }

    if (patronymic.value.trim() === '') {
        patronymic.style.backgroundColor = 'red'
        p_patronymic.textContent = 'Введите отчество'
        flag = false
    } else {
        patronymic.style.backgroundColor = 'pink'
        p_patronymic.textContent = ''
    }


    if (b_day.value.trim() === '') {
        b_day.style.backgroundColor = 'red'
        p_b_day.textContent = 'Введите дату дня рождения'
        flag = false

    } else {
        b_day.style.backgroundColor = 'pink'
        p_b_day.textContent = ''
        isValidBirthday()
    }


    if (start_education.value.trim() === '') {
        start_education.style.backgroundColor = 'red'
        p_start_education.textContent = 'Введите дату начала обучения'
        flag = false
    } else {
        start_education.style.backgroundColor = 'pink'
        p_start_education.textContent = ''
    }


    if (faculty.value.trim() === '') {
        faculty.style.backgroundColor = 'red'
        p_faculty.textContent = 'Введите факультет'
        flag = false
    } else {
        faculty.style.backgroundColor = 'pink'
        p_faculty.textContent = ''
    }

    if (flag === false) {
        console.log('Объект не создан');
        return
    } else if (flag === true) {

        const student = {
            name: name.value.trim(),
            surname: surname.value.trim(),
            patronymic: patronymic.value.trim(),
            b_day: b_day.value,
            start_education: start_education.value,
            faculty: faculty.value.trim()
        }

        students.push(student)
        console.log(student);
        console.log(students);
        form.style.display = 'none'
        table.style.display = ''
        addBtn.style.display = ''
        renderStudentsTable()
        form.reset()
    }



})




function renderStudentsTable() {
    let tr = document.createElement('tr')
    let td_fio = document.createElement("td")
    let td_faculty = document.createElement("td")
    let td_b_day = document.createElement("td")
    let td_start_education = document.createElement("td")

    table.append(tr)
    td_fio.textContent = name.value + " " + surname.value + " " + patronymic.value
    tr.append(td_fio)
    td_faculty.textContent = faculty.value
    tr.append(td_faculty)
    td_b_day.textContent = b_day.value
    tr.append(td_b_day)
    td_start_education.textContent = start_education.value
    tr.append(td_start_education)
}


addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    table.style.display = 'none'
    form.style.display = ''
    addBtn.style.display = 'none'
})















