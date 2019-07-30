Meb = new Mongo.Collection('meb');

/**
 * this it means, that this collection is allow to insert when
 * a user id exist
 */
Meb.allow({
        insert: function (userId,doc) {
            return !!userId;
        },
        update:function (userId,doc) {
            return !!userId;
        }
    }
)




MebSchema = new SimpleSchema({

    cross_id:{
        type: String,
        label: "id cruce",
        optional:true


    },
    cross_name:{
        type: String,
        label: "matriz origen",
        optional:true


    },
    cross_value:{
        type: String,
        label: "valor cruce",
        optional:true


    },
    strategy:{
        type: String,
        label: "estrategia",
        optional:true


    },
    perspective:{
        type: String,
        label: "perspectiva",
        optional:true
    },
    orgLevel:{
            type: String,
            label: "nivel organizacional",
            optional:true
        }
    ,isUnified:{
        type: Boolean,
        label: "es unificada",
        optional:true,
        defaultValue:false,
    },
    unifiedList:{
        type: String,
        label: "lista unificacion",
        optional:true
    },
    reponsibleProcess:{
        type: String,
        label: "proceso responsable",
        optional:true
    },

    createUser: {
        type: "String",
        label: "Create user",
        defaultValue:function () {
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created at",
        autoValue: function () {
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    }


});

Meb.attachSchema( MebSchema );
