import "../../subscribe/subscribe.js"


Template.MebView.helpers({
    fo: ()=>{
        return Fo.find({});
    },
    do:()=>{
        return Do.find({});
    },
    fa:()=>{
        return Fa.find({});
    },
    da:()=>{
        return Da.find({});
    },
    meb:()=>{
        return Meb.find({unifiedList:null});
    },
    organigrama:()=>{
        return Organigrama.find({});
    }


});


Template.MebView.onRendered(function() {
    this.autorun(function() {

        Meteor.setTimeout(function(){
            const matrix=insertMebMatrix();

            if(!_.isEmpty(matrix)){
                _.each(matrix,function (m) {
                    var noRepeat = m;

                    if(noRepeatElements(noRepeat)) {
                        Meteor.call('insertarMeb',noRepeat);

                    }
                });
            }




        }, 1000);


    });
});

function noRepeatElements(elemento) {

    var meb =  Meb.find({'cross_id': elemento.cross_id, 'cross_name': elemento.cross_name,
        'cross_value':elemento.cross_value}).fetch();

    return _.isEmpty(meb);
}

/*function findRemove(matrix) {

    var meb =  Meb.find({}).fetch();

    var findElement=_.find(meb,{cross_id:matrix.cross_id});

    if(_.isEmpty(findElement)){
        Meteor.call()
    }


}*/


function insertMebMatrix(){
    var matrix=[];
    var fo =  Fo.find({qualification:9}).fetch();
    var doE =  Do.find({qualification:9}).fetch();
    var fa = Fa.find({qualification:9}).fetch();
    var da =  Da.find({qualification:9}).fetch();


    _.forEach(fo, function(Element) {
        var matrixElement={'cross_id':Element._id,'cross_name':'fo',
        'cross_value':'Fortaleza: '+Element.fortitude+' Oportunidad: '
            +Element.opportunity
        };
        matrix.push(matrixElement);

    });
    _.forEach(doE, function(Element) {
        var matrixElement={'cross_id':Element._id,'cross_name':'do',
            'cross_value':'Debilidad: '+Element.weaknesses+' Oportunidad:'
                +Element.opportunity
        };
        matrix.push(matrixElement);

    });
    _.forEach(fa, function(Element) {
        var matrixElement={'cross_id':Element._id,'cross_name':'fa',
            'cross_value':'Fortaleza: '+Element.fortitude+' Amenaza:'
                +Element.menace
        };
        matrix.push(matrixElement);

    });
    _.forEach(da, function(Element) {
        var matrixElement={'cross_id':Element._id,'cross_name':'Da',
            'cross_value':'Debilidad: '+Element.weaknesses+' Amenaza:'
                +Element.menace
        };
        matrix.push(matrixElement);

    });





    return matrix;
}
Template.MebView.events({



    'change form#mebForm': function(event,template){

        const target = event.target;
        const id=target.id;
        const object_value=target.value;

        var isStrategy = id.indexOf("_strategy") !== -1;
        var isPerspective = id.indexOf("_perspective") !== -1;
        var isOrgLevel = id.indexOf("_lvl") !== -1;

        if(isStrategy) {
            var updater=['strategy',object_value]

            Meteor.call('updateQualificationMeb',id.split("-")[1],updater);
        }
        if(isPerspective) {
            var updater=['perspective',object_value]

            Meteor.call('updateQualificationMeb',id.split("-")[1],updater);
        }
        if(isOrgLevel) {
            var updater=['orgLevel',object_value]

            Meteor.call('updateQualificationMeb',id.split("-")[1],updater);
        }



    }

});




