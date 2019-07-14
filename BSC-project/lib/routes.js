FlowRouter.route('/',{
    name:'home',
    action(){
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/organigrama',{
    name:'organigrama',
    action(){
        BlazeLayout.render('MainLayout',{main:'Organigrama'});
    }
});
