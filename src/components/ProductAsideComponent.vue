<script setup>
import router from '@/router';

function activeP() {
    router.push("/")
}
</script>

<template>
    <aside class="sidebar">
        <div>
            <h2 class="logo">VISION UI FREE</h2>
            <nav class="nav-section">
                <div @click="activeP" class="nav-item">
                    <img class="nav-icon" src="/images/default.svg" alt="home">
                    <p class="nav-text">Home</p>
                </div>
            </nav>
        </div>
    </aside>
</template>

<style>
.activePage {
    background-color: #1A1F37;
}

.nav-section {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.nav-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 12px;
    border-radius: 12px;
    cursor: pointer;
    transition: 250ms ease;
}

.nav-item:hover {
    background-color: #1A1F37;
}

.nav-text {
    font-size: 14px;
    font-weight: 500;
}

.nav-icon {
    width: 3rem;
    height: 3rem;
    background: #3b82f6;
    border-radius: 1.2rem;
    padding: 0.7rem;
}
</style>