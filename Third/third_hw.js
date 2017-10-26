var myMethod;
myMethod = {
    Push: function (addval) {
        this[this.length] = addval;
    },
    Pop: function () {
        let val = this[this.length];
        this.length = this.length - 1;
        return val;
    },
    //ну или вариант сразу дефолты запихать Slice: function (sBeg=0,sEnd=0)
    //но беда если передадим в качестве позиции букву, сломается оно
    // так что некоменченый вариант мне нравится больше
    Slice: function (sBeg, sEnd) {
        let newArr = [];
        let newInd = 0;
        if (isNaN(sBeg)) sBeg = 0;
        if (isNaN(sEnd)) sEnd = this.length;
        for (let i = sBeg; i < sEnd; i++) {
            newArr[newInd] = this[i];
            newInd++;
        }
        return newArr;
    },
    Join: function (mySep = ',') {
        let newStr = '';
        for (let i = 0; i < this.length; i++) {
            if (i == this.length - 1) newStr += this[i];
            else newStr += this[i] + mySep;
        }
        return newStr;
    },
    Reverse: function () {
        let newArr = [];
        let b = 0;
        for (let i = this.length - 1; i >= 0; i--) {
            newArr[b] = this[i];
            b++;
        }
        for (b = 0; b < newArr.length; b++) {
            this[b] = newArr[b];
        }
        return this;
    },
    sum: function (addVal) {
        if (isNaN(addVal)) addVal = 0;
        return this + addVal;
    }
};


var a=['a', 'b', 'c', 4, 5, 6];
console.log('Оригинальный массив');
console.log(a);

console.log('Вызываем методы в контексте массива');
console.log('Тестируем наш Push');
myMethod.Push.call(a,9);
console.log(a);
console.log('Тестируем наш Pop');
myMethod.Pop.call(a);
console.log(a);
console.log('Тестируем наш Slice');
console.log('Slice только с 1 параметром '+myMethod.Slice.call(a,2));
console.log('Slice только с 2 параметрами '+myMethod.Slice.call(a,1,2));
console.log('Slice только с 1 кривым и 2 параметрами '+myMethod.Slice.call(a,'h',2));
console.log('Тестируем наш Join c &-как разделитель '+myMethod.Join.call(a,'&'));
console.log('Тестируем наш Join c \\n -как разделитель \n'+myMethod.Join.call(a,'\n'));
console.log('Проверка реверса',myMethod.Reverse.call(a));


//никогда не повторяйте в реальности если не хотите огрести
//лучше расширить своими методами
//а лучше не трогайте базовые вещи, иначе вычислят по "ИП"
//балуйтесь в своих наследниках от базовых
console.log('Переопределяем методы массива');
Array.prototype.pop=myMethod.Pop;
Array.prototype.push=myMethod.Push;
Array.prototype.slice=myMethod.Slice;
Array.prototype.join=myMethod.Join;
console.log('Тестируем наш Push');
a.push(10);
console.log(a);
console.log('Тестируем наш Pop');
a.pop();
console.log(a);
console.log('Тестируем наш Slice',a.slice(a.length/2));
console.log('А вот и Reverce  ',a.reverse());
console.log('Ну и Join',a.join('*'));
//Задача 4
// Мучаем numeric
Number.prototype.sum=myMethod.sum;
var x=5;
console.log('Тестируем сумму у нашего намбера ',x.sum(5));

