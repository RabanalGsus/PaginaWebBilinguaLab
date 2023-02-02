module.exports = (function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy
    ("./source/style.css");
    
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