dashboard = function () {
  $('#botonlogout').on('click',function () {
    sessionStorage.clear();
    $('.nombreyusuario').remove();
    app.loadTemplate('contenedorGeneral','inicio',myscripts)
  });


  $('#user').append ('Bienvenido ' + sessionStorage.getItem('user'));

  $('#botonconsulta').on('click',function(){

    var ciudad = $('#consultaciudad').val();


$.ajax({
  type:'get',
  url: 'http://api.openweathermap.org/data/2.5/weather?q='+ciudad+'&units=metric&APPID=38c025821a82631b79280b60a24db1ff',
  dataType: 'json',
  success: function (data){


      var resultados = data;
      $('.weather').remove();
      $('#contenedorGeneral').append('<div class="weather col-xs-12">' +

						 	                            '<h1 class="titulociudad col-xs-12">' + resultados.name + '</h1>' +

                                          '<div><span class="temperatura col-xs-12">' + resultados.sys.country + '</span>'+

                                          '<div><span class="temperatura col-xs-12">' + 'Temperatura ' + resultados.main.temp + 'º' + '</span>'+

                                          '<div><span class="temperatura col-xs-12">' + 'Porcentaje de Nubosidad ' + resultados.clouds.all + '%' + '</span>'+

          	                          '</div>')



  },
  error: function(data) {
    console.log("No volvio información")

  }
})


  })
}
