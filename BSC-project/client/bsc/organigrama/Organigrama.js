import "./subscribe/subscribe.js"

Template.Organigrama.helpers({
    organigrama: ()=>{
        return Organigrama.find({});
    },
    gerencial:()=>{
        return OrganigramaNivelTactico.find({});
    }

});


