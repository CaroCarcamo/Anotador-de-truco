$(document).ready( function() {
			$('#btnInicio').on('click', fnPasarA2);
			$('#btnFin').on('click', fnPasarA1);
			$('#btn24').on('click', function() {fnPartidaA(24)});
			$('#btn30').on('click', function() {fnPartidaA(30)});
			$('#sumar1').on('click', function() {fnSumar(1)});
			$('#sumar2').on('click', function() {fnSumar(2)});
			$('#restar1').on('click', function() {fnRestar(1)});
			$('#restar2').on('click', function() {fnRestar(2)});

			var puntosEq1 = 0; puntosEq2 = 0; puntajeMax = 0; puntajeMin = 0;

			function fnPasarA1() {
				$('#pantalla2').removeClass('visible').addClass('oculto');
				$('#pantalla1').removeClass('oculto').addClass('visible');
				puntosEq1 = 0;
				puntosEq2 = 0;
				puntajeMax = 0;
				$('#puntaje1').text(puntosEq1);
				$('#puntaje2').text(puntosEq2);
				for (i = 1; i <= 12; i++) {
					$('#img' + i).attr('src', 'imagenes/0.png');
				}
			}

			function fnPasarA2() {
				$('#pantalla1').removeClass('visible').addClass('oculto');
				$('#pantalla2').removeClass('oculto').addClass('visible');
				$('#nombreEq1').text($('#equipo1').val());
				$('#nombreEq2').text($('#equipo2').val());
				puntosEq1 = 0;
				puntosEq2 = 0;
				$('#puntaje1').text(puntosEq1);
				$('#puntaje2').text(puntosEq2);
			}

			function fnPartidaA(pMax) {
				if (pMax == 24) {
					$('#puntos').text("a 24");
					puntajeMax += 24;
					window.puntajeMax = puntajeMax;
				} else if (pMax == 30) {
					$('#puntos').text("a 30");
					puntajeMax += 30;
					window.puntajeMax = puntajeMax;
				}
			}

			function fnSumar(equipo) {
				if (equipo == 1 && puntosEq1 < puntajeMax) {
					puntosEq1++;
					$('#puntaje1').text(puntosEq1);
					fnFosforos(1);
					if (puntosEq1 == puntajeMax) {
						ne1 = $('#equipo1').val()
						alert("Felicidades! Ganador: " + ne1);
						fnPasarA1();
					}	
				} else if (equipo == 2 && puntosEq2 < puntajeMax) {
					puntosEq2++;
					$('#puntaje2').text(puntosEq2);
					fnFosforos(2);	
					if (puntosEq2 == puntajeMax) {
						ne2 = $('#equipo2').val()
						alert("Felicidades! Ganador: " + ne2);
						fnPasarA1();
					}
				}
			}

			function fnRestar(Equipo) {
				if (Equipo == 1 && puntosEq1 > 0) {
					puntosEq1--;
					$('#puntaje1').text(puntosEq1);
					fnFosforos(1);
				} else if (Equipo == 2 && puntosEq2 > 0) {
					puntosEq2--;
					$('#puntaje2').text(puntosEq2);
					fnFosforos(2);
				}
			}

			function fnFosforos(eq) {
				var puntosPorDibujar = 0; puntos = 0; valorInicial = 0; valorFinal = 0;
				if (eq == 1) {
					puntos = puntosEq1;
					valorInicial = 1;
					valorFinal = 6;
				} else if (eq == 2) {
					puntos = puntosEq2;
					valorInicial = 7;
					valorFinal = 12;
				}

				for (i = valorInicial; i <= valorFinal; i++) {
					if (puntajeMax == 24 && (i == 3 || i == 9) && puntosPorDibujar >= 2) {
						$('#img' + i).attr('src', 'imagenes/2.png');
						puntosPorDibujar -= 2;
					} else {
							if (puntos > 5) {
								$('#img' + i).attr('src', 'imagenes/5.png');
								puntosPorDibujar = puntos - 5;
							} else {
								$('#img' + i).attr('src', 'imagenes/' + puntos + '.png');
							}

							for (j = valorInicial + 1; j <= valorFinal; j++) {
								if (puntosPorDibujar > 5) {
									$('#img' + j).attr('src', 'imagenes/5.png');
									puntosPorDibujar -= 5;
								} else {
									$('#img' + j).attr('src', 'imagenes/' + puntosPorDibujar + '.png');
									puntosPorDibujar = 0;
								}
							}
						}
				}
			}
		
		});