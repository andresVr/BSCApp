Fa = new Mongo.Collection('fa');

/**
 * this it means, that this collection is allow to insert when
 * a user id exist
 */
Fa.allow({
        insert: function (userId,doc) {
            return !!userId;
        },
        update:function (userId,doc) {
            return !!userId;
        }
    }
)




FaEntity = new SimpleSchema({

    fortitude:{
        type: String,
        label: "Fortaleza",
        optional: true

    },
    id_fortitude:{
        type: String,
        label: "_idFortaleza",

    },
    menace:{
        type: String,
        label: "Amenaza"

    },
    id_menace:{
        type: String,
        label: "_idAmenaza",
        optional: true,


    },
    qualification:{
        type: Number,
        label: "Calificacion",
        optional: true,
        decimal:true
    },
    equivalence:{
        type: Number,
        label: "equivalencia",
        optional: true,
        decimal:true
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

Fa.attachSchema( FaEntity );
