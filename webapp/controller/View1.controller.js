sap.ui.define([
    "sap/ui/core/mvc/Controller",
    /**  "sap/m/Text" */
    "sap/ui/core/mvc/XMLView",
    "sap/m/MessageToast"


],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, XMLView, MessageToast) {
        "use strict";

        /** 
        new Text({
            text: "Hello World"
        }).placeAt("content");
*/

        XMLView.create({
            viewName: "project1.controller.App.View1.App"
        }).then(function (oView) {
            oView.placeAt("content");
        });



        return Controller.extend("project1.controller.View1", {
            onInit: function () {

                /**   alert("ilk giriş ekranı"); */

            },

            onShowHello: function () {

               /**  alert("Butona bastık gardaş"); */
                MessageToast.show("Hello World");
            },





        });







    });
