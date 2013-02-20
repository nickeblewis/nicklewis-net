// Person model
var Person = Backbone.Model.extend({
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
var PeopleCollection = Backbone.Collection.extend({
     model: Person
});

// view for all people
var PeopleView = Backbone.View.extend({
     tagName: 'ul',

    
     render: function() {          
          this.collection.each(function(person) {               
               var personView = new PersonView({ model: person });
               this.$el.append(personView.render().el);
          }, this);
          return this;
     }
});

// The View for a Person
var PersonView = Backbone.View.extend({
     tagName: 'li',
     template: _.template( $('#personTemplate').html() ),

     initialize: function() {
          this.render();
     },

     render: function() {
          this.$el.html( this.template(this.model.toJSON()) );
          return this;
     }
});

var person = new Person;
var personView = new PersonView({ model: person });

// var PeopleCollection = new PeopleCollection;
// peopleCollection.add(person);

var peopleCollection = new PeopleCollection([
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

var peopleView = new PeopleView({ collection: peopleCollection });
$(document.body).append(peopleView.render().el);






