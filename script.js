var facturaj;
$.ajax({
    url: "https://raw.githubusercontent.com/aiken88/CSV/main/facturas2.csv",
	async : false,
    success: function(csv) {
        const output = Papa.parse(csv, {
          header: true, // Convert rows to Objects using headers as properties
		  dynamicTyping: true, // Deja los numero como numeros. 
        });
        if (output.data) {
          //console.log(output.data);
		  //console.log(output.data['nfactura']);
		  facturaj=output.data;
		  //console.log(JSON);
        } else {
          console.log(output.errors);
        }
    },
    error: function(jqXHR, textStatus, errorThrow){
        console.log(textStatus);
    }
});

const Edialuz =  new Array(); 
const mesluz = new Array();
const Ekwhluz =  new Array();
const PotEdluz =  new Array();
const kwhluz =  new Array();
const Ediagas =  new Array(); 
const mesgas = new Array();
const Ekwhgas =  new Array();
const PotEdgas =  new Array();
const kwhgas =  new Array();
const Ediaagua =  new Array();
const kwhagua =  new Array();
const mesagua = new Array();
const Ekwhagua =  new Array();
//------------------------LUZ-----------------------------
for (var i = 0; i < Object.keys(facturaj).length; i++){
	if (facturaj[i]['producto'] == 'luz'){
		//console.log(facturaj[i]['Etotal']);
		mesluz.push(facturaj[i]['enddate']);
		Edialuz.push(facturaj[i]['Etotal']/facturaj[i]['dias']);
		Ekwhluz.push(facturaj[i]['Ekwh']);
		PotEdluz.push(facturaj[i]['PotEd']);
		kwhluz.push(facturaj[i]['kwh']/facturaj[i]['dias']);
	}
//------------------------GAS-----------------------------		
	else if (facturaj[i]['producto'] == 'gas'){
		//console.log(facturaj[i]['kwh']);
		Ediagas.push(facturaj[i]['Etotal']/facturaj[i]['dias']);
		mesgas.push(facturaj[i]['enddate']);
		Ekwhgas.push(facturaj[i]['Ekwh']);
		PotEdgas.push(facturaj[i]['PotEd']);
		kwhgas.push(facturaj[i]['kwh']/facturaj[i]['dias']);
	}
//---------------------AGUA---------------------------------
	else if (facturaj[i]['producto'] == 'agua'){
		//console.log(facturaj[i]['kwh']);
		Ediaagua.push(facturaj[i]['Etotal']/facturaj[i]['dias']);
		mesagua.push(facturaj[i]['enddate']);
		kwhagua.push(facturaj[i]['kwh']);
		Ekwhagua.push(facturaj[i]['Ekwh']);
	}
	
}
//console.log(mesluz);

//Datos
// Las etiquetas son las que van en el eje X. 
//const etiquetasluz = mes;
// Podemos tener varios conjuntos de Edias. Comencemos con uno
const Ediasluzg = {
    label: "€/dia de Luz",
    data: Edialuz, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
const Ekwhluzg = {
    label: "€/kwh de Luz",
    data: Ekwhluz, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
const PotEdluzg = {
    label: "Pot*€/día Término fijo de Luz",
    data: PotEdluz, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
const kwhluzg = {
    label: "kwh/dia de Luz",
    data: kwhluz, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
const Ediasgasg = {
    label: "€/dia de Gas",
    data: Ediagas, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(162, 50, 52, 0.2)', // Color de fondo
    borderColor: 'rgba(162, 50, 52, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
const Ekwhgasg = {
    label: "€/kwh de Gas",
    data: Ekwhgas, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(162, 50, 52, 0.2)', // Color de fondo
    borderColor: 'rgba(162, 50, 52, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
const PotEdgasg = {
    label: "€/día Término fijo de Gas",
    data: PotEdgas, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(162, 50, 52, 0.2)', // Color de fondo
    borderColor: 'rgba(162, 50, 52, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
const kwhgasg = {
    label: "kwh/dia de Gas",
    data: kwhgas, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(162, 50, 52, 0.2)', // Color de fondo
    borderColor: 'rgba(162, 50, 52, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
const Ediasaguag = {
    label: "€/dia de agua",
    data: Ediaagua, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
const kwhaguag = {
    label: "m3 consumidos de agua",
    data: kwhagua, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
const Ekwhaguag = {
    label: "€/máximo m3 agua",
    data: Ekwhagua, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
//configuración del grafico
const Ediasluzc ={
    type: 'bar',
    data: {
        labels: mesluz,
        datasets: [
            Ediasluzg,
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
};
const Ekwhluzc ={
    type: 'bar',
    data: {
        labels: mesluz,
        datasets: [
            Ekwhluzg,
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
};
const PotEdluzc ={
    type: 'bar',
    data: {
        labels: mesluz,
        datasets: [
            PotEdluzg,
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
};
const kwhluzc ={
    type: 'bar',
    data: {
        labels: mesluz,
        datasets: [
            kwhluzg,
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
};
const Ediasgasc ={
    type: 'bar',
    data: {
        labels: mesgas,
        datasets: [
            Ediasgasg,
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
};
const Ekwhgasc ={
    type: 'bar',
    data: {
        labels: mesgas,
        datasets: [
            Ekwhgasg,
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
};
const PotEdgasc ={
    type: 'bar',
    data: {
        labels: mesgas,
        datasets: [
            PotEdgasg,
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
};
const kwhgasc ={
    type: 'bar',
    data: {
        labels: mesgas,
        datasets: [
            kwhgasg,
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
};
const Ediasaguac ={
    type: 'bar',
    data: {
        labels: mesagua,
        datasets: [
            Ediasaguag,
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
};
const kwhaguac ={
    type: 'bar',
    data: {
        labels: mesagua,
        datasets: [
            kwhaguag,
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
};
const Ekwhaguac ={
    type: 'bar',
    data: {
        labels: mesagua,
        datasets: [
            Ekwhaguag,
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
};
//Render
const grafica1 = new Chart(
    document.getElementById('grafica1'),
    Ediasluzc
);
const grafica2 = new Chart(
    document.getElementById('grafica2'),
    Ediasgasc
);
const grafica3 = new Chart(
    document.getElementById('grafica3'),
    Ekwhluzc
);
const grafica4 = new Chart(
    document.getElementById('grafica4'),
    Ekwhgasc
);
const grafica5 = new Chart(
    document.getElementById('grafica5'),
    PotEdluzc
);
const grafica6 = new Chart(
    document.getElementById('grafica6'),
    PotEdgasc
);
const grafica7 = new Chart(
    document.getElementById('grafica7'),
    kwhluzc
);
const grafica8 = new Chart(
    document.getElementById('grafica8'),
    kwhgasc
);
const grafica9 = new Chart(
    document.getElementById('grafica9'),
    Ediasaguac
);
const grafica10 = new Chart(
    document.getElementById('grafica10'),
    kwhaguac
);
const grafica11 = new Chart(
    document.getElementById('grafica11'),
    Ekwhaguac
);