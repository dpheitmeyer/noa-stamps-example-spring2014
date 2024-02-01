module.exports = function(eleventyConfig) {

    /* copy things in the "assets" directory */
    eleventyConfig.addPassthroughCopy("src/assets/**");

	return {
    	"dir" : {
        	"input": "src",
        	"output": "dist"
    	}
	};
};