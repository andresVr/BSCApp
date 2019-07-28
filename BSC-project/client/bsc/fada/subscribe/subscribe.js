

Template.FaView.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('fortalezas');
        self.subscribe('amenazas');
        self.subscribe('fa');

    })
});


Template.DaView.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('debilidades');
        self.subscribe('amenazas');
        self.subscribe('da');

    })

});
