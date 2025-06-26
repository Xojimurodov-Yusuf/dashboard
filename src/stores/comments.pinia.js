import { defineStore } from "pinia";
import ProductGet from "@/api/ProductGet.js";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export const useCommmentsStore = defineStore("comment", {
  state: () => ({
    comments: [],
  }),

  actions: {
    async comentaryProduct(productId) {
      try {
        const productComent = await ProductGet.get(
          `/comments?postId=${productId}`
        );
        this.comments = productComent.data;
      } catch (errorComentary) {
        toast.error("Failed to load comments");
      }
    },

    async postComment(postId, { email, body }) {
      try {
        const productComment = await ProductGet.post("/comments", {
          postId,
          email,
          body,
        });
        this.comments.unshift(productComment.data);
        toast.success("Product loaded successfully");
      } catch (err) {
        toast.error("Failed to load comments");
        throw err;
      }
    },

    async deleteComment(commendId) {
      try {
        await ProductGet.delete(`/comments/${commendId}`);
        this.comments = this.comments.filter(
          (delComment) => delComment.id !== commendId
        );
        toast.success("Comment removed");
      } catch (errCommentDel) {
        toast.error("Failed to delete the Comment");
      }
    },
  },
});
