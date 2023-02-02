module.exports = (function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy
    ("./source/style.css");
    eleventyConfig.addPassthroughCopy
    ('./source/images/');
    
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