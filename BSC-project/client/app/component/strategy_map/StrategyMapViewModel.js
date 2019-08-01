import "../subscribe/subscribe.js"


Template.StrategyMapView.helpers({

    finance_perspective:()=>{
        return Meb.find({
            perspective:'Financiera',
            isUnified:{$not:true}});
    },
    client_perspective:()=>{
        return Meb.find({
            perspective:'Enfoque Cliente',
            isUnified:{$not:true}});
    },
    process_perspective:()=>{
        return Meb.find({
            perspective:'Proceso Internos',
            isUnified:{$not:true}});
    },
    learning_perspective:()=>{
        return Meb.find({
            perspective:'Aprendizaje Y Crecimiento',
            isUnified:{$not:true}});
    }



});







