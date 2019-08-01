import {BcgVo, pushBcgVo} from "../../../../../backend/vo/BcgVo";
import "../../subscribe/subscribe.js";
import {DepartamentoVo, pushDepartamentoVo}  from "../../../../../backend/vo/DepartamentoVo";


Template.BcgFormView.helpers({
    bcg: ()=>{
        return Bcg.find({});
    },

    product: ()=>{
        return Producto.find({});
    }

});

/**var parents = function(){

    return [
        ['', '', '', ''],
        [ , , , ],
        [ , , , ],
        [ , , , ],
        [ , , , ],
        [ , , , ],
        [ , , , ],
        [ , , , ],
        [ , , , ],
        [ , , , ],
    ];

}*/



Template.BcgFormView.rendered = function () {

        $("#slcProducto").select2({
            placeholder: "Selecciona/busca un producto",
            language: "es"

        });

       /**var $container = $("#example1");

        $container.handsontable({
            data: parents(),
            rowHeaders: true,
            colHeaders:  ['Producto', 'Participación relativa de mercado', 'Ingresos (USD)', 'Crecimiento del mercado (%)'],
            contextMenu: true,
            stretchH: 'all',


        });

        // This way, you can access Handsontable api methods by passing their names as an argument, e.g.:
        var hotInstance = $("#example1").handsontable('getInstance');
        */
    };
Template.BcgFormView.events({
    'click .btn-submit-bcg-view ': function (event,template){
        if(!checkEmptyFormFields(event,template)) {

            pushBcgVo(template.find('#slcProducto').value,
                template.find('#txtParticipacioMercado').value,
                template.find('#txtIngresos').value,
                template.find('#txtCrecimientoMercado').value,
                bcgIdentifier(template.find('#txtParticipacioMercado').value,
                    template.find('#txtCrecimientoMercado').value),
                bcgVerticalArrow(template.find('#txtCrecimientoMercado').value),
                bcgHorizontalArrow(template.find('#txtParticipacioMercado').value));
                 Meteor.call('insertarBcg', BcgVo);
            clearForm(event, template);
        }else{
            sAlert.error('<div class="message-style">Error! <br> Todos los campos son requeridos para continuar</div>', {effect: 'genie', html: true,
                position: 'bottom-right'});
        }
    }
});

function bcgIdentifier(participacion, crecimiento) {
    var resultado = '';
    if(participacion>1 && crecimiento>50){
        resultado = 'Estrella';
    }else if(participacion>1 && crecimiento <50){
        resultado = 'Vacas';
    }else if(participacion<1 && crecimiento < 50){
        resultado = 'Perro'
    }else{
        resultado = 'Interrogación'
    }

    return resultado;
}

function bcgVerticalArrow (crecimiento){
    var resultado = '';
    if(crecimiento>50){
        resultado = 'fa fa-arrow-up cell-color-green';
    }
    if(crecimiento<50){
        resultado = 'fa fa-arrow-down cell-color-red';
    }
    return resultado;
}


function bcgHorizontalArrow(participacion) {
    var resultado = '';
    if(participacion>1){
        resultado = 'fa fa-arrow-right cell-color-green';
    }
    if(participacion<1){
        resultado = 'fa fa-arrow-left cell-color-red';
    }
    return resultado;
}

function clearForm(event,template){
    template.find('#txtParticipacioMercado').value='';
    template.find('#txtIngresos').value='';
    template.find('#txtCrecimientoMercado').value='';

}

function checkEmptyFormFields(event,template) {
    return _.isEmpty(template.find('#txtParticipacioMercado').value) ||
        _.isEmpty(template.find('#txtIngresos').value) ||
        _.isEmpty(template.find('#txtCrecimientoMercado').value) ||
        _.isEmpty(template.find('#slcProducto').value)
        ;
}