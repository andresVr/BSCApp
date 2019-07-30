Da = new Mongo.Collection('da');

/**
 * this it means, that this collection is allow to insert when
 * a user id exist
 */
Da.allow({
        insert: function (userId,doc) {
            return !!userId;
        },
        update:function (userId,doc) {
            return !!userId;
        }
    }
)




DaEntity = new SimpleSchema({

    weaknesses:{
        type: String,
        label: "Debilidades",
        optional: true

    },
    weaknesses_id:{
        type: String,
        label: "Debilidades",
        optional: true

    },
    menace:{
        type: String,
        label: "Oportunidad",


    },
    menace_id:{
        type: String,
        label: "Oportunidad",


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

Da.attachSchema( DaEntity );
