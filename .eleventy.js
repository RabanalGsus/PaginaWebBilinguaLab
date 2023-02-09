module.exports = (function(eleventyConfig) { const sortByDisplayOrder = require('./source/utils/sort-by-display-order.js');
    eleventyConfig.addPassthroughCopy
    ("./source/style.css");
    eleventyConfig.addPassthroughCopy
    ('./source/images/');
    
  // Returns work items, sorted by display order
    eleventyConfig.addCollection('work', collection => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./source/work/*.md'));
  });
  
  // Returns work items, sorted by display order then filtered by featured
    eleventyConfig.addCollection('featuredWork', collection => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./source/work/*.md')).filter(
      x => x.data.featured
    );
  });
  
    
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',

        dir:{
            input:"source",
            output: "public",
        },
    };

});