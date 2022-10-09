let user = {
    nombre:"Daniel",
    apellido: "Cordero",
    invitado: false
};

let nombre="";
let apellido="";

function bienvenida(user){

    nombre=user["nombre"];
    apellido=user["apellido"];

    if(user["invitado"]===true&&user["nombre"]!==""&&user["apellido"]!==""){
        return "bienvenido " + nombre + " " + apellido;
    } else if (user["invitado"]===true&&user["nombre"]!==""){
        return "bienvenido " + nombre;
    }else if (user["invitado"]===true&&user["apellido"]!==""){
        return "bienvenido " + apellido;
    }else{
        return "no fuiste invitado"
    }
};

console.log(bienvenida(user));