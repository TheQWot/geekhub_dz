//создали массив
var a_mas=['1','2','3','4','5','9','7','15'];
//для цикла
var i;
//сортировки для
function compareNumeric(a, b) {
    if (+a > +b) return 1;
    if (+a < +b) return -1;
}
//просто вывели элементы
console.log('Просто вывели элементы');
for (i=0; i<a_mas.length;i++)
{
    console.log(a_mas[i]);
};
//Добавили элемент в конец
console.log('Добавили элемент в конец');
console.log(a_mas.push('21'));
//убрали
console.log('Убрали элемент из конца массива');
console.log(a_mas.pop());

//А теперь добавим/удалим со старта
console.log('Добавили элемент в начало');
console.log(a_mas.unshift('0'));

console.log('Удалили перевый элемент');
console.log(a_mas.shift());

//сортируем - но как текст
console.log('сортируем - но как текст');
console.log(a_mas.sort());
//сортируем с помощью функции
console.log('сортируем с помощью функции (с переводом в нумерик)');
console.log(a_mas.sort(compareNumeric));
//обратная сортировка
console.log('обратная сортировка');
console.log(a_mas.reverse());
console.log('Тестируем concat');
var b_mas=a_mas.concat('8','6');
console.log(b_mas);

//строка для загона в массив
var str='мама,мыла,раму,рама,ругался,брыкался,но,мама,была,сильнее';
//разделили строку по разделителю в массив
var txt_mas=str.split(',');
//и вывели
console.log('Строка до ');
console.log(str);
console.log('Массив после split');
console.log(txt_mas);
txt_mas.splice(3,0,'но','рама','грязнуля','и','поэтому');
console.log('Ну и после вставки');
console.log(txt_mas);
//и снова слепили но с пробелом
console.log(txt_mas.join(' '));
//выводим полмассива
console.log(txt_mas.slice(txt_mas.length/2));
//первое вхождение
console.log('первое вхождение элемента');
console.log(txt_mas.indexOf('мама'));
//последнее
console.log('последнее вхождение элемента');
console.log(txt_mas.lastIndexOf('мама'));

//перебор
console.log('Перебираем весь массив при помощи forEach (переводим в верхний регистр)');
txt_mas.forEach(function (item, i, txt_mas) {
    txt_mas[i]=txt_mas[i].toUpperCase();
});
console.log(txt_mas);
console.log('Фильтруем массив - выбираем всё больше 5');
var c_mas=b_mas.filter(function(elem){return +elem>5});
console.log(c_mas);

console.log('Тестируем трансформацию при помощи map');
var z_mas=a_mas.map(function (val) { return val=--val; });
console.log(z_mas);
function my_fnc(element, index, array) {
    if (element.length>=6) {return true};

}
//Работает только начиная с 6 спецификации!
console.log('Находим первый элемент с длинной больше 6 ')

console.log(txt_mas.find(my_fnc));