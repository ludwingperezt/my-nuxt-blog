<template>
    <div class="admin-new-post-page">
        <section class="new-post-form">
            <AdminPostForm @submit="onSubmitted" />
        </section>
    </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
    layout: 'admin',
    components: {
        AdminPostForm
    },
    methods: {
        onSubmitted(postData) {
            // Al URL de la base de datos realtime en firebase hay que agregar
            // el nombre de la colección + .json (firebase así lo requiere)
            axios.post('https://my-nuxt-blog-9b5f5.firebaseio.com/posts.json', {...postData, updatedDate: new Date()})
              .then(result => console.log(result))
              .catch(e => console.log(e))
        }
    }
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
