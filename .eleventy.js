module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('_src/style.css')
    eleventyConfig.addPassthroughCopy('_src/imgages')
    return {
        dir: {
            input: "_src"
       }
    }
}