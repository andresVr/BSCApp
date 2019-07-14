import "./subscribe/subscribe.js"

Template.Organigrama.helpers({
    organigrama: ()=>{
        return Organigrama.find({});
    }
});

Template.Organigrama.rendered = function () {
    $("#slcOrganigramaInferior").select2({
        placeholder: "Selecciona/busca la destreza",
        language: "es"

    });
}