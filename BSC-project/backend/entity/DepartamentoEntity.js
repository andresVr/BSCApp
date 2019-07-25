

Departamento = new Mongo.Collection('departamento');

Departamento.allow({
        insert: function (userId,doc) {
            return !!userId;
        },
        update:function (userId,doc) {
            return !!userId;
        }
    }
)

DepartamentoEntity = new SimpleSchema({
    name:{
        type: String,
        label: "Nombre depatamento/cargo"
    },
    desc: {
        type: String,
        label: "Descripción"

    }
    ,organigramaLevel:{
        type: String,
        label: "Nivel Organigrama"
    },
    userId: {
    type: "String",
        label: "User id",
        defaultValue:function () {
        return this.userId;
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



Departamento.attachSchema( DepartamentoEntity );