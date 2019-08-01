import "../../subscribe/subscribe.js"


Template.MebDepView.helpers({
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
        return Meb.find({isUnified:{$not:true}});
    },
    organigrama:()=>{
        return Organigrama.find({});
    },
    grouping_strategy_form:function () {
        return Session.get('open-grouping-strategy-form');
    }

});


Template.MebDepView.rendered=function () {
    if(!this._rendered){
        this._rendered=true;

        Session.set('open-grouping-strategy-form', '');

    }
}


Template.MebDepView.events({

    'change form#mebFormD': function(event,template){

        const target = event.target;
        const id=target.id;
        const object_value=target.value;

        Meteor.call('updateResposibleMeb',id.split("-")[1],object_value);

    },
    'click .btn-submit-grouping-strategy ':function () {
        Session.set('open-grouping-strategy-form','open');
    }


});




