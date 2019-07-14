Organigrama = new Mongo.Collection('organigrama');

/**
 * this it means, that this collection is allow to insert when
 * a user id exist
 */
Organigrama.allow({
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




OrganigramaSchema = new SimpleSchema({
    name: {
        type: String,
        label:"Nombre gerencia departamental"
    },
    desc:{
       type: String,
       label: "Descripción"

    },
    taticalLevel:{
      type: [NivelTactico],
      label: "Nivel táctico"
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

Organigrama.attachSchema( OrganigramaSchema );
