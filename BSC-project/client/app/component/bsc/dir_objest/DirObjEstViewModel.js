import "../../subscribe/subscribe.js"


Template.DirObjEstView.helpers({

    meb:()=>{
        return Meb.find({
            isUnified:{$not:true}});
    },
    bsc_lvl_1:()=>{
        return Bsclvl1.find({
        });
    },



});

Template.DirObjEstView.onRendered(function() {
    this.autorun(function() {

        Meteor.setTimeout(function(){
            const matrix=insertBscLvl1Matrix();
            console.log (matrix);
            if(!_.isEmpty(matrix)){
                _.each(matrix,function (m) {
                    var noRepeat = m;

                    if(noRepeatElements(noRepeat)) {
                        Meteor.call('insertarBscLvl1',noRepeat);

                    }
                });
            }




        }, 1000);


    });
});

function noRepeatElements(elemento) {

    var bsc_lvl_1 =  Bsclvl1.find({'meb_id': elemento.meb_id, 'meb_strategy': elemento.meb_strategy,
        'meb_perspective':elemento.meb_perspective}).fetch();

    return _.isEmpty(bsc_lvl_1);
}

function insertBscLvl1Matrix() {
    var matrix = [];
    var meb = Meb.find({
        isUnified: {$not: true}
    }).fetch();

    console.log(meb);

    _.forEach(meb, function (element) {
        var matrixElement = {
            'meb_id': element._id, 'meb_strategy': element.strategy,
            'meb_perspective': element.perspective,'meb_orgLevel': element.orgLevel
        };
        matrix.push(matrixElement);

    });
    return matrix;
}


Template.DirObjEstView.events({



    'change form#dirobjForm': function(event,template){

        const target = event.target;
        const id=target.id;
        const object_value=target.value;
        console.log(object_value);

        var isObjEst = id.indexOf("_obj_est") !== -1;


        if(isObjEst) {
            Meteor.call('updateStrategicObj', id.split("_")[1], object_value);
        }

    },

    'change form#measureForm':function (event,template) {
        const target = event.target;
        const id=target.id;
        const object_value=target.value;
        console.log(object_value);

        var isKpi = id.indexOf("_kpi") !== -1;
        var isDefOp = id.indexOf("_defOperacional") !== -1;
        var isUpdateFrecuency = id.indexOf("_updateFrecuency") !== -1;
        var isCaptureFrecuency = id.indexOf("_captureFrecuency") !== -1;
        var isLvlUf = id.indexOf("_lvlUf") !== -1;


        if(isKpi) {
            var updater={'label':'kpi','value':object_value}
            Meteor.call('updateMeasuresObj', id.split("_")[1], updater);
        }
        if(isDefOp) {

            var updater={'label':'defOp','value':object_value}
            Meteor.call('updateMeasuresObj', id.split("_")[1], updater);
        }
        if(isUpdateFrecuency) {
            var updater={'label':'updateFrecuency','value':object_value}
            Meteor.call('updateMeasuresObj', id.split("_")[1], updater);
        }
        if(isCaptureFrecuency) {
            var updater={'label':'captureFrecuency','value':object_value}
            Meteor.call('updateMeasuresObj', id.split("_")[1], updater);
        }
        if(isLvlUf) {
            var updater={'label':'lvlUf','value':object_value}
            Meteor.call('updateMeasuresObj', id.split("_")[1], updater);
        }
    }

});

