<template>
    <div class="single-post-page">
        <section class="post">
            <h1 class="post-title">{{ loadedPost.title }}</h1>
            <div class="post-details">
                <div class="post-detail">Last updated on {{ loadedPost.updatedDate }}</div>
                <div class="post-detail">Written by: {{ loadedPost.author }} </div>
            </div>
            <p class="post-content"> {{ loadedPost.content }} </p>
        </section>
        <section class="post-feedback">
            <p>Let me know what you think about the post, send a mail to 
                <a href="mailto:blog@my-nuxt-blog.com">blog@my-nuxt-blog.com</a>
            </p>
        </section>
    </div>
</template>

<script>
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
            id: "99",
            author: 'Ludwing',
            title: 'My first dummy post (ID: '+ context.params.id +')',
            content: 'Ejemplo de uso del parámetro context de asyncData',
            previewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus turpis...',
            thumbnail: 'https://cnet2.cbsistatic.com/img/qCyN0wPErBBpX1XhxL3dlK9YJrA=/0x188:1732x1397/1092x0/2019/10/24/7a762519-5241-4a3d-a469-0a9c3def3d50/gettyimages-1088374446.jpg',
            updatedDate: new Date()
        }
      })
    }, 1000)
  }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>