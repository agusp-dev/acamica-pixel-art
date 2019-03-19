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
var mousePresionado = false;


jQuery(document).ready(function(){
  console.log('Dom cargado');

  crearPaletaColores();
  //crearGrillaPixeles();
  //crearEventos();
});





function crearPaletaColores() {
  if (nombreColores != null && nombreColores.length > 0) {
    var $paleta = $('#paleta');
    //var paleta = document.getElementById('paleta');
    var colorDiv;
    for (var i = 0; i < nombreColores.length; i++) {

      $paleta.add('div').css({'background-color': 'red'}).addClass('color-paleta');

      //colorDiv = document.createElement('div');
      //colorDiv.style.backgroundColor = nombreColores[i];
      //colorDiv.className = 'color-paleta';
      //$paleta.appendChild(colorDiv);
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

  $('#paleta div').click(function() {
    console.log('Click en un color de la paleta');
    seleccionarColor(this.style.backgroundColor);
  });

  /**
   * Click sobre pixel de la grilla
   */
  $('#grilla-pixeles div').click(function() {
    console.log('Click en un pixel de la grilla');
    pintarPixel(this);
  });

  /**
   * Hover sobre grilla
   */
  $('#grilla-pixeles div').hover(function() {
    console.log('Hover en un pixel de la grilla');
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
    console.log('Click del boton Guardar');
    //guardarPixelArt();
  });

  $('#borrar').click(function() {
    console.log('Click del boton Borrar');
    borrarPixelArt(1000);
  });

  /**
   * Imagenes
   */
  $('#batman').click(function() {
    console.log('Click imagen de Batman');
    cargarSuperheroe(batman);
  });

  $('#wonder').click(function() {
    console.log('Click imagen de Wonder');
    cargarSuperheroe(wonder);
  });

  $('#flash').click(function() {
    console.log('Click imagen de Flash');
    cargarSuperheroe(flash);
  });

  $('#invisible').click(function() {
    console.log('Click imagen de Invisible');
    cargarSuperheroe(invisible);
  });
}



function seleccionarColor(color) {
  document.getElementById('indicador-de-color').style.backgroundColor = color;
  colorSeleccionado = color;
  $('#indicador-de-color-mensaje').text(color);
}

function pintarPixel(pixel) {
  if (colorSeleccionado != null) {
    pixel.style.backgroundColor = colorSeleccionado;
  }
}

function presionarMouse(presionado) {
  console.log('Mouse presionado: ' + presionado);
  mousePresionado = presionado;
}

function borrarPixelArt(duration) {
  $('#grilla-pixeles div').animate({'background-color':'white'}, duration);
}
