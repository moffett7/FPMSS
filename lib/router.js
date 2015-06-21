Router.configure({
layoutTemplate: 'layout',
loadingTemplate: 'loading',
waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'loginSplash'});
Router.route('/posts', {name: 'postsList'});
Router.route('/assets', {name: 'assetsList'});
/*
Router.onBeforeAction(function() {
    if (!Meteor.user() && this.ready())
        return this.redirect('/');
}, {except: ['/admin']}); */