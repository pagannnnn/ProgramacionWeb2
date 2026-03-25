let alunno = {

    id : 987654321,
    nombre : "Carlos",
    apellidopat : "Ramirez",
    apellidomat : "Lopez",
    Edad : 22,
    titulado : false,
    egresado : {
        estado: false,
        semestrecursado: 5, 
        materiasDeber: "matematicas",
        turno: "vespertino",
        promedio:8.7
    },

    domicilio: { 
        calle : "Av. Siempre Viva",
        numeroext : "742",
        numeroint: "B12",
        codigoPostal: "01234",
        municipio: "Iztapalapa",
        estado: "Ciudad de Mexico",
        pais: "Mexico"
    },

    kinder:{
        nombre : "Pequeños Genios",
        actividadPrimerDia: function(){
            console.log("llorar");
        },
        actividadRecurrente : function(){
            console.log("Hacer del baño");
        },

        datosMiss: {
            Nombre: "Laura",
            Edad: 28

        }
        

    },
    primaria :{
        Nombre: "Escuela Primaria Benito Juarez",
    }
    
}