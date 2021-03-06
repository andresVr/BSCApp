Bsclvl1 = new Mongo.Collection('bsclvl1');

/**
 * this it means, that this collection is allow to insert when
 * a user id exist
 */
Bsclvl1.allow({
        insert: function (userId,doc) {
            return !!userId;
        },
        update:function (userId,doc) {
            return !!userId;
        }
    }
)




Bsclvl1Schema = new SimpleSchema({

    meb_id:{
        type: String,
        label: "id cruce",
        optional:true


    },
    meb_strategy:{
        type: String,
        label: "estrategia",
        optional:true


    },
    meb_perspective:{
        type: String,
        label: "perspectiva",
        optional:true
    },
    meb_orgLevel:{
        type: String,
        label: "nivel organizacional",
        optional:true
    },
    strategic_objective:{
        type: String,
        label: "objetivo estrategico",
        optional:true
    }
    ,
    kpi:{
        type: String,
        label: "kpi",
        optional:true
    }
    ,
    defOp:{
        type: String,
        label: "Definicion operacional",
        optional:true
    },
    updateFrecuency:{
        type: String,
        label: "Frecuencia de Actualización",
        optional:true
    },
    captureFrecuency:{
        type: String,
        label: "captureFrecuency",
        optional:true
    },
    lvlUf:{
        type: Number,
        label: "lvlUf",
        optional:true,
        decimal:true
    },
    lvlUfType:{
        type: String,
        label: "lvlUfType",
        optional:true
    },
    anualGoal:{
        type: Number,
        label: "anualGoal",
        optional:true,
        decimal: true
    },
    anualGoalType:{
        type: String,
        label: "anualGoalType",
        optional:true

    },
    responsable:{
        type: String,
        label: "responsable",
        optional:true,
    },
    project:{
        type: String,
        label: "project",
        optional:true,
    },
    responsable_project:{
        type: String,
        label: "responsable_project",
        optional:true,
    },
    startDate:{
        type: Date,
        label: "startDate",
        optional:true,
    },
    endDate:{
        type: Date,
        label: "endDate",
        optional:true,
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

Bsclvl1.attachSchema( Bsclvl1Schema );
