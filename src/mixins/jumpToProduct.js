export default {
    computed: {
        findBlogById: function() {
            return this.blogs.filter((blog) => {
                return blog.id==this.query;
            });
        }
    }
};