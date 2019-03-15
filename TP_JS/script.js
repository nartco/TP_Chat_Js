
function historiques(message, historique)
{
    historique.unshift(message)
    //console.log(historique);
    return historique;
}

function affichage(chatmessage, date_m, id_user, pseudo, message, index)
{
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
    return id_user;

}

function messages()
{
    var chatmessage = [
        {
            "id": 1, 
            "date": + new Date(),
            "pseudo": 'nartco',
            "message": 'Bonjour'
        },

        {
            "id": 2,
            "date": + new Date(),
            "pseudo": 'juweby',
            "message": "salout"
        }
    ];

    var id_user = 0;
    //if (verif == true)
    //affichage(chatmessage);
    
    var date_m;
    var historique = [];
    var i = 0;

    //console.log(pseudo);
    while (i < 11)
    {
        i++;
        var pseudo = prompt('veuillez saisir votre pseudo');
        var message = prompt('veuillez saisir votre message');
        if((pseudo != 'undefined' || pseudo != 'null') && !(pseudo.trim() == ""))
        {
            if((message != 'undefined' ||  message != 'null') && !(message.trim() == ""))
            {
                date_m = + new Date();
                id_user = id(chatmessage, 1);
                if(chatmessage.length < 5)
                {
                    chatmessage.unshift({
                            "id": id_user, 
                            "date": date_m, 
                            "pseudo": pseudo, 
                            "message": message
                        });
                    //affichage(chatmessage,date_m, id_user, pseudo, message, (chatmessage.length - 1)); 
                    // index++;
                    //console.log(chatmessage);
                    //return messages(chatmessage);
                }
                else
                {
                    chatmessage.unshift({
                        "id": id_user, 
                        "date": date_m, 
                        "pseudo": pseudo, 
                        "message": message
                    });
                    var remove = chatmessage.pop()
                    historique = historiques(remove, historique);
                    if(historique.length == 8)
                    {
                        chatmessage.splice(3);
                        for (let x = 0; x < chatmessage.length; x++)
                            console.log(chatmessage[x]);
                        
                        for (let z = 0; z < historique.length; z++)
                            console.log(historique[z]);

                    }

                }
                
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
    if (chatmessage.length == 12)
    {

    }
    
    
}


messages();
//
