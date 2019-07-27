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
