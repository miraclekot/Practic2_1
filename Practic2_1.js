var x = "Hello!";
if (typeof x == "string") {
    alert('Тип данных строка');
} else if (typeof x == "function") {
    alert('Тип данных функция');
} else if (typeof x == "object") {
    alert('Тип данных объект');
} else if (typeof x == "boolean") {
    alert('Тип данных число с плавающей точкой');
} else if (typeof x == "bigint") {
    alert('Тип данных целое число произвольной длины');
} else if (typeof x == "number") {
    alert('Тип данных число');
} else if (typeof x == "symbol") {
    alert('Тип данных символ');
} else {
    alert('Тип данных неприсвоенное значение');
}

var zodiac = prompt('Ваш знак зодиака?');
if (typeof zodiac == 'string') {
    switch (zodiac) {
        case 'Овен':
            alert('Ваш знак зодиака Овен!');
            break;
        case 'Телец':
            alert('Ваш знак зодиака Телец!');
            break;
        case 'Близнецы':
            alert('Ваш знак зодиака Близнецы!');
            break;
        case 'Рак':
            alert('Ваш знак зодиака Рак!');
            break;
        case 'Лев':
            alert('Ваш знак зодиака Лев!');
            break;
        case 'Дева':
            alert('Ваш знак зодиака Дева!');
            break;
        case 'Весы':
            alert('Ваш знак зодиака Весы!');
            break;
        case 'Скорпион':
            alert('Ваш знак зодиака Скорпион!');
            break;
        case 'Стрелец':
            alert('Ваш знак зодиака Стрелец!');
            break;
        case 'Козерог':
            alert('Ваш знак зодиака Козерог!');
            break;
        case 'Водолей':
            alert('Ваш знак зодиака Водолей!');
            break;
        case 'Рыбы':
            alert('Ваш знак зодиака Рыбы!');
            break;
        default:
            alert('Некорректный ввод');
            break;
    }
} else {
    alert('Некорректный ввод');
}

let i = 1;
while (i < 41) {
    document.write(i + '<br />');
    i++;
}

for (let i = 1; i < 41; i++) {
    document.write(i + '<br />');
}

let a = 1;
do {
    document.write(a + '<br />');
    a++;
} while (a < 41);


let b = 0;
while (b <= 0) {
    var str = prompt('Введите число больше 5', 6);
    var num = Number(str);
    console.log(str, num, typeof num);

    if (str != null && str != "" && typeof num == 'number' && !isNaN(num)) {
        if (num > 5) {
            b++;
            alert('Поздравляю!');
        } else {
            alert('Попробуйте еще раз');
        }
    } else {
        alert('Введите тип данных число');
    }
}

c = 8;
while (c < 21) {
    if (c % 2 == 0) {
        document.write(c + '<br />');
        c++;
    } else {
        c++;
    }
}

d = 1
while (d < 8) {
    if (d != 5 && d % 2 != 0) {
        document.write(d + '<br />');
        d++;
    } else {
        d++;
    }
}
