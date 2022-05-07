
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

const checkAge = function(age_1) {
    let age_2 = 18
    let age_3 = 60

    if (age_1 < age_2) {
        console.log("You don't have access cause your age is " + age_1 + " It's less then")
    } else if ((age_1 >=  age_2) && (age_1 <  age_3)) {
        console.log("Welcome !")
    } else if (age_1  > age_3) {
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }
}

checkAge(17);
checkAge(18);
checkAge(61);

// 2*: Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
// вернуть тру если намбер, если не намбер, то фолс

 const checkAge = function(age_1) {
    let age_2 = 18
    let age_3 = 60

    let result
    if (typeof(age_1) != 'number') {
        result = false
    } else {
        result = true
    

        if (age_1 < age_2) {
            console.log("You don't have access cause your age is " + age_1 + " It's less then")
        } else if ((age_1 >=  age_2) && (age_1 <  age_3)) {
            console.log("Welcome !")
        } else if (age_1  > age_3) {
            console.log("Keep calm and look Culture channel")
        } else {
            console.log("Technical work")
        }
    }   
    return result
}



if (checkAge("2") === false) {
    console.log("ERROR")
}

if (checkAge(6) === false) {
    console.log("ERROR")
}

if (checkAge(17) === false) {
    console.log("ERROR")
}

if (checkAge(18) === false) {
    console.log("ERROR")
}

if (checkAge(61) === false) {
    console.log("ERROR")
}


// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

const checkAge = function(age_1) {
    let age_2 = 18
    let age_3 = 60

    
    if (typeof(age_1) === 'string' && (age_1 === "2")) {
        age_1 = Number(age_1)
    } else (age_1 = false)

    let result
    if (typeof(age_1) != 'number') {
        result = false
    } else {
        result = true
    

        if (age_1 < age_2) {
            console.log("You don't have access cause your age is " + age_1 + " It's less then")
        } else if ((age_1 >=  age_2) && (age_1 <  age_3)) {
            console.log("Welcome !")
        } else if (age_1  > age_3) {
            console.log("Keep calm and look Culture channel")
        } else {
            console.log("Technical work")
        }
    }   
    return result
}



if (checkAge("2lskf") === false) {
    console.log("ERROR")
}

if (checkAge(6) === false) {
    console.log("ERROR")
}

if (checkAge(17) === false) {
    console.log("ERROR")
}

if (checkAge(18) === false) {
    console.log("ERROR")
}

if (checkAge(61) === false) {
    console.log("ERROR")
}



// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
let res = 1
for(let i = 0; i < 10; i++){
     res = res * 2
}
console.log(res)


// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

function Pow(parameter){
    let res = 1
    for(let i = 0; i < parameter ; i++){
        res = res * 2
   }
    console.log(res)

}
Pow(9)

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)


let SS = ''
for(let s = 0; s < 5; s++){
    SS = SS + ':)'
    console.log(SS)
}


// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

function Smile(stroka, numberOfRows){
    let SS = ''
    for(let s = 0; s < numberOfRows; s++){
        SS = SS + stroka 
        console.log(SS)
    }
}
Smile('d', 3)