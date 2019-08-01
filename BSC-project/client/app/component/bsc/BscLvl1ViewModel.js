import "../subscribe/subscribe.js"


Template.BscLvl1View.helpers({

    meb:()=>{
        return Meb.find({
            isUnified:{$not:true}});
    },
    bsc_lvl_1:()=>{
        return Bsclvl1.find({
            });
    },



});

Template.BscLvl1View.onRendered(function() {

});

