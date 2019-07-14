Template.Organigrama.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('organigrama')
    })
});