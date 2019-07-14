

OrganigramaNivelInferior = new Mongo.Collection('organigramaNivelInferior');

OrganigramaNivelInferior.allow({
        insert: function (userId,doc) {
            return !!userId;
        },
        update:function (userId,doc) {
            return !!userId;
        }
    }
)

NivelTactico = new SimpleSchema({
    name:{
        type: String,
        label: "Nombre coordinación"
    },
    desc:{
        type: String,
        label: "Descripción"

    }


});
NivelOperativo = new SimpleSchema({
    name:{
        type: String,
        label: "Nombre cargo"
    },
    desc: {
        type: String,
        label: "Descripción"

    },
    tacticalLevel:{
        type: [String],
        optional:true,
        label: 'Nivel táctico',
        autoform:{
            type:"select2",
            placeholder: 'Seleccione el nivel táctico'
        }
    }


});



OrganigramaNivelInferior.attachSchema( NivelOperativo );