function calcularProbabilidadOcupado() {
    diaSeleccionado = document.getElementById('dia').value;
    horaTexto = document.getElementById('hora-nativa').value;
    if (!horaTexto) return 0;
    [horas, minutos] = horaTexto.split(':').map(Number);
    hora = horas + (minutos / 60);

    maxPorDia = {
        'lunes': 0.86,
        'martes': 0.87,
        'miercoles': 0.68,
        'jueves': 0.90,
        'viernes': 0.85
    };

    probabilidad = maxPorDia[diaSeleccionado] || 0;
    let factorHorario = 0;

    if (hora < 8) {
        factorHorario = Math.max(0, (hora - 6) / 2); 
    } else if (hora >= 8 && hora <= 19) {
        progresoDia = (hora - 8) / (19 - 8);
        factorHorario = 1 - (progresoDia * 0.9); 
    } else {
        factorHorario = 0.1;
    }
    return probabilidad * factorHorario;
}

function actualizarContadores() {
    botones = document.querySelectorAll('.espacios button');
    total = 180;
    let ocupados = 0;

    botones.forEach(function(boton) {
        if (boton.style.backgroundColor === 'rgb(238, 93, 120)') {
            ocupados++;
        }
    });

    disponibles = total - ocupados;
    porcentaje = total > 0 ? ((ocupados / total) * 100).toFixed(1) : 0;
    document.getElementById('texto1').textContent = "# de espacios: [" + total + "]  Espacios ocupados: [" + ocupados + "]";
    document.getElementById('texto2').textContent = "Espacios disponibles: [" + disponibles + "] % de ocupación: [" + porcentaje + "%]";

}

function generaraleatorio() {
    botones = document.querySelectorAll('.espacios button');
    probabilidadOcupado = calcularProbabilidadOcupado();
    
    botones.forEach(function(boton) {
        if (Math.random() < probabilidadOcupado) {
            boton.style.backgroundColor = '#ee5d78';
        } else {
            boton.style.backgroundColor = '#4eff8f';
        }
        boton.onclick = function() {
            if (this.style.backgroundColor == 'rgb(78, 255, 143)') {
                this.style.backgroundColor = '#ee5d78';
                actualizarContadores();
            } else {
                this.style.backgroundColor = '#4eff8f';
                actualizarContadores();
            }
        };
    });
    actualizarContadores();
}

document.getElementById('dia').addEventListener('change', generaraleatorio);
document.getElementById('hora-nativa').addEventListener('change', generaraleatorio);

generaraleatorio();

