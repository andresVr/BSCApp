Meteor.methods({
        insertarMeb: function (MebVo){

            Meb.insert({
                cross_id:MebVo.cross_id,
                cross_name:MebVo.cross_name,
                cross_value:MebVo.cross_value,


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
            }



    }
)
