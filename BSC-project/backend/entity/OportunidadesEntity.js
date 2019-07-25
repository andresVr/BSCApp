Oportunidades = new Mongo.Collection('oportunidades');

/**
 * this it means, that this collection is allow to insert when
 * a user id exist
 */
Oportunidades.allow({
        insert: function (userId,doc) {
            return !!userId;
        },
        update:function (userId,doc) {
            return !!userId;
        }
    }
)




OportunidadesEntity = new SimpleSchema({

    desc:{
        type: String,
        label: "Descripción"

    },

    createUser: {
        type: "String",
        label: "Create user",
        autoValue:function () {
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

Oportunidades.attachSchema( OportunidadesEntity );