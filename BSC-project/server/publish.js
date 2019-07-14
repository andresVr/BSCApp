Meteor.publish('organigrama', function () {
    return Organigrama.find()
})