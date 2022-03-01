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

    // arreglo para guardar el nombre y id de las imagenes a descubrir
    let imgelegida = [];
    let imgelegidaid = [];

    // arreglos para contar aciertos
    let aciertos = document.querySelector(".conteo");
    let conteo = [];

    // funcion flwecha orden aleatorio imagenes
    imagenes.sort(()=>0.5 - Math.random());

    //funcion para colocar las imagenes que ocultan las cartas en el html
    function crearTablero(){
        for(let i=0; i<imagenes.length; i++){
            var img = document.createElement("img");
            img.setAttribute("data-id",i);
            img.setAttribute("src","images/oculta.jpg");
            img.setAttribute("width","200px");
            tablero.appendChild(img);
            img.addEventListener("click",descrubrirImagen);
        }
    }

    // funcion para descubrir imagen
    function descrubrirImagen(){
        let imgclick = this.getAttribute("data-id");
        imgelegida.push(imagenes[imgclick].name);
        imgelegidaid.push(imgclick);
        this.setAttribute("src",imagenes[imgclick].img);   
        this.setAttribute("class","seleccionado")             
        if(imgelegida.length === 2){
            setTimeout(compararImagenes,300);
        }        
    }

    // funcion para comparar imagenes
    function compararImagenes(){
        // en esta variable se guardaran todas las imagenes
        let todaslasimg = document.querySelectorAll("img");
        let opcion1 = imgelegidaid[0];
        let opcion2 = imgelegidaid[1];
        if(imgelegida[0] === imgelegida[1]){
            alert("Has atrapado a un "+imgelegida[0]);
            todaslasimg[opcion1].setAttribute("src","images/pokebola.jpg");
            todaslasimg[opcion1].setAttribute("class","pokebola");                                    
            todaslasimg[opcion2].setAttribute("src","images/pokebola.jpg");
            todaslasimg[opcion2].setAttribute("class","pokebola");  
            conteo.push(imgelegida);
        }
        else{
            alert("El Pókemon salvaje ha escapado");            
            todaslasimg[opcion1].setAttribute("src","images/oculta.jpg");
            todaslasimg[opcion2].setAttribute("src","images/oculta.jpg");            
            todaslasimg[opcion1].setAttribute("class","noseleccionado");
            todaslasimg[opcion2].setAttribute("class","noseleccionado");            
        }
        imgelegida = [];
        imgelegidaid = [];
        aciertos.textContent = conteo.length;

        if(conteo.length === 6){
            aciertos.textContent = "Has atrapado a todos los Pókemon salvaje";
            alert("Has atrapado a todos los Pókemon salvaje")
            location.reload(true);
        }
    }

    // ejecucion de la funcion
    crearTablero();
});