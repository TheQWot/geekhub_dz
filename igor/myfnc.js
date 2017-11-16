function registration(names)
{  var users = [];
    var dig=1;
    for (var i=0; i<arguments.length; i++)
    {
        if (users.indexOf(arguments[i])==-1)
        {
            users.push(arguments[i]);
        }
        else {
            dig=arguments[i];
            console.log(typeof dig);

            dig= dig.toString().replace(new RegExp('[A-z]','g'),'');
            console.log(dig);

        }
    }


}

function chat(s)
{
    var pos=0,nex=0;

    var arr=s.split('');
    var word='hello'

    pos=arr.indexOf(word[0]);
    console.log(pos);
    if (pos==-1) return false;
    console.log(arr);


}

chat('hlelo');
//console.log(registration('uu1','uu1'));