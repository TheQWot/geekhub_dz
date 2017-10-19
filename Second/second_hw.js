console.log('Задача про треугольник');
console.log('Сначала самый простой и читабельный вариант со счётчиком и заранее объявленой переменной');
var str='';
 for (i=0;i<7;i++)
 {
 str+='#';
 console.log(str);
 }
console.log('Менее очевидный вариант с заранее объявленой строкой и её длинной');
var str ='#';
for (;str.length<8;str+='#') console.log(str);
console.log('Самый неочевидный вариант, он работает, но я бы автора порицал')
for (var str = "#"; str.length < 8; str += "#")
    console.log(str);

console.log('Задача про целочисленное деление');
var mes ='';
for (i=1;i<=100;i++)
{
  mes='';
  if (i%3==0) mes+='Fizz';
  if (i%5==0)  mes+='Buzz';
  console.log(i+' '+mes);
}
console.log('Задача про доску');
var size = 9;

var chessboard = '';

for (var i = 0; i < size; i++)
{
    for (var n = 0; n < size; n++)
    {
        if ((n + i) % 2 == 0)
            chessboard += ' ' ;
        else
            chessboard += '#';
    }
    chessboard += '\n';
}
console.log(chessboard);
console.log('Задача про сравнение чисел');
function min(a,b)
{ if (+a>+b) return b
    else return a;
}
console.log('min(7,9)');
console.log(min(7,9));
console.log('min(0,-10)');
console.log(min(0,-10));

console.log('Рекурсия (проверка на чётность)');
function isEven(num)
{
 if (num<0) num= -num;
    switch (num) {
        case 0:
            return true;
        case 1:
            return false;
        default:
            return isEven(num - 2);
    }
}
console.log('0 '+isEven(0));
console.log('-2 '+isEven(-2));
console.log('50 '+isEven(50));
console.log('75 '+isEven(75));

console.log('Задача про буквы');
function countSimbol(a,b)
{
var SimbolCount=0;
    for (var i=0;i<a.length;++i)
    {
        if (a.charAt(i)==b) SimbolCount+=1;

    }
 return SimbolCount;
}
var myString='bbbaabb';
console.log('Считаем к-во символов b в строке '+myString);
console.log(countSimbol(myString,'b'));

//// захотелось побаловаться 8) - и мне кажется что это будет быстрее перебора по символам
function mySimbolCount(a,b)
{
    var s=a.replace(new RegExp(b,'g'),'');
    return a.length-s.length;
}
console.log(myString,'a');
console.log(mySimbolCount(myString,'a'));

console.log(myString,'b');
console.log(mySimbolCount(myString,'b'));
console.log(myString,'B');
console.log(mySimbolCount(myString,'B'));