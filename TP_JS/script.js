
function historiques(message, historique)
{
    historique.unshift(message)

    return historique;
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
    var date_m;
    var historique = [];
    var i = 0;

    while (i < 10)
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
    if(historique.length == 7)
    {
        for (let x = 0; x < chatmessage.length; x++)
        {
            var text = document.createElement('p');
            var content = document.createTextNode(chatmessage[x].pseudo + " " + chatmessage[x].message);
            text.appendChild(content);
            document.querySelector('div').appendChild(text);
        }
            
        
        for (let z = 0; z < historique.length; z++)
        {
            var text = document.createElement('p');
            var content = document.createTextNode(historique[z].pseudo + " " + historique[z].message);
            text.appendChild(content);
            document.querySelector('div').appendChild(text);
        }
            

    }   
    
}

messages();
