import "../../subscribe/subscribe.js"

Template.DoView.helpers({
    oportunidades: ()=>{
        return Oportunidades.find({});
    },
    debilidades:()=> {
        return Debilidades.find({});
    },
    do:()=>{
        return Do.find({});
    }

});

Template.DoView.onRendered(function() {
    this.autorun(function() {

        Meteor.setTimeout(function(){
            const matrix=insertDoMatrix();
            if(!_.isEmpty(matrix)){
                _.each(matrix,function (m) {
                    var noRepeat = m;


                    if(noRepeatElementsDo(noRepeat)) {
                        Meteor.call('insertarDo',noRepeat);

                    }
                });
            }



        }, 1000);


    });
});


function noRepeatElementsDo(elemento) {

    var doE =  Do.find({'weaknesses': elemento[0], 'weaknesses_id': elemento[1],
        'opportunity':elemento[2],'opportunity_id':elemento[3]}).fetch();

    return _.isEmpty(doE);
}


function insertDoMatrix(){
    var op =  Oportunidades.find({}).fetch();
    var foMatrix=[];

    var doE = Debilidades.find({}).fetch();

    _.forEach(doE, function(debilidad) {


        for(var i=0;i<op.length;i++){
            var col=[debilidad.desc,debilidad._id,
                op[i].desc,op[i]._id,null];
            foMatrix.push(col);

        }
    });



    return foMatrix;
}
Template.DoView.events({



    'change form#DoForm': function(event,template){

        const target = event.target;
        const id=target.id;
        const object_value=target.value;
        if(!(object_value>1.4 && object_value<=10)){
            sAlert.error('<div class="message-style">Error! <br> la calificacion debe estar entre 1.5 y 9</div>', {effect: 'genie', html: true,
                position: 'bottom-right'});
        }

        var splitId =id.split("_");
        var foId = [splitId[1],splitId[2]];
        Meteor.call('updateQualificationDo',foId,object_value);


    }

});