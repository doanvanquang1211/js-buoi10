function tongMang(arr) {
    let kq = 0;
    for (i = 0; i < arr.length; i++) {
        kq += + arr[i];
    }
    return kq
}
console.log(tongMang([1, 2, 3, 4, 5]));
// bai22
function arrayAll(array) {
    let kq1 = 0;
    let a = []
    let arrayMax = Math.max(...array)
    console.log(arrayMax);
    let arrayMin = Math.min(...array)
    console.log(arrayMin);
    for (i = 0; i < array.length; i++) {
        kq1 += array[i] / array.length

    }
    return arrayMax, arrayMin, kq1;
}
console.log(arrayAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
// bai23
function frequencyArray(array) {
    let a = []; b = [];
    let prev;
    array.sort()

    for (i = 0; i < array.length; i++) {
        const element = array[i]
        if (element !== prev) {
            a.push(element);
            b.push(1)
        } else {
            b[b.length - 1]++
        }
        prev = element;

    }
    let maxB = Math.max(...b)
    let indexMax = b.indexOf(maxB);
    return a[indexMax]

}

console.log(frequencyArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
// bai25
function square(array) {

    let b = []
    for (i = 0; i < array.length; i++) {
        b.push(array[i] * array[i])
    }
    return b
}
console.log(square([1, 2, 3, 4, 3, 4, 6, 7]));
// bai24
function kiemtra(n) {
    let flag = true
    if (n < 2) {
        flag = false
    } else if (n == 2) {
        flag = true
    } else if (n % 2 == 0) {
        flag = false
    } else {
        for (i = 2; i < n; i++) {
            if (n % i == 0) {
                flag = false
                break
            } else {
                flag = true
            }
        }
    }
    return flag
}
// console.log(kiemtra('7'));
function bai24(array) {
    let b = []
    for (const a of array) {
        if (kiemtra(a)) {
            b.push(a)
        }
    }
    return b
}
console.log(bai24([1, 2, 3, 2, 3, 4, 6, 7]));
// bai26
function bai26(num, array) {
    let b = []
    array.sort(function (a, b) {
        return a - b
    })
    function checkArr(array) {
        return array >= num
    }
    let arr = array.findIndex(checkArr)
    console.log(arr);
    let str = array[arr]
    b.push(str)

    let str1 = array[arr - 1]
    if (num > str1 && num < str) {
        b.push(str1)
    }
    return b
}

console.log(bai26(5, [8, 1, 3, 2, 4, 6, 18]));


// bai27
function chuanhoa(chuoi) {
    let str = ''
    chuoi = chuoi.toLowerCase()

    for (i = 0; i < chuoi.length; i++) {
        if (i == 0 || chuoi[i - 1] == ' ') {
            str += chuoi[i].toUpperCase()
        } else {
            str += chuoi[i].toLowerCase()
        }
    }
    return str
}
// console.log(chuanhoa('qUang'));
function bai27(array) {

    let c = []
    var n = array.length;
    var b = [];
    for (let i = 0; i < n; i++) {
        array[i].firstName = chuanhoa(array[i].firstName);
        array[i].firstName = chuanhoa(array[i].firstName);
        if (array[i].firstName.search('a') > 0 || array[i].firstName.search('A') > 0) {
            if ((array[i].firstName).length >= 3) {
                c.push(array[i])
            }
        }
    }
    return c
}
console.log(bai27([
    {
        id: "T3HXX1",
        firstName: "qUAnG",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    }
    ,
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
]));
