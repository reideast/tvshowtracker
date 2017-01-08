Meteor.publish('posts', function() {
    return Posts.find(); // for now, just publish/serve all posts to the client
});