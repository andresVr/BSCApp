Meteor.methods({
    insertarFa: function (FaVo){

        Fa.insert({
            fortitude:FaVo[0],
            id_fortitude:FaVo[1],
            menace:FaVo[2],
            id_menace:FaVo[3],
            qualification:FaVo[4]

        });
    },
    updateQualificationFa:function (faIds,updater){
    Fa.update({id_fortitude:faIds[0],
    id_menace:faIds[1]},{
        $set: {
            qualification:updater

        }
    }
)
}


}
)
