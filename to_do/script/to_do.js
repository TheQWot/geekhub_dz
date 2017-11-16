var b;
function formatDate(date)
{
    var day=date.getDate();
    var month=date.getMonth()+1;
    var year=date.getFullYear();
    var hour = date.getHours();
    var minutes=date.getMinutes();
    if (+day<10) {day='0'+day};
    if (+month<10) {month='0'+month};
    return day+'.'+month+'.'+year+' '+hour+':'+minutes;

}

function remElem(elemen)
{

    var par=elemen.parentNode;
        b[par.id]='/';
        par.parentNode.removeChild(par);

}

function editElem(elemen)
{
    var par=elemen.parentNode;
    var newval=prompt('Изменить пункт', b[par.id]);
    b[par.id]=newval;
    save_list();
    add_list(b);

}
function add_list(list)
{
    var todo,elem;
    document.getElementById('to_do').innerHTML='';
    for (var i=0; i<list.length; i++)
    {
        todo=document.createElement('li');
        elem=document.getElementById('to_do');
        todo.innerHTML=list[i];
        todo.id=i.toString();
        elem.appendChild(todo);

        var edit_btn=document.createElement('button');
        edit_btn.innerText='Edit';
        todo.appendChild(edit_btn);
        edit_btn.onclick= function ()
        {
          editElem(this);
        }
        var btn_del=document.createElement('button');
        btn_del.innerText='Del';
        todo.appendChild(btn_del);
        btn_del.onclick= function() { remElem(this)};


    }

}

function save_list()
{
    var a=[];
    for (var i=0; i<b.length; i++)  if (b[i]!=='/') a.push(b[i])
    localStorage.setItem('arr',a.join('|'));
}

var add_btn=document.createElement('button');
var save_btn=document.createElement('button');
var ed=document.createElement('input');
save_btn.innerText='Save';
save_btn.onclick= save_list;

var rever=document.createElement('button');
rever.innerText='Reverse';
rever.onclick= function ()
{
 b.reverse();
 save_list();

 add_list(b);

}

b=localStorage.getItem('arr').split('|');
add_btn.innerText='Add!';
add_btn.onclick=function ()
{
    if (!ed.value) return;
    var todo,elem;
    todo=document.createElement('li');
    elem=document.getElementById('to_do');
    b.push(formatDate(new Date())+': '+ed.value);
    todo.innerHTML=b[b.length-1];
    todo.id=(b.length-1).toString();
    elem.appendChild(todo);
    var btn_del=document.createElement('button');
    btn_del.innerText='Del';
    todo.appendChild(btn_del);
    btn_del.onclick= function() { remElem(this)};
    ed.value='';
    save_list();
}


document.getElementById('content').appendChild(ed);
document.getElementById('content').appendChild(add_btn);
document.getElementById('content').appendChild(save_btn);
document.getElementById('content').appendChild(rever);

if (b[0]!=='') add_list(b);
