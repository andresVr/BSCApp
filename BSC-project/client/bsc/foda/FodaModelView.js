import "./subscribe/subscribe.js"

Template.FodaView.helpers({
    oportunidades: ()=>{
        return Oportunidades.find({});
    },
    amenazas:()=>{
        return Amenazas.find({});
    },
    debilidades:()=>{
        return Debilidades.find({});
    },
    fortalezas:()=>{
        return Fortalezas.find({});
    }

});


