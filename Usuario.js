//Jesus Daniel Gutierrez Aguirre

class Usuario{
    constructor(nombres,apellidos,noControl,semestre,promedio){
        this.nombres=nombres;
        this.apellidos=apellidos;
        this.noControl=noControl;
        this.semestre=semestre;
        this.promedio=promedio;


   }
}

var obj1 = new Usuario('Jesus Daniel','Gutierrez Aguirre','17400987',
'9no Semestre','80');

console.log("El usuario ingresado es: "+obj1.nombres+" sus apellidos son: "+
obj1.apellidos+' Su numero de control es: '+obj1.noControl+" Su semestre es: "+
obj1.semestre+' Su promedio es de: '+obj1.promedio);