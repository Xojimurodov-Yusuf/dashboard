<script setup>
import { useCommmentsStore } from '@/stores/comments.pinia.js'

const productComments = useCommmentsStore();

function deletComment(commentId) {
    productComments.deleteComment(commentId)
}

</script>
<template>
    <div class="comment">
        <div class="product-coments" v-for="commentary in productComments.comments" :key="commentary.id">
            <div class="comentssss">
                <div class="profile">
                    <img width="20" src="/images/accaount.svg" alt="accaunt-icon">
                    <p class="coment-profile"> {{ commentary.email }}</p>
                </div>
                <div class="coments">
                    <img width="20" src="/images/coment.svg" alt="coment-icon">
                    <p class="coment-body">{{ commentary.body }}</p>
                </div>
                <button @click="deletComment(commentary.id)" class="del-comment">
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
            </div>
        </div>
    </div>
</template>

<style>
.comment {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    width: 65rem;
    gap: 2rem;
}

.comentssss {
    width: 30rem;
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    border-radius: 0.8rem;
    gap: 1rem;
    background-color: white;
    padding: 4rem;
    position: relative;
}

.product-coments {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
    gap: 14rem;
}

.coment-item {
    font-size: 1.8rem;
    font-weight: 500;
}

.profile {
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 1rem;
}

.coments {
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 1rem;
    width: 25rem;
}

.coment-profile {
    font-size: 1.4rem;
    font-weight: 500;
    color: #1c1a5e;
}

.coment-body {
    font-size: 1.2rem;
    font-weight: 500;
    color: black;
}

.del-comment {
    background: none;
    border: none;
    position: absolute;
    top: 85%;
    left: 90%;
    cursor: pointer;
    outline: none;
}
</style>