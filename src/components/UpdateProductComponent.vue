<script setup>
import { defineEmits, defineProps, ref, watch, computed } from "vue";
import { useProductsStore } from "@/stores/products.pinia.js"
const productsStore = useProductsStore()
import { toast } from "vue3-toastify"
import "vue3-toastify/dist/index.css"

const props = defineProps({
    editId: Number
})

const emit = defineEmits(['close'])

const editingProduct = computed(() => {
    return productsStore.products.find(productId => productId.id === props.editId)
})

const productName = ref('')
const productDescription = ref('')

watch(editingProduct, (newEditProduct) => {
    if (newEditProduct) {
        productName.value = newEditProduct.title
        productDescription.value = newEditProduct.body
    }
}, { immediate: true })

async function saveProduct() {
    if (productName.value.length < 4) toast.warning("Enter information to update")
    if (productDescription.value.length < 10) {
        toast.warning("Enter information to update")
        return;
    } else {
        await productsStore.putProduct(props.editId, {
            title: productName.value,
            body: productDescription.value
        })
        toast.success("Product updated successfully")
        emit('close')
    }

}
</script>

<template>
    <div class="container">
        <div class="editProductDiv">
            <form>
                <label class="productName">Name:</label>
                <input class="newProductName" maxlength="20" v-model="productName" type="text">
                <label class="productBody">Description:</label>
                <textarea class="newProductDescription" maxlength="100" v-model="productDescription"></textarea>
            </form>

            <div class="buttons">
                <button class="cansel-button" @click="emit('close')">Cansel</button>
                <button class="save-button" @click="saveProduct">Save</button>
            </div>
        </div>
    </div>
</template>

<style>
.editProductDiv {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 45rem;
    padding: 2rem;
    background-color: white;
    border-radius: 0.8rem;
}

.productName {
    font-size: 1.8rem;
    color: darkblue;
    font-weight: 500;
}

.productBody {
    font-size: 1.8rem;
    color: darkblue;
    font-weight: 500;
}

.newProductName {
    width: 30rem;
    padding: 1rem;
    font-size: 1.6rem;
    border-radius: 0.8rem;
    border: 1px solid gray;
    color: darkblue;
    outline: none;
}

.newProductDescription {
    width: 30rem;
    height: 20rem;
    padding: 1rem;
    font-size: 1.6rem;
    border-radius: 0.8rem;
    border: 1px solid gray;
    color: darkblue;
    resize: none;
    outline: none;
}

.buttons {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 1rem;
}

.cansel-button {
    width: 10rem;
    padding: 1rem;
    border-radius: 0.8rem;
    background-color: gray;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 450ms ease;
}

.cansel-button:hover {
    background-color: black;
}

.save-button {
    width: 10rem;
    padding: 1rem;
    background-color: #5B42F3;
    color: white;
    border: none;
    border-radius: 0.8rem;
    opacity: 0.8;
    transition: 450ms ease;
    cursor: pointer;
}

.save-button:hover {
    opacity: 1;
}
</style>