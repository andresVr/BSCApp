

Template.FoView.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('fortalezas');
        self.subscribe('oportunidades');
        self.subscribe('fo');

    })
});


Template.DoView.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('debilidades');
        self.subscribe('oportunidades');

    })

});
