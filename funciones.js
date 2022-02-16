document.addEventListener("DOMContentLoaded", function(){
    //imagenes
    let imagenes = [
        {   img:"images/arceus.jpg",
            name:"arceus"
        },
        {   img:"images/bulbasaur.jpg",
            name:"bulbasaur"
        },
        {   img:"images/charmander.jpg",
            name:"charmander"
        },
        {   img:"images/pikachu.jpg",
            name:"pikachu"
        },
        {   img:"images/serperior.jpg",
            name:"serperior"
        },
        {   img:"images/squirtle.jpg",
            name:"squirtle"
        },
        {   img:"images/arceus.jpg",
            name:"arceus"
        },
        {   img:"images/bulbasaur.jpg",
            name:"bulbasaur"
        },
        {   img:"images/charmander.jpg",
            name:"charmander"
        },
        {   img:"images/pikachu.jpg",
            name:"pikachu"
        },
        {   img:"images/serperior.jpg",
            name:"serperior"
        },
        {   img:"images/squirtle.jpg",
            name:"squirtle"
        }        
    ]

    //tablero html
    let tablero = document.querySelector(".tablero");
    
    //funcion para colocar las imagenes en el html
    function crearTablero(){
        for(let i=0; i<imagenes.length; i++){
            var img = document.createElement("img");
            img.setAttribute("data-id",i);
            img.setAttribute("src","images/oculta.jpg");
            img.setAttribute("width","200px");
            tablero.appendChild(img);
        }
    }
    crearTablero();
});