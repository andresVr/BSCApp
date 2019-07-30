
Template.GroupingMeb.helpers({

    meb:()=>{
        return Meb.find({isUnified:{$not:true}});
    },

    meb_grouping:()=>{
        if(Session.get("meb-grouping")==null){
           return '';
        }else{
            var present= Session.get("meb-grouping");
            var accumulator = '';
            _.each(present,function (pre) {
                accumulator = accumulator + pre.label + ', '
            })
            return accumulator;
        }

    }



});

Template.GroupingMeb.rendered = function () {
    $("#slcMebDepurada").select2({
        placeholder: "Selecciona/busca la estrategia",
        language: "es"

    });
    $("#slcPerspectivaGrouping").select2({
        placeholder: "Selecciona/busca la Perspectiva",
        language: "es"

    });





    Session.set("meb-grouping",null);
}

Template.GroupingMeb.events({

    'click .btn-close-grouping ':function () {
        Session.set('open-grouping-strategy-form','');
    },

    'change .slcMebDepurada':function (event,template) {
        var selectValue = template.find('#slcMebDepurada').value;
        console.log(selectValue);
        var meb_grouping={'change_id':selectValue.split('_')[0],'label':selectValue.split('_')[1]};
        var meb_grouping_actual=Session.get("meb-grouping");
        console.log(meb_grouping_actual);
        if(meb_grouping_actual == null||meb_grouping_actual == undefined){
            Session.set("meb-grouping",[meb_grouping]);
        }else{
            var isPresent = _.find(meb_grouping_actual,function (meb) {
                return meb.change_id==meb_grouping.change_id && meb.label==meb_grouping.label;
            });
            if(_.isEmpty(isPresent)) {
                meb_grouping_actual.push(meb_grouping);
                Session.set("meb-grouping", meb_grouping_actual);
            }
        }

    },

    'click .btn-submit-grouping-strategy ':function (event,template) {

        var strategy = template.find("#inputStrategy").value;
        var perspective = template.find("#slcPerspectivaGrouping").value;

        var updaterStrategys = Session.get("meb-grouping");
       console.log('s',strategy,'p',perspective,'u',updaterStrategys);

        if(_.isEmpty(strategy) ||_.isEmpty(perspective) ||_.isEmpty(updaterStrategys)){
            sAlert.error('<div class="message-style">Error! <br> Todos los campos son requeridos para continuar</div>', {effect: 'genie', html: true,
                position: 'bottom-right'});
        }else{
            _.each(updaterStrategys,function (strategy) {
                console.log(strategy.change_id);
                Meteor.call('updateIsUnified',strategy.change_id);
            })
            var accumulator = '';
            _.each(updaterStrategys,function (pre) {
                accumulator = accumulator + pre.label + ', '
            })

            var mebVo={'strategy': strategy,
                'perspective':perspective,
                'unifiedList':accumulator};
            Meteor.call('insertarMebDep',mebVo);
           // document.location.reload(true);
            Session.set("meb-grouping",null);
            template.find("#inputStrategy").value='';

        }


    },
});