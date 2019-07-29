import "../../subscribe/subscribe.js"


Template.FaView.helpers({
    amenazas: ()=>{
        return Amenazas.find({});
    },
    fortalezas:()=>{
        return Fortalezas.find({});
    },
    fa:()=>{
        return Fa.find({});
    }


});


Template.FaView.onRendered(function() {
    this.autorun(function() {

        Meteor.setTimeout(function(){
            const matrix=insertFaMatrix();

            if(!_.isEmpty(matrix)){
                _.each(matrix,function (m) {
                    var noRepeat = m;

                    if(noRepeatElements(noRepeat)) {
                        Meteor.call('insertarFa',noRepeat);

                    }
                });
            }



        }, 1000);


    });
});

function noRepeatElements(elemento) {

    var fa =  Fa.find({'fortitude': elemento[0], 'id_fortitude': elemento[1],
        'menace':elemento[2],'id_menace':elemento[3]}).fetch();

    return _.isEmpty(fa);
}


function insertFaMatrix(){
    var ap =  Amenazas.find({}).fetch();
    var foMatrix=[];

    var fo = Fortalezas.find({}).fetch();

    _.forEach(fo, function(fortaleza) {


        for(var i=0;i<ap.length;i++){
            var col=[fortaleza.desc,fortaleza._id,
                ap[i].desc,ap[i]._id,null];
            foMatrix.push(col);

        }
    });



    return foMatrix;
}
Template.FaView.events({



    'change form#FaForm': function(event,template){

        const target = event.target;
        const id=target.id;
        const object_value=target.value;
        if(!(object_value>1.4 && object_value<=9)){
            sAlert.error('<div class="message-style">Error! <br> la calificacion debe estar entre 1.5 y 9</div>', {effect: 'genie', html: true,
                position: 'bottom-right'});
        }

        var splitId =id.split("_");
        var foId = [splitId[1],splitId[2]];
        Meteor.call('updateQualificationFa',foId,object_value);


    }

});


