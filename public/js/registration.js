var registration = function () {

  //REGISTRO: SET IN LOCALSTORAGE

  var registrousuario = {};


  $('#botonregistro').on('click',function(){
    var nuevoid = $('#nombreregistro').val() + $('#emailregistro').val();
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
    if (localStorage.length > 1) {
    for (i=0;i<localStorage.length;i++) {
      if (nuevousuario.Id === localStorage.getItem(i)) {

      console.log("YA ESTA REGISTRADO");
      }
     else {
      localStorage.setItem(nuevousuario.Id,JSON.stringify(nuevousuario));
      }
    };

  } else {
    localStorage.setItem(nuevousuario.Id,JSON.stringify(nuevousuario));
  }
  });

};
