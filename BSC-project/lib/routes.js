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

FlowRouter.route('/fa',{
    name:'fa',
    action(){
        BlazeLayout.render('MainLayout',{main:'FaView'});
    }
});


FlowRouter.route('/da',{
    name:'da',
    action(){
        BlazeLayout.render('MainLayout',{main:'DaView'});
    }
});



FlowRouter.route('/meb',{
    name:'meb',
    action(){
        BlazeLayout.render('MainLayout',{main:'MebView'});
    }
});



FlowRouter.route('/mebd',{
    name:'mebd',
    action(){
        BlazeLayout.render('MainLayout',{main:'MebDepView'});
    }
});

FlowRouter.route('/smap',{
    name:'smap',
    action(){
        BlazeLayout.render('MainLayout',{main:'StrategyMapView'});
    }
});

FlowRouter.route('/bsc_lvl_1',{
    name:'bsc_lvl_1',
    action(){
        BlazeLayout.render('MainLayout',{main:'BscLvl1View'});
    }
});