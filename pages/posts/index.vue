<template>
    <div class="posts-page">
        <PostList :posts=loadedPosts />
    </div>
</template>

<script>
export default {
    middleware: 'log',
    // fetch(context) {
    //     if (context.store.state.loadedPosts.length > 0) {
    //         return null
    //     }
    //     return new Promise((resolve, reject) => {
    //         const timeWait = Math.floor(Math.random()*(2000-500+1)+500)
    //         setTimeout(() => {
    //             resolve({
    //                 loadedPosts: [
    //                     {
    //                         id: "99",
    //                         author: 'Ludwing',
    //                         title: 'My first dummy post',
    //                         content: 'Lorem ipsum dolor sit amet!',
    //                         previewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus turpis...',
    //                         thumbnail: 'https://cnet2.cbsistatic.com/img/qCyN0wPErBBpX1XhxL3dlK9YJrA=/0x188:1732x1397/1092x0/2019/10/24/7a762519-5241-4a3d-a469-0a9c3def3d50/gettyimages-1088374446.jpg'
    //                     },
    //                     {
    //                         id: "100",
    //                         author: 'Ludwing',
    //                         title: 'My second dummy post',
    //                         content: 'Lorem ipsum dolor sit amet!',
    //                         previewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus turpis...',
    //                         thumbnail: 'https://cnet2.cbsistatic.com/img/qCyN0wPErBBpX1XhxL3dlK9YJrA=/0x188:1732x1397/1092x0/2019/10/24/7a762519-5241-4a3d-a469-0a9c3def3d50/gettyimages-1088374446.jpg'
    //                     },
    //                     {
    //                         id: "101",
    //                         author: 'Ludwing',
    //                         title: 'Dummy post - the end',
    //                         content: 'Lorem ipsum dolor sit amet!',
    //                         previewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus turpis...',
    //                         thumbnail: 'https://cnet2.cbsistatic.com/img/qCyN0wPErBBpX1XhxL3dlK9YJrA=/0x188:1732x1397/1092x0/2019/10/24/7a762519-5241-4a3d-a469-0a9c3def3d50/gettyimages-1088374446.jpg'
    //                     }
    //                 ]
    //             })
    //         }, timeWait)
    //         // reject(new Error())
    //     })
    //     .then(data => {
    //         context.store.commit('setPosts', data.loadedPosts)
    //     })
    //     .catch(e => {
    //         context.error(new Error())
    //     })
    // },
    computed: {
        loadedPosts() {
            return this.$store.getters.loadedPosts
        }
    }
}
</script>

<style scoped>
.post-page {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>