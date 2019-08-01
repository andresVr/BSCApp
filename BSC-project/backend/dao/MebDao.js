Meteor.methods({
        insertarMeb: function (mebVo){

            Meb.insert({
                cross_id:mebVo.cross_id,
                cross_name:mebVo.cross_name,
                cross_value:mebVo.cross_value,


            });
        },
        insertarMebDep: function (mebVo){

            Meb.insert({
                orgLevel:mebVo.lvl,
                strategy:mebVo.strategy,
                perspective:mebVo.perspective,
                unifiedList:mebVo.unifiedList,


            });
        },
        updateQualificationMeb:function (id,updater){
            if(updater[0]==='strategy') {
                Meb.update({
                        _id: id,

                    }, {
                        $set: {
                            strategy: updater[1]
                        }
                    }
                )
            }
            if(updater[0]==='perspective') {
                Meb.update({
                        _id: id,

                    }, {
                        $set: {
                            perspective: updater[1]
                        }
                    }
                )
            }
            if(updater[0]==='orgLevel') {
                Meb.update({
                        _id: id,

                    }, {
                        $set: {
                            orgLevel: updater[1]
                        }
                    }
                )
            }
            },
            removeMeb:function (id) {
                Meb.remove({_id:id});
            },
            updateResposibleMeb:function (id,updater){
                    Meb.update({
                            _id: id,

                        }, {
                            $set: {
                                reponsibleProcess: updater
                            }
                        }
                    )
                },
            updateIsUnified:function (id) {
            console.log(id);
                Meb.update({
                        _id: id,

                    }, {
                        $set: {
                            isUnified: true
                        }
                    }
                )

            }



    }
)
