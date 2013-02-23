(function() {
     // Namespace 
     window.App = {
          Models: {},
          Collections: {},
          Views: {},
          Router: {}          
     };
     
     var vent = _.extend({}, Backbone.Events);

     console.log( vent );

     App.Views.Appointment = Backbone.View.extend({
          initialize: function() {
               vent.on('appointment:show', this.show, this);
               
          },

          show: function(id) {
               console.log('showing the appointment with id of ' + id);
          }
     })
     App.Router = Backbone.Router.extend({
          routes: {
               '': 'index',
               'appointment/:appointmentId': 'showAppointment',
               'show/:id': 'show',
               'download/:id/*filename': 'download',
               'search/:query': 'search',
               '*other': 'default'
          },

          index: function() {
               console.log( 'Hi there from the index page' );
          }, 

          show: function(id) {
               console.log('Showtime=' + id);
          },

          download: function(id,filename) {
               console.log('download=' + id);
               console.log('filename=' + filename);
          },

          search: function(query) {
               console.log('query=' + query);
          },

          showAppointment: function(appointmentId) {
               vent.trigger('appointment:show', appointmentId);
          },

          default: function(other) {
               alert('what do you mean? ' + other);
          }


     });

     new App.Views.Appointment;
     new App.Router;
     Backbone.history.start();
})();




