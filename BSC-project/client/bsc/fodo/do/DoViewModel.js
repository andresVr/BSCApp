import "../subscribe/subscribe.js"

Template.DoView.helpers({
    oportunidades: ()=>{
        return Oportunidades.find({});
    },
    debilidades:()=>{
        return Debilidades.find({});
    }

});
