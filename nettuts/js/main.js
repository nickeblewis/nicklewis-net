(function() {
     // Namespace 
     window.App = {
          Models: {},
          Collections: {},
          Views: {}
          // Helpers: {} - An option if we have many helpers?????
     };

     // HElper functions
     // This little guy helps do away with repitition of loads and loads of _.template everywhere
     window.template = function(id) {
          return _.template($('#' + id).html());
     };

  

     // Person model
     App.Models.Person = Backbone.Model.extend({
          defaults: {
               firstName: 'John',
               lastName: 'Doe',
               age: 30,
               occupation: 'worker'
          },
          
          fullName: function() {
               return this.get('first') + ' ' + this.get('lastName');
          },
          
          validate: function(attrs) {
               if ( attrs.age < 0) {
                    return 'Age must be positive, come on man!';
               }

               if ( attrs.name === '' ) {
                    return 'Every person must have a name otherwise they are anon!';
               }
          }
     });

     // A collection of people
     App.Collections.People = Backbone.Collection.extend({
          model: App.Models.Person
     });

     // A view for all people
     App.Views.People = Backbone.View.extend({
          tagName: 'ul',
         
          // template: Should we move the template from below to here? Would this explain odd rendering of list?
          render: function() {
               this.collection.each(function(person) {
                    var personView = new App.Views.Person({ model: person });
                    
                    // Here we chain the PeopleView to the Person view
                    this.$el.append(personView.render().el);
               }, this);
               
               // FIND OUT: Not quite sure what the above pattern implies????
               
               // Render should always have one of these, which makes things chainable
               return this;
          }
     });

     // The View for a Person
     App.Views.Person = Backbone.View.extend({
          tagName: 'li',
          
          // Should the below template be moved from here into the collection? Doesn't make complete sense!
          template: template('personTemplate'),
         
          render: function() {
               this.$el.html( this.template(this.model.toJSON()) );
               
               // Render should always have one of these, which makes things chainable
               return this;
          }
     });

     // Test harness, now you will see an unordered list of people
     //var person = new Person;
     //var personView = new PersonView({ model: person });

     // var PeopleCollection = new PeopleCollection;
     // peopleCollection.add(person);

     // Create a collection of people, note we rely on the defaults for occupation
     peopleCollection = new App.Collections.People([
          {          
               firstName: 'Nick',
               lastName: 'Lewis',
               age: 40
          },
          {
               firstName: 'Tina',
               lastName: 'Lewis',
               age: 44
          },
          {
               firstName: 'Tina',
               lastName: 'Lewis',
               age: 44
          },
          {
               firstName: 'Tina',
               lastName: 'Lewis',
               age: 44
          },
          {
               firstName: 'Tina',
               lastName: 'Lewis',
               age: 44
          }
     ]);

     //var person2 = new Person({ name: 'Nick LEwis', age: 40 });
     //var personView2 = new PersonView({ model: person2 });

     //console.log(peopleCollection);

     var peopleView = new App.Views.People({ collection: peopleCollection });
     $(document.body).append(peopleView.render().el);

     console.log(App.Collections);
})();




