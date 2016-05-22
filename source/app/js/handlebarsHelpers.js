/**********************************************************************************************************************
 ******************************** Ed's Amazing Collection of Handlebars Helpers! **************************************
 *********************************************************************************************************************/

/**
 * Slug Generator
 *      Creates a slug for links based on parameters passed in
 ***/
Handlebars.registerHelper('slug_generator', function (type, name, id) {
    var slug = type + '-' + name;
    slug += slug.length > 0 ? '-' + id : id;
    slug = slug.toLowerCase();
    slug = slug.replace(/[^a-zA-Z0-9]+/g, '-');
    return slug;
});

/**
 * Type Formatter
 *      Takes in type from JSON and outputs it in neater format.
 ***/
Handlebars.registerHelper('type_formatter', function (type) {
    switch (type) {
        case 'album':
            return 'Album Cover';
            break;
        case 'flyer':
            return 'Flyer/Poster';
            break;
        case 'project':
            return 'Case Study';
            break;
        case 'website':
            return 'Website';
            break;
        default:
            return ''
    }
});


