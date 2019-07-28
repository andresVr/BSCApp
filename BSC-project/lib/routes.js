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

FlowRouter.route('/foda',{
    name:'foda',
    action(){
        BlazeLayout.render('MainLayout',{main:'FodaView'});
    }
});


FlowRouter.route('/bcg',{
    name:'bcg',
    action(){
        BlazeLayout.render('MainLayout',{main:'BcgView'});
    }
});

FlowRouter.route('/fo',{
    name:'fo',
    action(){
        BlazeLayout.render('MainLayout',{main:'FoView'});
    }
});



FlowRouter.route('/do',{
    name:'do',
    action(){
        BlazeLayout.render('MainLayout',{main:'DoView'});
    }
});

