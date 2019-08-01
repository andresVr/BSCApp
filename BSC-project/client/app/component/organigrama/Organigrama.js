import "../subscribe/subscribe.js"

Template.Organigrama.helpers({
    organigrama: ()=>{
        return Organigrama.find({});
    },
    departamentoLvl2:()=>{
        return Departamento.find({organigramaLevel:'KZ9ZuaKJAqTL3qdLN-Gerencias Departamentales'});
    },
    departamentoLvl3:()=>{
        return Departamento.find({organigramaLevel:'54ZQAZ8m8QZxTjDQv-Táctico'});
    },
    departamentoLvl4:()=>{
        return Departamento.find({organigramaLevel:'j8tH4kzyjm677jZhg-Operativos'});
    }




});


