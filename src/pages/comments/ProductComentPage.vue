<script setup>
import ProductCommentsComponent from './components/ProductCommentsComponent.vue';
import { onMounted, computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useProductsStore } from '@/stores/products.pinia.js'
import { useCommmentsStore } from '@/stores/comments.pinia';
import CommentCreateComponent from './components/CommentCreateComponent.vue';

const route = useRoute()
const store = useProductsStore()
const commentStore = useCommmentsStore()
const productId = route.params.id
const post = computed(() =>
    store.products.find((item) => item.id == productId))

onMounted(() => {
    commentStore.comentaryProduct(productId)
})

const createComment = ref(false)
</script>

<template>
    <div class="title-createBtn">
        <h1>Your Coments</h1>
        <div @click="createComment = true" class="nav-item-create">
            <img class="nav-icon" src="/images/outline.svg" alt="create">
            <p class="nav-text">Create Comment</p>
        </div>
    </div>
    <div v-if="post" class="product-coment">
        <div class="product">
            <div class="card-border">
                <img class="broken-img" src="/images/broken-img.png" alt="brokenImg">
                <div class="product-items">
                    <p class="post-title">{{ post.title.slice(0, 40) }}</p>
                    <p class="post-description">{{ post.body }}</p>
                </div>
            </div>
        </div>
        <product-comments-component />
    </div>
    <comment-create-component :postId="Number(productId)"
        @submit="(data) => commentStore.postComment(data.postId, data)" :createComment="createComment"
        @close="createComment = false" />
</template>

<style>
.product-coment {
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 1.8rem;
}

.product {
    width: 30rem;
    height: 30rem;
    padding: 2rem;
    background: red;
    border-radius: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
}

.product-items {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
}

.broken-img {
    width: 30%;
}

.post-title {
    font-size: 1.8rem;
    width: 20rem;
    color: white;
    font-weight: 500;
    text-align: center;
}

.post-description {
    font-size: 1.2rem;
    color: white;
    width: 20rem;
    text-align: center;
}
</style>