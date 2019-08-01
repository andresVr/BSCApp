Bcg = new Mongo.Collection('bcg');

/**
 * this it means, that this collection is allow to insert when
 * a user id exist
 */
Bcg.allow({
        insert: function (userId,doc) {
            return !!userId;
        },
        update:function (userId,doc) {
            return !!userId;
        }
    }
)




BcgEntity = new SimpleSchema({

    product:{
        type: String,
        label: "Producto",
        optional: true

    },
    participation:{
        type: Number,
        label: "participation",
        optional: true,
        decimal:true

    },
    earnings:{
        type: Number,
        label: "Precio",
        optional: true,
        decimal:true
    },

    marketGrowth:{
        type: Number,
        label: "Crecimiento del mercado",
        optional: true,
        decimal:true
    },
    bcgIdentifier:{
        type: String,
        label: "bcgIdentifier",
        optional: true
    },
    bcgIdentifierVerticalArrow:{
        type: String,
        label: "bcgIdentifierVerticalArrow",
        optional: true
    },
    bcgIdentifierHorizontalArrow:{
        type: String,
        label: "bcgIdentifierHorizontalArrow",
        optional: true
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

Bcg.attachSchema( BcgEntity );
