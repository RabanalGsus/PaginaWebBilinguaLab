module.exports = (function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy
    ("./source/style.css");
    
    return {
        dir:{
            input:"source",
            output: "public",
        },
    };

});