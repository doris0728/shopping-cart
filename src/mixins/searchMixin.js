export default {
    computed: {
        filteredBlogs: function() {
            return this.blogs.filter((blog) => {
                return blog.name.match(this.search);
            });
        }
    }
};