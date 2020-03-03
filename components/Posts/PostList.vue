<template>
    <section class="post-list">
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
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>