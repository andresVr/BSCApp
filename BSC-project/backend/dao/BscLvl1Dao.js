Meteor.methods({
        insertarBscLvl1: function (mebVo){

            Bsclvl1.insert({
                meb_id:mebVo.meb_id,
                meb_strategy:mebVo.meb_strategy,
                meb_perspective:mebVo.meb_perspective,
                meb_orgLevel:mebVo.meb_orgLevel,


            });
        },

        updateStrategicObj:function (id,updater){
            Bsclvl1.update({
                    _id: id,

                }, {
                    $set: {
                        strategic_objective: updater
                    }
                }
            )
        },

        updateMeasuresObj:function (id,updater){
            console.log(updater);
            if(updater.label==='kpi'){
                Bsclvl1.update({
                        _id: id,

                    }, {
                        $set: {
                            kpi: updater.value
                        }
                    }
                )
            }
            if(updater.label==='defOp'){
                Bsclvl1.update({
                        _id: id,

                    }, {
                        $set: {
                            defOp: updater.value
                        }
                    }
                )
            }
            if(updater.label==='updateFrecuency'){
                Bsclvl1.update({
                        _id: id,

                    }, {
                        $set: {
                            updateFrecuency: updater.value
                        }
                    }
                )
            }
            if(updater.label==='captureFrecuency'){
                Bsclvl1.update({
                        _id: id,

                    }, {
                        $set: {
                            captureFrecuency: updater.value
                        }
                    }
                )
            }
            if(updater.label==='typeLvlUf'){
                Bsclvl1.update({
                        _id: id,

                    }, {
                        $set: {
                            lvlUfType: updater.value
                        }
                    }
                )
            }
            if(updater.label==='lvlUf'){
                Bsclvl1.update({
                        _id: id,

                    }, {
                        $set: {
                            lvlUf: updater.value
                        }
                    }
                )
            }
            if(updater.label==='anualGoal'){
                Bsclvl1.update({
                        _id: id,

                    }, {
                        $set: {
                            anualGoal: updater.value
                        }
                    }
                )
            }
            if(updater.label==='anualGoalType'){
                Bsclvl1.update({
                        _id: id,

                    }, {
                        $set: {
                            anualGoalType: updater.value
                        }
                    }
                )
            }
            if(updater.label==='responsable'){
                Bsclvl1.update({
                        _id: id,

                    }, {
                        $set: {
                            responsable: updater.value
                        }
                    }
                )
            }


        },




    }
)
