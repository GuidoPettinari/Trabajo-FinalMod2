router = function() {
    var Router = {};
    Router.evalRoute = function(view) {
        var pathName = $(location).attr("pathname");

        if(sessionStorage.getItem('user') !== null) {
          app.loadTemplate("contenedorGeneral",'dashboard',dashboard);
        } else {
         app.loadTemplate("contenedorGeneral",'inicio',myscripts);
       }
    };

    return Router;
}();

app = function(router) {
    var myApp = {};
    myApp.init = function() {
        $(document).ready(function() {
            console.log("-----Se inicio  la app-----------");
            router.evalRoute();

        });
    }();

    myApp.loadTemplate = function(load, partialName, callback) {
        $("#" + load).load("../partials/" + partialName + ".html", callback);
    }
    return myApp;
}(router);
