<script setup>
import { defineProps, defineEmits } from "vue";
import { ref } from "vue";
import { useProductsStore } from "@/stores/products.pinia.js"
import { toast } from "vue3-toastify"
import "vue3-toastify/dist/index.css"

const createProduct = useProductsStore()
const productName = ref('');
const productInfo = ref('');

function yuborish() {
    if (productName.value === '' || productInfo.value === '') {
        toast.warning("Fill in the form");
        return;
    } else if (productName.value.length <= 4 && productInfo.value.length <= 10) {
        toast.warning("Please give more details about your product")
        return
    }
    createProduct
        .postProduct({
            title: productName.value,
            body: productInfo.value
        })
        .then(() => {
            productName.value = "";
            productInfo.value = "";
            emit('close')
        })
}

const props = defineProps({
    create: Boolean
})

const emit = defineEmits(['close'])
</script>

<template>
    <div v-if="create" class="create-product-form">
        <button class="close-icon" @click="emit('close')"><img width="20" src="/images/cansel.svg"
                alt="canselIcon"></button>
        <form @submit.prevent="createtovar">
            <label class="create-product-label">Product Information</label>
            <input v-model=productName maxlength="30" class="product-name-input" type="text" placeholder="Product Name">
            <textarea v-model="productInfo" maxlength="100" class="product-description-input"
                placeholder="Product Description"></textarea>
            <button type="submit" @click="yuborish" class="create-btn">Create Product</button>
        </form>
    </div>

</template>

<style>

.create-product-form {
    width: 50rem;
    height: 41rem;
    border-radius: 0.8rem;
    background: linear-gradient(to bottom, #0f172a, #020617);
    box-shadow: 0 4px 12px rgba(0, 117, 255, 0.08);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    padding: 4rem;
}

.create-product-label {
    font-size: 1.8rem;
    font-weight: 500;
    color: white;
}

.product-name-input {
    width: 35rem;
    padding: 1.5rem;
    background-color: white;
    border-radius: 0.8rem;
    outline: none;
    border: none;
    font-size: 1.4rem;
}

.product-description-input {
    width: 35rem;
    height: 10rem;
    padding: 1.5rem;
    background-color: white;
    border-radius: 0.8rem;
    outline: none;
    border: none;
    font-size: 1.4rem;
    resize: none;
}

.create-btn {
    width: 20rem;
    padding: 2rem;
    border: 1px solid white;
    background: none;
    color: white;
    font-weight: 500;
    font-size: 1.6rem;
    transition: 450ms ease;
    border-radius: 0.8rem;
    cursor: pointer;
}

.create-btn:hover {
    background-color: white;
    color: #0f172a;
    box-shadow: 0 4px 12px white;
}

.close-icon {
    border: none;
    background: none;
    position: relative;
    left: 93%;
    top: 2%;
    cursor: pointer;
}
</style>