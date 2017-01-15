Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn() { return Meteor.subscribe('posts') }
});
Router.onBeforeAction('dataNotFound', {only: 'postPage'});

Router.route('/', {name: 'postsList'});
Router.route('/posts/:_id', {
    name: 'postPage',
    data() { return Posts.findOne(this.params._id) }
});
