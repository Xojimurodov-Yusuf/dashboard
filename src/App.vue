<script setup>
import ProductAsideComponent from "./components/ProductAsideComponent.vue";
</script>

<template>
  <div class="container">
    <div class="header-aside">
      <div class="aside-main">
        <product-aside-component @openCreate="create = true" />
        <main>
          <section>
            <div class="container">
              <div class="product-posts">
                <router-view />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<style>
.header-aside {
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 1rem 0rem;
}

.aside-main {
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 1rem;
  width: 100%;
  margin: 0 auto;
}

main {
  margin: 6rem auto;
}

h1 {
  color: white;
  font-size: 3.8rem;
  text-align: center;
  width: 35rem;
}

.sidebar {
  width: 25rem;
  height: 86rem;
  background: linear-gradient(to bottom, #0f172a, #020617);
  color: white;
  padding: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1.2rem;
  box-shadow: 0 4px 12px rgba(0, 117, 255, 0.08);
  transition: box-shadow 0.3s ease;
}

.sidebar:hover {
  box-shadow: 0 6px 20px rgba(0, 117, 255, 0.12);
}

.logo {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 24px;
}

.search-input {
  width: 40rem;
  padding: 1rem;
  border-radius: 1.5rem;
  background-color: #0F1535;
  border: 1px solid #474747;
  font-size: 1.2rem;
  color: white;
  outline: none;
}
</style>