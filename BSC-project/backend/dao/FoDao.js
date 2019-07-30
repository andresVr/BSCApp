import {calcEquivalence} from "../vo/FodoFadaFunctions";
Meteor.methods({
        insertarFo: function (foVo){

            Fo.insert({
                fortitude:foVo[0],
                id_fortitude:foVo[1],
                opportunity:foVo[2],
                id_opportunity:foVo[3],
                qualification:foVo[4],
                equivalence:calcEquivalence(foVo[4])

            });
        },
        updateQualification:function (foIds,updater) {
            Fo.update({id_fortitude:foIds[0],
                id_opportunity:foIds[1]},{
                $set: {
                    qualification:updater,
                    equivalence:calcEquivalence(updater)

            }
            }
        )
        },
        list:function () {
          return  Fo.find({});
        }


    }
)

