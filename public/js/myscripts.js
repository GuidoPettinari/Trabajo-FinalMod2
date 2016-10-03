

var myscripts = function() {

//VA A LA PAGINA DE LOGIN
$('#login').on('click',function(){
  app.loadTemplate('contenedorGeneral','logueo',login);
});

//VA A LA PAGINA DE REGISTRO

$('#registro').on('click',function(){
  app.loadTemplate('contenedorGeneral','registro',registration);
});



};
