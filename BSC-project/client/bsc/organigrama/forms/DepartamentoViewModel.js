import "../subscribe/subscribe.js"
import { DepartamentoVo } from "../../../../backend/vo/DepartamentoVo";
import { pushDepartamentoVo} from "../../../../backend/vo/DepartamentoVo";

Template.DepartamentoView.helpers({
    organigrama: ()=>{
        return Organigrama.find({});
    },
    gerencial:()=>{
        return DepartamentoEntity.find({});
    }

});

Template.DepartamentoView.rendered = function () {
    $("#slcDepartamento").select2({
        placeholder: "Selecciona/busca la categoría jerárquica",
        language: "es"

    });
}

Template.DepartamentoView.events({
    'click .btn-submit-departamento-view ': function (event,template){
        if(!checkEmptyFormFields(event,template)) {
            pushDepartamentoVo(template.find('#txtDepartmentoName').value,
                template.find('#txtDepartmentoDescripcion').value,
                template.find('#txtDepartmentoDescripcion').value);
            Meteor.call('insertarDepartamento', DepartamentoVo);
            clearForm(event, template);
        }else{
            sAlert.error('<div class="message-style">Error! <br> Todos los campos son requeridos para continuar</div>', {effect: 'genie', html: true,
                position: 'bottom-right'});
        }
    }
});

function clearForm(event,template){
    template.find('#txtDepartmentoDescripcion').value='';
    template.find('#txtDepartmentoName').value='';
    template.find('#slcDepartamento').textContent='';
}

function checkEmptyFormFields(event,template) {
        return _.isEmpty(template.find('#txtDepartmentoName').value) ||
            _.isEmpty(template.find('#txtDepartmentoDescripcion').value) ||
            _.isEmpty(template.find('#slcDepartamento').value)
            ;
}