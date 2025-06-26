<script setup>
import { ref, onMounted, computed } from "vue";
import { useProductsStore } from "@/stores/products.pinia.js"
import { useCommmentsStore } from "@/stores/comments.pinia";
import CreateProductComponent from "@/components/CreateProductComponent.vue";
import UpdateProductComponent from "@/components/UpdateProductComponent.vue";

const productComment = useCommmentsStore()
const products = useProductsStore();

onMounted(() => {
    products.getProduct();
});

const currentPage = ref(1);
const itemsPerPage = 6;

const totalPages = computed(() =>
    Math.ceil(products.products.length / itemsPerPage)
);

const paginatedPosts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return products.products.slice(start, start + itemsPerPage);
});

const comentaryProduct = async (id) => {
    await productComment.comentaryProduct(id);
}

const editingProduct = ref(null)

function edit(id) {
    editingProduct.value = id
}

function del(idDel) {
    products.deleteProduct(idDel)
}

const create = ref(false)
</script>

<template>
    <div class="title-createBtn">
        <h1>Your Products</h1>
        <div @click="create = true" class="nav-item-create">
            <img class="nav-icon" src="/images/outline.svg" alt="create">
            <p class="nav-text">Create Product</p>
        </div>
    </div>
    <p class="errorMessage">{{ products.error }}</p>
    <div class="products">
        <div v-for="post in paginatedPosts" :key="post.id" class="product" @click="comentaryProduct(post.id)">
            <div class="card-border">
                <img class="broken-img" src="/images/broken-img.png" alt="brokenImg">
                <div class="product-items">
                    <p class="post-title">{{ post.title.slice(0, 40) }}</p>
                    <p class="post-description">{{ post.body.slice(0, 150) }}</p>
                    <div class="card-edit-icons">
                        <button @click="del(post.id)" class="del-btn">
                            <svg class="del-icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path fill="red"
                                        d="M9.12856092,0 L11.102803,0.00487381102 C11.8809966,0.0985789507 12.5627342,0.464975115 13.1253642,1.0831551 C13.583679,1.58672038 13.8246919,2.17271137 13.8394381,2.81137259 L19.3143116,2.81154887 C19.6930068,2.81154887 20,3.12136299 20,3.50353807 C20,3.88571315 19.6930068,4.19552726 19.3143116,4.19552726 L17.478,4.195 L17.4783037,15.8224356 C17.4783037,18.3654005 16.529181,20 14.4365642,20 L5.41874994,20 C3.32701954,20 2.39315828,18.3737591 2.39315828,15.8224356 L2.393,4.195 L0.685688428,4.19552726 C0.306993166,4.19552726 0,3.88571315 0,3.50353807 C0,3.12136299 0.306993166,2.81154887 0.685688428,2.81154887 L6.15581653,2.81128823 C6.17048394,2.29774844 6.36057711,1.7771773 6.7098201,1.26219866 C7.23012695,0.494976667 8.04206594,0.0738475069 9.12856092,0 Z M16.106,4.195 L3.764,4.195 L3.76453514,15.8224356 C3.76453514,17.7103418 4.28461756,18.6160216 5.41874994,18.6160216 L14.4365642,18.6160216 C15.5759705,18.6160216 16.1069268,17.7015972 16.1069268,15.8224356 L16.106,4.195 Z M6.71521035,6.34011422 C7.09390561,6.34011422 7.40089877,6.64992834 7.40089877,7.03210342 L7.40089877,15.0820969 C7.40089877,15.464272 7.09390561,15.7740861 6.71521035,15.7740861 C6.33651508,15.7740861 6.02952192,15.464272 6.02952192,15.0820969 L6.02952192,7.03210342 C6.02952192,6.64992834 6.33651508,6.34011422 6.71521035,6.34011422 Z M9.44248307,6.34011422 C9.82117833,6.34011422 10.1281715,6.64992834 10.1281715,7.03210342 L10.1281715,15.0820969 C10.1281715,15.464272 9.82117833,15.7740861 9.44248307,15.7740861 C9.06378781,15.7740861 8.75679464,15.464272 8.75679464,15.0820969 L8.75679464,7.03210342 C8.75679464,6.64992834 9.06378781,6.34011422 9.44248307,6.34011422 Z M12.1697558,6.34011422 C12.5484511,6.34011422 12.8554442,6.64992834 12.8554442,7.03210342 L12.8554442,15.0820969 C12.8554442,15.464272 12.5484511,15.7740861 12.1697558,15.7740861 C11.7910605,15.7740861 11.4840674,15.464272 11.4840674,15.0820969 L11.4840674,7.03210342 C11.4840674,6.64992834 11.7910605,6.34011422 12.1697558,6.34011422 Z M9.17565461,1.38234438 C8.53434679,1.42689992 8.11102741,1.64646338 7.84152662,2.04385759 C7.6437582,2.33547837 7.5448762,2.58744977 7.52918786,2.81194335 L12.4673768,2.81085985 C12.4530266,2.51959531 12.3382454,2.26423777 12.1153724,2.01935991 C11.7693001,1.63911901 11.3851686,1.43266964 11.0215648,1.38397839 L9.17565461,1.38234438 Z">
                                    </path>
                                </g>
                            </svg>
                        </button>
                        <button class="edit-btn" @click="edit(post.id)"><img class="edit-icon" src="/images/pen.png"
                                alt="pen"></button>
                        <router-link class="router-product" :to="`/comment/${post.id}`"><img src="/images/comments.png"
                                alt="comment"></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="pagination-container">
        <button v-for="page in totalPages" :key="page" @click="currentPage = page"
            :class="{ active: currentPage === page }">
            {{ page }}
        </button>
    </div>
    <update-product-component v-if="editingProduct !== null" :editId="editingProduct" @close="editingProduct = null" />
    <create-product-component :create="create" @close="create = false" />
</template>

<style>
.errorMessage {
    color: red;
    font-size: 1.8rem;
    font-weight: 500;
}

.title-createBtn {
    display: flex;
    justify-content: center;
    align-items: center;
}

.product-posts {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
}

.products {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    flex-wrap: wrap;
    width: 1000px;
}

.product {
    width: 30rem;
    height: 30rem;
    padding: 0.5rem;
    border-radius: 2rem;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    background-image: linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB);
}

.card-border {
    background: rgb(5, 6, 45);
    border-radius: 17px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
}

.card-edit-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.edit-btn {
    background: none;
    position: absolute;
    left: 3.5rem;
    bottom: 1rem;
    border: none;
}

.edit-icon {
    width: 1.7rem;
    opacity: 0.5;
    transition: 450ms ease;
    cursor: pointer;
}

.edit-icon:hover {
    opacity: 1;
}

.router-product {
    position: absolute;
    left: 6rem;
    bottom: 1rem;
    transition: 450ms ease;
    opacity: 0.5;

    img {
        width: 2rem;
    }
}

.router-product:hover {
    opacity: 1;
}

.router-product::after {
    content: "Comments";
    position: absolute;
    left: 100%;
    top: 35%;
    transform: translateY(-50%) translateX(10px);
    padding: 4px 8px;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    color: white;
    font-size: 1.4rem;
    font-weight: 450;
}

.router-product:hover::after {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
}

.del-btn {
    position: absolute;
    left: 1rem;
    top: 90%;
    background: none;
    cursor: pointer;
    border: none;
}

.del-icon {
    width: 1.8rem;
    transition: 450ms ease;
    opacity: 0.5;
}

.del-icon:hover {
    opacity: 1;

    path {
        fill: rgb(255, 76, 76);
    }
}

.product-items {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
}

.broken-img {
    width: 40%;
}

.post-title {
    font-size: 2rem;
    width: 25rem;
    color: white;
    font-weight: 500;
    text-align: center;
}

.post-description {
    font-size: 1rem;
    color: white;
    width: 25rem;
    text-align: center;
}

.pagination-container {
    margin-top: 20px;
    text-align: center;
}

.pagination-container button {
    padding: 8px 12px;
    margin: 0 4px;
    border: 1px solid #0075FF;
    background-color: white;
    color: #0075FF;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.pagination-container button.active {
    background-color: #0075FF;
    color: white;
}

.nav-section {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.nav-item-create {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 12px;
    border-radius: 12px;
    cursor: pointer;
    transition: 250ms ease;
    position: relative;
    left: 35rem;
}

.nav-item-create:hover {
    background-color: #1A1F37;
}

.nav-text {
    font-size: 14px;
    font-weight: 500;
    color: white;
}

.nav-icon {
    width: 3rem;
    height: 3rem;
    background: #3b82f6;
    border-radius: 1.2rem;
    padding: 0.7rem;
}
</style>