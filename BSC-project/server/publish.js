Meteor.publish('organigrama', function () {
    return Organigrama.find()
})

Meteor.publish('departamento', function () {
    return Departamento.find()
})

Meteor.publish('fortalezas', function () {
    return Fortalezas.find()
})

Meteor.publish('debilidades', function () {
    return Debilidades.find()
})

Meteor.publish('oportunidades', function () {
    return Oportunidades.find()
})

Meteor.publish('amenazas', function () {
    return Amenazas.find()
})

Meteor.publish('producto', function () {
    return Producto.find()
})

Meteor.publish('bcg', function () {
    return Bcg.find()
})

Meteor.publish('fo', function () {
    return Fo.find()
})

Meteor.publish('do', function () {
    return Do.find()
})