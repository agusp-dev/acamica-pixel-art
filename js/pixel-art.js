var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorSeleccionado = null;

//Variable para determinar cuando el mouse esta presionado
var mousePresionado = false;

//Variable para determinar si el dibujo todavia no se guardo
var necesitaGuardar = false;

jQuery(document).ready(function(){
  crearPaletaColores();
  crearGrillaPixeles();
  crearEventos();
});

function crearPaletaColores() {
  if (nombreColores != null && nombreColores.length > 0) {
    var paleta = document.getElementById('paleta');
    var colorDiv;
    for (var i = 0; i < nombreColores.length; i++) {
      colorDiv = document.createElement('div');
      colorDiv.style.backgroundColor = nombreColores[i];
      colorDiv.className = 'color-paleta';
      paleta.appendChild(colorDiv);
    }
  }
}

function crearGrillaPixeles() {
  var grillaPixeles = document.getElementById('grilla-pixeles');
  for (var p = 0; p < 1750; p++) {
    var pixel = document.createElement('div');
    grillaPixeles.appendChild(pixel);
  }
}

function crearEventos() {
  var colorPersonalizado = document.getElementById('color-personalizado');
  colorPersonalizado.addEventListener('change', function() {
    seleccionarColor(colorPersonalizado.value);
  });

  /**
   * Click en color de la paleta
   */
  $('#paleta div').click(function() {
    seleccionarColor(this.style.backgroundColor);
  });

  /**
   * Click sobre pixel de la grilla
   */
  $('#grilla-pixeles div').click(function() {
    pintarPixel(this);
  });

  /**
   * Hover sobre grilla
   */
  $('#grilla-pixeles div').hover(function() {
    if (mousePresionado) {
      pintarPixel(this);
    }
  });

  /**
   * Mouse presionado sobre grilla
   */
  $('#grilla-pixeles').mousedown(function() {
    presionarMouse(true);
  });

  $('#grilla-pixeles').mouseup(function() {
    presionarMouse(false);
  });

  /**
   * Botones
   */
  $('#guardar').click(function() {
    guardarDibujo();
  });

  $('#borrar').click(function() {
    borrarPixelArt(1000);
  });

  /**
   * Imagenes
   */
  $('#batman').click(function() {
    mostrarSuperheroe(batman);
  });

  $('#wonder').click(function() {
    mostrarSuperheroe(wonder);
  });

  $('#flash').click(function() {
    mostrarSuperheroe(flash);
  });

  $('#invisible').click(function() {
    mostrarSuperheroe(invisible);
  });
}

function seleccionarColor(color) {
  $('#indicador-de-color').css('background-color', color);
  $('#indicador-de-color-mensaje').text(color);
  colorSeleccionado = color;
}

function pintarPixel(pixel) {
  if (colorSeleccionado != null) {
    pixel.style.backgroundColor = colorSeleccionado;
    necesitaGuardar = true;
  }
}

function presionarMouse(presionado) {
  mousePresionado = presionado;
}

function borrarPixelArt(duration) {
  $('#grilla-pixeles div').animate({'background-color':'white'}, duration);
  necesitaGuardar = false;
}

function mostrarSuperheroe(superheroe) {
  //Se verifica si hay un dibujo sin guardar
  if (necesitaGuardar) {
    var guardar = confirm('Querés guardar tu dibujo antes de empezar otro?');
    if (guardar) {
      guardarDibujo();
    }
  }
  cargarSuperheroe(superheroe);
  necesitaGuardar = true;
}

function guardarDibujo() {
  var nombreArchivo = prompt('Con que nombre querés guardar tu dibujo?');
    if (nombreArchivo != null && nombreArchivo.length > 0) {
      guardarPixelArt(nombreArchivo);
      necesitaGuardar = false;
    }
}