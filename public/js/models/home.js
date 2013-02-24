define(['underscore', 'backbone'], function(_, Backbone) {
    var Home = Backbone.Model.extend({
        

        initialize: function() {

        },

        defaults: {
            introduction: '1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates pariatur doloribus magni ullam beatae rem maxime debitis magnam vel eveniet. Inventore temporibus quia possimus eaque minima voluptatum soluta tempora dignissimos quos ex suscipit odit id corrupti in consequuntur ea maiores tempore sunt rem alias nesciunt nostrum neque facilis perspiciatis nemo? Inventore corporis deleniti porro labore corrupti similique nisi aut quos quo molestiae magnam eaque ipsum tenetur impedit recusandae perferendis suscipit earum. Excepturi nulla recusandae tenetur qui ratione illo harum. Officia adipisci consectetur debitis dolorem alias laborum perferendis illo perspiciatis consequatur dolores dicta quaerat facere asperiores omnis laudantium nesciunt error dolore assumenda quia molestias corporis distinctio culpa quae porro fugiat minima quisquam est. Labore odio beatae porro rem omnis mollitia sed architecto error nam assumenda? Aspernatur exercitationem doloremque odio. Rem temporibus ab sequi laudantium explicabo nobis itaque dolore molestias perferendis fugiat modi nemo cum earum cupiditate est alias soluta optio eaque quo laborum officiis iusto similique atque? Omnis hic repudiandae debitis praesentium consequuntur et dolorum impedit aspernatur suscipit commodi facilis dicta voluptatibus velit nobis eos ducimus esse quisquam voluptas corporis laborum porro odit voluptates. Laborum tempora eum quod natus suscipit quidem explicabo est beatae eaque totam doloremque atque! Molestias quam necessitatibus eveniet sit perferendis alias provident voluptatum incidunt a voluptatibus commodi molestiae ad eius expedita sed sint inventore ipsum libero fugit consectetur. Officiis nisi eum modi laboriosam adipisci eligendi aliquam aperiam dolores nam necessitatibus incidunt repellat voluptas quaerat eos delectus nostrum molestias ab fuga nesciunt tempora consequatur qui veritatis quis quae ex quidem ullam! Quisquam quos accusantium nulla vel aliquam inventore!',
            
            currentstatus: 'Contracting for Avvio Ltd nr. Henley-on-Thames',
            
            // TODO: Make an array of objects with either links to external pages or other routes within this site
            projects: [
                'Journog',
                'Farnborough Guide',
                'Nick Lewis Site',
                'Cool Projects',
                'Newington Village Hall'
                ],

            // TODO: Photography section needs some thought, especially on image storage                
            photography: 'A photo module will appear here very soon',
            writing: 'A series of articles about technology and how it is changing the world and my life so much, coming soon'
        }
    });

    return Home;
});
