Template.BcgView.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('producto');
        self.subscribe('bcg');
    })
});
Template.BcgFormView.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('bcg');
        self.subscribe('producto');
    })
});



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

Template.FodaView.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('fortalezas');
        self.subscribe('oportunidades');
        self.subscribe('amenazas');
        self.subscribe('debilidades');
    })
});



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
        self.subscribe('do');

    })

});

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

Template.MebView.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('fa')
        self.subscribe('da')
        self.subscribe('fo')
        self.subscribe('do')
        self.subscribe('meb')
        self.subscribe('organigrama')
    })
});

Template.MebDepView.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('meb')
        self.subscribe('organigrama')
    })
});

Template.GroupingMeb.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('meb')
        self.subscribe('organigrama')
    })
});

Template.StrategyMapView.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('meb')

    })
});

Template.BscLvl1View.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('meb')
        self.subscribe('bsc_lvl_1')

    })
});

Template.DirObjEstView.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('meb')
        self.subscribe('bsc_lvl_1')

    })
});


