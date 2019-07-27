


import "./subscribe/subscribe.js"

Template.BcgView.helpers({
    bcg:()=>{

        return Bcg.find({});
    },

    producto: ()=>{
        return Producto.find({});
    }

});




Template.BcgView.rendered = function () {



};
