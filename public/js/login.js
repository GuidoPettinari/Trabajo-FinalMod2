var login = function () {

  //REGISTRO:




  $('#botonlogueo').on('click',function(){
    var usuario = $('#Usuariologin').val();
    var pass = $('#Passlogin').val();
    var loginUsuario = {};
    var validador = false;

    if (localStorage.length>0) {
    for (i=1;i<=localStorage.length;i++){
          loginUsuario = JSON.parse(localStorage.getItem(i));

        if (usuario == loginUsuario.usuario && pass == loginUsuario.password && usuario !="") {
          app.loadTemplate('contenedorGeneral','dashboard',dashboard);
          sessionStorage.setItem('user',usuario);
          validador = true;
          return
        }
      };
        if(!validador) {
          $('#contenedorGeneral').append('<div class="weather col-xs-12">' +

                                              '<div><span class="temperatura col-xs-12">' + 'El usuario o la contraseña son incorrectos' + '</span>'+

              	                          '</div>')

  };
}
});


$('#botonback').on('click',function(){
  app.loadTemplate('contenedorGeneral','inicio',myscripts);

})




};
