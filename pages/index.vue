<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>

export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
  // data() {
  //   return {
  //     loadedPosts: []
  //   }
  // },
  // created() {
  //   setTimeout(() => {
  //     return {
  //       loadedPosts: [
  //         {
  //           id: "1",
  //           author: 'Ludwing',
  //           title: 'My awesome post',
  //           content: 'Super amazing, thanks for that!',
  //           previewText: 'This is a preview text from my first post...',
  //           thumbnail: 'https://cnet2.cbsistatic.com/img/qCyN0wPErBBpX1XhxL3dlK9YJrA=/0x188:1732x1397/1092x0/2019/10/24/7a762519-5241-4a3d-a469-0a9c3def3d50/gettyimages-1088374446.jpg'
  //         },
  //         {
  //           id: "2",
  //           author: 'Ludwing',
  //           title: 'My second post',
  //           content: 'Super amazing, thanks for that!',
  //           previewText: 'This is a preview text from my second post...',
  //           thumbnail: 'https://cnet2.cbsistatic.com/img/qCyN0wPErBBpX1XhxL3dlK9YJrA=/0x188:1732x1397/1092x0/2019/10/24/7a762519-5241-4a3d-a469-0a9c3def3d50/gettyimages-1088374446.jpg'
  //         }
  //       ]
  //     }
  //   },1500)
  // }
  // asyncData(context, callback) {
  //   console.log('run asyncData')
  //   setTimeout(() => {
  //     callback(null, {loadedPosts: [
  //         {
  //           id: "1",
  //           author: 'Ludwing',
  //           title: 'My awesome post',
  //           content: 'Super amazing, thanks for that!',
  //           previewText: 'This is a preview text from my first post...',
  //           thumbnail: 'https://cnet2.cbsistatic.com/img/qCyN0wPErBBpX1XhxL3dlK9YJrA=/0x188:1732x1397/1092x0/2019/10/24/7a762519-5241-4a3d-a469-0a9c3def3d50/gettyimages-1088374446.jpg'
  //         },
  //         {
  //           id: "2",
  //           author: 'Ludwing',
  //           title: 'My second post',
  //           content: 'Super amazing, thanks for that!',
  //           previewText: 'This is a preview text from my second post...',
  //           thumbnail: 'https://cnet2.cbsistatic.com/img/qCyN0wPErBBpX1XhxL3dlK9YJrA=/0x188:1732x1397/1092x0/2019/10/24/7a762519-5241-4a3d-a469-0a9c3def3d50/gettyimages-1088374446.jpg'
  //         }
  //       ]
  //     })
  //   },1500)
  // }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  background-image: url('~assets/images/main-page-background.jpg');
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}


</style>