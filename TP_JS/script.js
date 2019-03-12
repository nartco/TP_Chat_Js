
function historique(message)
{
    
}
function affichage(chatmessage, id_user, pseudo, message)
{
    if (chatmessage.length == 4)
    {
        
    }
    chatmessage.push([id_user, pseudo, message]);

    for (let i = 0; i < chatmessage.length; i++) 
    {
        console.log(chatmessage[i][1]);
        console.log(chatmessage[i][2]);
    }  
    return;
}

function id(chatmessage, j)
{
    var id_user = (Math.random() * j);
    
    for (let i = 0; i < chatmessage.length; i++) {
        if (chatmessage[i][0] == id) 
        {
            id(chatmessage, j++);
            return;
        }
    }
    return parseInt(id);

}

function messages()
{
    var chatmessage = [];
    var id_user = 0;
    var pseudo = prompt('veuillez saisir votre pseudo');
    var message = prompt('veuillez saisir votre message');
    var date_m;

    //console.log(pseudo);
    if((pseudo != 'undefined' || pseudo != 'null') && !(pseudo.trim() == ""))
    {
        if((message != 'undefined' ||  message != 'null') && !(message.trim() == ""))
        {
        date_m = + new Date();
        id_user = parseInt(id(chatmessage, 1));
        affichage(chatmessage, id_user, pseudo, message); 
       // return messages();
        }
        else
        {
            alert('vous devez saisir un message !');
            return;
        }
    }
    else
    {
        alert('vous devez saisir un pseudo !');
        return;
    }
    
}
messages();