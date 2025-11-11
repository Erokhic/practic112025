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
// let header_table = document.querySelector('.header')

div_table.style.display = 'none'
addBtn.style.display = 'none'

let students = []

let flag = true


function isValidBirthday(b_day) {
    const currentDate = new Date()
    const minDate = new Date('1900-01-01')
    const birthDate = new Date(b_day.value)

    // Сбрасываем стили и сообщения  
    b_day.style.backgroundColor = '';
    p_b_day.textContent = '';

    //  "Если дата рождения является невалидной (не может быть преобразована в нормальную дату),
    //   то показать ошибку и прекратить проверку"

    if (isNaN(birthDate.getTime())) {
        b_day.style.backgroundColor = 'red'
        p_b_day.textContent = 'Введите дату дня рождения'
        return false
    }

    if (birthDate < minDate) {
        b_day.style.backgroundColor = 'red'
        p_b_day.textContent = 'Дата рождения не может быть раньше 01.01.1900'
        return false

    }
    if (birthDate > currentDate) {
        b_day.style.backgroundColor = 'red'
        p_b_day.textContent = 'Дата рождения не может быть в будущем'
        return false
    }

    b_day.style.backgroundColor = 'pink'
    return true
}

function isValidStartEducation(start_education) {
    const nowDate = new Date()
    const minimumDate = new Date('2000-01-01')
    const startDate = new Date(start_education.value)

    start_education.style.backgroundColor = ''
    p_start_education.textContent = ''

    if (isNaN(startDate.getTime())) {
        start_education.style.backgroundColor = 'red'
        p_start_education.textContent = 'Введите дату начала обучения'
        return false
    }
    if (startDate < minimumDate) {
        start_education.style.backgroundColor = 'red'
        p_start_education.textContent = 'Дата не может быть раньше 2000 года'
        return false
    }
    if (startDate > nowDate) {
        start_education.style.backgroundColor = 'red'
        p_start_education.textContent = 'Дата не может быть в будущем'
        return false
    }
    start_education.style.backgroundColor = 'pink'
    return true

}




btn.addEventListener('click', (event) => {
    event.preventDefault()
    flag = true

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

    if (!isValidBirthday(b_day)) {
        flag = false;
    }

    if (!isValidStartEducation(start_education)) {
        flag = false;
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
        alert('Объект не создан');
        return
    }


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
    div_table.style.display = ''
    addBtn.style.display = ''
    renderStudentsTable()

    form.reset()
}

)




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
    td_b_day.textContent = infoBirthday(b_day)
    tr.append(td_b_day)
    td_start_education.textContent = infoEducation(start_education)
    tr.append(td_start_education)
}


addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    div_table.style.display = 'none'
    addBtn.style.display = 'none'
    form.style.display = ''

})



function infoBirthday(b_day) {
    const today = new Date()
    const birth_day = new Date(b_day.value)
    const age = today.getFullYear() - birth_day.getFullYear()

    const day = birth_day.getDate()          // день (1-31)
    const month = birth_day.getMonth() + 1   // месяц (0-11), поэтому +1
    const year = birth_day.getFullYear()     // год (4 цифры)

    let formatDay
    if (day < 10) {
        formatDay = '0' + day
    } else {
        formatDay = day;
    }
    let formatMonth
    if (month < 10) {
        formatMonth = '0' + month
    } else {
        formatMonth = month
    }
    const resualtDate = formatDay + '.' + formatMonth + '.' + year;
    // Проверяем, был ли уже день рождения в этом году
    // const monthDiff = today.getMonth() - birthDate.getMonth();

    return (resualtDate + ' (' + age + ' лет)');

}



function infoEducation(start_education) {
    const startDate = new Date(start_education.value)
    const startYear = startDate.getFullYear() //Получаем год начала обучения
    const endYear = startYear + 4
    const todayDate = new Date()

 let courseNumber = todayDate.getFullYear() - startYear

 // Если текущий месяц меньше сентября (месяц 8, т.к. месяцы от 0 до 11),
    // то учебный год еще не начался, поэтому курс должен быть на 1 меньше
    if (todayDate.getMonth() < 8) { // 8 = сентябрь (январь=0, февраль=1, ..., сентябрь=8)
        courseNumber = courseNumber - 1;
    }

    const septemberEndYear = new Date(endYear, 8, 1)  //1 - число месяца

    let educationInfo
    if (todayDate >= septemberEndYear) {
        educationInfo = startYear + '-' + endYear + ' (закончил)'
    }else{
        if (courseNumber<1) {
            courseNumber = 1
        }else if(courseNumber>4){
            courseNumber = 4
        }

        educationInfo = startYear + '-' + endYear + ' (' + courseNumber + ' курс)'
    }
    return educationInfo
}










