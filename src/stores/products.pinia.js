import { defineStore } from "pinia";
import ProductGet from "@/api/ProductGet.js";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export const useProductsStore = defineStore("product", {
  state: () => ({
    products: [],
    error: "",
  }),

  actions: {
    async getProduct() {
      try {
        const productsPost = await ProductGet.get("/posts");
        this.products = productsPost.data;
      } catch (error) {
        this.error = "Server bilan bog'lana olmadik " + error;
      }
    },

    async postProduct(data) {
      try {
        const postPr = await ProductGet.post("/posts", data);
        this.products.unshift(postPr.data);
        toast.success("Product loaded successfully");
      } catch (err) {
        toast.error("Failed to load products");
        throw err;
      }
    },

    updateProductLocally(productId, updatedData) {
      const findProduct = this.products.find(
        (newProductID) => newProductID.id === productId
      );
      if (findProduct) Object.assign(findProduct, updatedData);
      else toast.error("Product not found");
    },

    async putProduct(productId, updatedData) {
      try {
        const response = await ProductGet.put(
          `/posts/${productId}`,
          updatedData
        );
        this.updateProductLocally(productId, response.data);
      } catch (error) {
        toast.error("Failed to update your information: " + error);
      }
    },

    async deleteProduct(idDel) {
      try {
        await ProductGet.delete(`/posts/${idDel}`);
        this.products = this.products.filter(
          (delProduct) => delProduct.id !== idDel
        );
        toast.success("Product removed");
      } catch (delErr) {
        toast.error("Failed to delete the product");
      }
    },
  },
});
