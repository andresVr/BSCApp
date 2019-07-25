Template.Organigrama.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('organigrama')
    })
});

Template.DepartamentoView.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('organigrama')
        self.subscribe('departamento')
    })
});

