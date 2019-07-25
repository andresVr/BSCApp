Template.FodaView.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('fortalezas');
        self.subscribe('oportunidades');
        self.subscribe('amenazas');
        self.subscribe('debilidades');
    })
});

