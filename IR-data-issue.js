if (Meteor.isClient) {
  UI.registerHelper('helper', function(template, data) {
    Log("Template " + template + ' rendered with ' + data);
  });
  
  Router.configure({
    layoutTemplate: 'layout'
  })
  
  Router.map(function() {
    this.route('a', {
      path: '/',
      data: 'A data'
    })

    this.route('b', {
      data: 'B data'
    })
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
