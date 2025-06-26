<script setup>
import { ref } from 'vue';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const props = defineProps({
    createComment: Boolean,
    postId: Number
})

const emit = defineEmits(['close', 'submit'])

const email = ref("")
const comment = ref("")

function submitComent() {
    if (!email.value && !comment.value) return toast.warning("Iltimos Formni toldiring")
    if(comment.value.length < 4) return toast.warning("Fikringizni toliqroq kiriting")

    emit("submit", {
        postId: props.postId,
        email: email.value,
        body: comment.value
    })

    email.value = ""
    comment.value = ""
    emit("close")
}
</script>

<template>
    <div v-if="createComment" class="create-comment-div">
        <button class="close-icon" @click="emit('close')"><img width="20" src="/images/cansel.svg"
                alt="canselIcon"></button>
        <form @submit.prevent="submitComent" class="create-comment-form">
            <input v-model="email" maxlength="40" class="admin-email" type="email" placeholder="Type Email">
            <textarea v-model="comment" maxlength="100" class="admin-comment" type="text"
                placeholder="Type Comment"></textarea>
            <button class="submit-comment" type="submit">Publicate Comment</button>
        </form>
    </div>
</template>

<style>
.create-comment-div {
    width: 40rem;
    height: 38rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(135deg, #00e0ff, #8e2de2);
    border-radius: 0.8rem;
}

.create-comment-form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
}

.admin-email {
    width: 25rem;
    padding: 1.5rem;
    font-size: 1.6rem;
    color: darkblue;
    border: 1px solid darkblue;
    outline: none;
    border-radius: 0.8rem;
}

.admin-comment {
    width: 25rem;
    padding: 1.5rem;
    height: 15rem;
    font-size: 1.6rem;
    color: darkblue;
    border: 1px solid darkblue;
    outline: none;
    border-radius: 0.8rem;
    resize: none;
}

.close-icon {
    border: none;
    background: none;
    position: relative;
    left: 93%;
    top: 2%;
    cursor: pointer;
}

.submit-comment{
    width: 20rem;
    padding: 1rem;
    border-radius: 0.8rem;
    border: 1px solid white;
    outline: none;
    font-size: 1.8rem;
    color: white;
    transition: 450ms ease;
    background: none;
    cursor: pointer;
    margin-top: 2rem;
}

.submit-comment:hover{
    background-color: white;
    color: black;
}
</style>