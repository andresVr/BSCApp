import {calcEquivalence} from "../vo/FodoFadaFunctions";

Meteor.methods({
        insertarDo: function (doVo){

            Do.insert({
                weaknesses:doVo[0],
                weaknesses_id:doVo[1],
                opportunity:doVo[2],
                opportunity_id:doVo[3],
                qualification:doVo[4],
                equivalence:calcEquivalence(doVo[4])

            });
        },
        updateQualificationDo:function (doIds,updater) {
            Do.update({weaknesses_id:doIds[0],
                opportunity_id:doIds[1]},{
                    $set: {
                        qualification:updater,
                        equivalence:calcEquivalence(updater)

                    }
                }
            )
        }


    }
)
