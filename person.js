class Person{

    constructor(nombre, apellido, añoNacimiento, altura, peso, Aficiones){
        
        this.name = nombre;
        this.surname = apellido;
        this.birthOfYears = añoNacimiento;
        this.height = altura;
        this.weigth = peso;
        this.hobbies = Aficiones;
        
          }

IMC(){

    return  this.height * this.height / this.weigth
}  

Edad(){

    return 2022 - this.birthOfYears
}

printAll(){

    console.log("Nombre" + "-" + this.name, "Apellido" + "-" + this.surname,
    "Altura" + "-" + this.height, "Peso" + "-" + this.weigth);

  
}

prtintHobbies(){

console.log(this.hobbies);

}

}

module.exports = {
    
Person
}

