router = function() {
    var Router = {};
    Router.evalRoute = function(view) {
        var pathName = $(location).attr("pathname");


         app.loadTemplate("contenedorGeneral",'inicio',myscripts);


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
