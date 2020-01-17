<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
      <PostPreview 
        id=1 
        thumbnail="https://cnet2.cbsistatic.com/img/qCyN0wPErBBpX1XhxL3dlK9YJrA=/0x188:1732x1397/1092x0/2019/10/24/7a762519-5241-4a3d-a469-0a9c3def3d50/gettyimages-1088374446.jpg"
        title="Hello there"
        previewText="This is my first post" />
      <PostPreview 
        id=2 
        thumbnail="https://cnet2.cbsistatic.com/img/qCyN0wPErBBpX1XhxL3dlK9YJrA=/0x188:1732x1397/1092x0/2019/10/24/7a762519-5241-4a3d-a469-0a9c3def3d50/gettyimages-1088374446.jpg"
        title="Hello there - the second time"
        previewText="This is my second post" />
      <PostPreview 
        id=3 
        thumbnail="https://cnet2.cbsistatic.com/img/qCyN0wPErBBpX1XhxL3dlK9YJrA=/0x188:1732x1397/1092x0/2019/10/24/7a762519-5241-4a3d-a469-0a9c3def3d50/gettyimages-1088374446.jpg"
        title="Hi!"
        previewText="This is my third post" />
    </section>
  </div>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components: {
    PostPreview
  }
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