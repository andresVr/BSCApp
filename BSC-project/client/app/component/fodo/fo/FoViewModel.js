import "../../subscribe/subscribe.js"


Template.FoView.helpers({
    oportunidades: ()=>{
        return Oportunidades.find({});
    },
    fortalezas:()=>{
        return Fortalezas.find({});
    },
    fo:()=>{
        return Fo.find({});
    }


});


Template.FoView.onRendered(function() {
    this.autorun(function() {

        Meteor.setTimeout(function(){
            const matrix=insertFoMatrix();
            //console.log(matrix);
            if(!_.isEmpty(matrix)){
                _.each(matrix,function (m) {
                    var noRepeat = m;

                    if(noRepeatElements(noRepeat)) {
                         Meteor.call('insertarFo',noRepeat);
                        //console.log('inserts',noRepeatElements(noRepeat));
                    }
                });
            }



        }, 1000);


    });
});

function noRepeatElements(elemento) {

    var fo =  Fo.find({'fortitude': elemento[0], 'id_fortitude': elemento[1],
        'opportunity':elemento[2],'id_opportunity':elemento[3]}).fetch();

    return _.isEmpty(fo);
}


function insertFoMatrix(){
    var op =  Oportunidades.find({}).fetch();
    var foMatrix=[];

    var fo = Fortalezas.find({}).fetch();

    _.forEach(fo, function(fortaleza) {


        for(var i=0;i<op.length;i++){
            var col=[fortaleza.desc,fortaleza._id,
                op[i].desc,op[i]._id,null];
            foMatrix.push(col);

        }
    });



    return foMatrix;
}
Template.FoView.events({



    'change form#FoForm': function(event,template){

        const target = event.target;
        const id=target.id;
        const object_value=target.value;
        if(!(object_value>1.4 && object_value<=10)){
            sAlert.error('<div class="message-style">Error! <br> la calificacion debe estar entre 1.5 y 9</div>', {effect: 'genie', html: true,
                position: 'bottom-right'});
        }

        var splitId =id.split("_");
        var foId = [splitId[1],splitId[2]];
        Meteor.call('updateQualification',foId,object_value);


    }

});


