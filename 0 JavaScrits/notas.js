
   var estudiantes = [
    { nombre: "Mengano", apellido: "Solis", check1: 16, check2: 8},
    { nombre: "Fulano", apellido: "Rodriguez", check1: 20, check2: 20},
    { nombre: "Zutano", apellido: "Alvarez", check1: 10, check2: 0},
    { nombre: "Perengano", apellido: "Leiria", check1: 17, check2: 19}];

function obtenerSoloLosMejores(estudiantes, nota1, nota2) {
    mejores=[]
    estudiantes.forEach ((estudiantes,i,arr) => {

        if(arr[i].check1>= nota1 && arr[i].check2>=nota2)
        {
          mejores.push(`${arr[i].nombre} ${arr[i].apellido}`)
         }
        });
        console.log(mejores);
  }
  

obtenerSoloLosMejores(estudiantes,15,15);
