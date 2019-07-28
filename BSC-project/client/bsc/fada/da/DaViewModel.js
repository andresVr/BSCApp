import "../subscribe/subscribe.js"

Template.DaView.helpers({
    oportunidades: ()=>{
        return Oportunidades.find({});
    },
    amenazas:()=> {
        return Amenazas.find({});
    },
    da:()=>{
        return Da.find({});
    }

});

Template.DaView.onRendered(function() {
    this.autorun(function() {

        Meteor.setTimeout(function(){
            const matrix=insertDaMatrix();

            if(!_.isEmpty(matrix)){
                _.each(matrix,function (m) {
                    var noRepeat = m;


                    if(noRepeatElementsDa(noRepeat)) {
                        Meteor.call('insertarDa',noRepeat);

                    }
                });
            }



        }, 1000);


    });
});


function noRepeatElementsDa(elemento) {

    var daE =  Da.find({'weaknesses': elemento[0], 'weaknesses_id': elemento[1],
        'menace':elemento[2],'menace_id':elemento[3]}).fetch();

    return _.isEmpty(daE);
}


function insertDaMatrix(){
    var op =  Amenazas.find({}).fetch();
    var foMatrix=[];

    var daE = Debilidades.find({}).fetch();

    _.forEach(daE, function(amenaza) {


        for(var i=0;i<op.length;i++){
            var col=[amenaza.desc,amenaza._id,
                op[i].desc,op[i]._id,null];
            foMatrix.push(col);

        }
    });



    return foMatrix;
}
Template.DaView.events({



    'change form#DaForm': function(event,template){

        const target = event.target;
        const id=target.id;
        const object_value=target.value;
        if(!(object_value>1.4 && object_value<=9)){
            sAlert.error('<div class="message-style">Error! <br> la calificacion debe estar entre 1.5 y 9</div>', {effect: 'genie', html: true,
                position: 'bottom-right'});
        }

        var splitId =id.split("_");
        var faId = [splitId[1],splitId[2]];
        Meteor.call('updateQualificationDa',faId,object_value);


    }

});