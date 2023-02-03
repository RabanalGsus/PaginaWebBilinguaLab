module.exports = (function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy
    ("./source/style.css");
    eleventyConfig.addPassthroughCopy
    ('./source/images/');
    config.addCollection('work', collection => {
        return collection
          .getFilteredByGlob('./src/work/*.md')
          .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
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