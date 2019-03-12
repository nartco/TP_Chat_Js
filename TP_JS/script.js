
function historique(message)
{
    var historique = [];
    historique.push(message)
    if(historique == 12)
    {
        for (let i = 0; i < historique.length; i++) 
        {
            console.log(historique[i][2] + ': ' + historique[i][3]);
        }   
    }
}

function affichage(chatmessage, date_m, id_user, pseudo, message, index)
{
    if (chatmessage.length == 5)
    {
        
    }
   
    if (typeof id_user !== 'undefined')
        chatmessage.push([id_user, date_m, pseudo, message]);
    if (index == 'undefined')
    index = 0;    
    //chatmessage.reverse();
    for (let i = index; i < chatmessage.length; i++) 
    {
        console.log(chatmessage[i][2] + ': ' + chatmessage[i][3]);
    }  
    return;
}

function id(chatmessage, j)
{
    var id_user = (Math.random() * j);
    
    for (let i = 0; i < chatmessage.length; i++)
    {
        if (chatmessage[i][0] == id_user) 
        {
            return id(chatmessage, j++);
        }
    }
    return parseInt(id_user);

}

function messages(verif)
{
    var chatmessage = [[1, + new Date(), 'nartco', "Bonjour"], [2, + new Date(), 'juweby', "salout"]];
    var id_user = 0;
    if (verif == true)
    affichage(chatmessage);
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
        affichage(chatmessage,date_m, id_user, pseudo, message, (chatmessage.length - 1)); 
       // index++;
        return messages(chatmessage, false);
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