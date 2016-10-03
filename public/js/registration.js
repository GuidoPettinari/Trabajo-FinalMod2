var registration = function () {

  //REGISTRO: SET IN LOCALSTORAGE

  var registrousuario = {};


  $('#botonregistro').on('click',function(){
    var nuevoid = localStorage.length + 1;
    var nuevonombre = $('#nombreregistro').val();
    var nuevoapellido = $('#apellidoregistro').val();
    var nuevousuario = $('#usuarioregistro').val();
    var nuevoemail = $('#emailregistro').val();
    var nuevopass = $('#passregistro').val();

    function constructorUsuarios (Id, nombre, apellido, usuario,email, password) {
      this.Id = Id;
      this.nombre = nombre;
      this.apellido = apellido;
      this.usuario = usuario;
      this.email = email;
      this.password = password;
    }


    var nuevousuario = new constructorUsuarios (nuevoid,nuevonombre,nuevoapellido,nuevousuario,nuevoemail,nuevopass)

    if (localStorage.length > 0) {


      for (i=1;i<=localStorage.length;i++){
          var checkUsuario = JSON.parse(localStorage.getItem(i));

        if (nuevousuario.usuario === checkUsuario.usuario || nuevousuario.email === checkUsuario.email) {
          console.log("YA ESTA REGISTRADO");
          return
        }
        else {
    localStorage.setItem(nuevousuario.Id,JSON.stringify(nuevousuario));
    app.loadTemplate('contenedorGeneral','logueo')
    return
  }
  }
}else {
    localStorage.setItem(nuevousuario.Id,JSON.stringify(nuevousuario));
    app.loadTemplate('contenedorGeneral','logueo',login);
    return
  }

});


$('#botonback').on('click',function(){
  app.loadTemplate('contenedorGeneral','inicio',myscripts);

})


};
