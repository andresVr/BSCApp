import {calcEquivalence} from "../vo/FodoFadaFunctions";
Meteor.methods({
        insertarDa: function (daVo){

            Da.insert({
                weaknesses:daVo[0],
                weaknesses_id:daVo[1],
                menace:daVo[2],
                menace_id:daVo[3],
                qualification:daVo[4],
                equivalence:calcEquivalence(daVo[4])

            });
        },
        updateQualificationDa:function (daIds,updater){
            Da.update({weaknesses_id:daIds[0],
                menace_id:daIds[1]},{
                    $set: {
                        qualification:updater,
                        equivalence:calcEquivalence(updater)

                    }
                }
            )
        },


    }
)
