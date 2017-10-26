function getFactRec(argument)
{
    if (isNaN(argument)||+argument<0) return 0;
    if (argument===1) return argument;
     else {return argument*getFactRec(argument-1);}
}
function getFact(argument)
{
    let val=1;
    if (isNaN(argument)||+argument<0) return 0;
    for ( let i=1; i<=argument; i++) { val*=i; }
    return val;
}
function getPowRec(argument,pow)
{
    if (isNaN(argument)||isNaN(pow)||(+argument===0)) return 0;
    if (+argument===1) return 1;
    if (+pow===0) return 1;
    if (+pow===1) return argument;
     else
         if (+pow>0) {return argument*getPowRec(argument,pow-1)}
          else {return 1/(argument*getPowRec(argument,-pow-1))}
}
function  getPow(argument,pow)
{
    let res=1;
    if (isNaN(argument)||isNaN(pow)||(+argument===0)) return 0;
    if (+argument===1) return 1;
    if (+pow===0) return 1;
    if (+pow===1) return argument;
    if (pow>0){
    for (let i=1; i<=pow ;i++)
              {
                res*=argument;
              }
              }
    else {

        for (let i = 1; i <= -pow; i++) {
            res*=argument;
        }
        res=1/res;
         }

 return res;
}
////нагло пользуемся тем что строка это тоже массив
//// и да можно было это решить математически делением на 10 - но в инете есть решения и это скучно

function digSum(argument)
{

    let res=0;
    if (isNaN(argument)) return res;
    for (let i = 0; argument.length > i; i++)
    {
        res += +argument[i];
    }
    return res;

}
function digSumRec(argument)
{ let res=0;
    if (isNaN(argument)) return 0;
    res=+argument.toString()[0];
     if (argument.toString().length==1) return res;
     else return res+=digSumRec(argument.toString().slice(0,-1));
}
var res='';

console.time('10k repeats');
for (let i=0; i<10000; i++)
{
    res=getFactRec(3);
}
console.log('Факториал числа 3 рекурсия:',res);
console.timeEnd('10k repeats');
console.time('10k repeats');
for (let i=0; i<10000; i++)
{
    res = getFact(3);
}
console.log('Факториал числа 3 :',res);
console.timeEnd('10k repeats');

console.time('10k repeats');
for (let i=0; i<10000; i++)
{
    res =getFactRec(-87);
}
console.log('Факториал числа -87  рекурсия:',res);
console.timeEnd('10k repeats');

console.time('10k repeats');
for (let i=0; i<10000; i++)
{
    res = getFact(-87);
}
console.log('Факториал числа -87 :',res);
console.timeEnd('10k repeats');

////а тут всё равно не считает то и 10к прогонов не делаем
console.log('Факториал не числа ава рекурсия :',getFactRec('ава'));
console.log('Факториал не числа ава :',getFact('ава'));


console.time('10k repeats');
for (let i=0; i<10000; i++)
{
    res = getPowRec(2,3);
}
console.log('Возведение в степень 2 с рекурсией :',res);
console.timeEnd('10k repeats');

console.time('10k repeats');
for (let i=0; i<10000; i++)
{
    res = getPowRec(2,-2);
}
console.log('Возведение в степень -2 с рекурсией :',res);
console.timeEnd('10k repeats');
console.time('10k repeats');
for (let i=0; i<10000; i++)
{
    res = getPow(2,3);
}
console.log('Возведение в степень 2 :',res);
console.timeEnd('10k repeats');

console.time('10k repeats');
for (let i=0; i<10000; i++)
{
    res = getPow(2,-2);
}
console.log('Возведение в степень -2 :',res);
console.timeEnd('10k repeats');

console.time('10k repeats');
for (let i=0; i<10000; i++)
{
    res=digSum('111111');
}
console.log('Нерекурсивная сумма цифр числа 111111:',res);
console.timeEnd('10k repeats');

console.time('10k repeats');
for (let i=0; i<10000; i++)
{
res=digSumRec('111111');
}
console.log('Нерекурсивная сумма цифр числа 111111:',res);
console.timeEnd('10k repeats');



console.log('Задача про воду и горы');
var arr =  [2,1,5,0,3,4,7,2,3,1,0];
function getWaterVol(arr) {
    let max = Math.max.apply(null, arr);
    let water = 0;
    for (let y = 1; y <= max; y++)
    {
        let outhole = false;
        let hole = 0;

        for (let x = 0; x < arr.length; x++) 
        {
            if (arr[x] >= y)
            {
                if (outhole)
                {
                    outhole = false;
                    water += hole;
                    x--;
                } else {
                        outhole = true;
                        hole = 0;
                        }
            } 
            else {
                   hole++;
                 }
        }

    }

    return water;
}

console.log('Насобиралось воды: ',getWaterVol(arr),' декалитров.');