Producto = new Mongo.Collection('producto');

/**
 * this it means, that this collection is allow to insert when
 * a user id exist
 */
Producto.allow({
        insert: function (userId,doc) {
            return !!userId;
        },
        update:function (userId,doc) {
            return !!userId;
        }
    }
)




ProductoEntity = new SimpleSchema({

    name:{
        type: String,
        label: "Nombre"

    },
    desc:{
        type: String,
        label: "Descripción"

    },
    precio:{
        type: Number,
        label: "Precio",
        decimal: true
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

Producto.attachSchema( ProductoEntity );
