<template>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1"
aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal" >
<div class="modal-dialog modal-xl" role="document">
  <div class="modal-content border-0">
    <div class="modal-header bg-dark text-white">
      <h5 class="modal-title" id="exampleModalLabel">
        <span>新增產品</span>
      </h5>
      <button type="button" class="btn-close"
              data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <div class="row">
        <div class="col-sm-4">
          <div class="mb-3">
            <label for="image" class="form-label">輸入圖片網址</label>
            <input type="text" class="form-control" id="image"
            v-model="tempProduct.imageUrl"
                    placeholder="請輸入圖片連結">
          </div>
          <div class="mb-3">
            <label for="customFile" class="form-label">或 上傳圖片
              <i class="fas fa-spinner fa-spin"></i>
            </label>
            <input type="file" id="customFile" class="form-control"
            ref="fileInput"
            @change="uploadFile">
          </div>
          <img class="img-fluid" alt="">
          <!-- 延伸技巧，多圖 -->
          <div class="mt-5">
            <div class="mb-3 input-group" >
              <input type="url" class="form-control form-control"
              v-model="tempProduct.imagesUrl"
                      placeholder="請輸入連結">
              <button type="button" class="btn btn-outline-danger">
                移除
              </button>
            </div>
            <div>
              <button class="btn btn-outline-primary btn-sm d-block w-100">
                新增圖片
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="mb-3">
            <label for="title" class="form-label">標題</label>
            <input type="text" class="form-control" id="title"
            v-model="tempProduct.title"

                    placeholder="請輸入標題" >
          </div>

          <div class="row gx-2">
            <div class="mb-3 col-md-6">
              <!-- <label for="category" class="form-label">分類</label>
              <input type="text" class="form-control" id="category"
              v-model="tempProduct.category"
                      placeholder="請輸入分類"> -->
              <label for="category">類別</label>
                  <select
                      class="form-control"
                      :class="{ 'is-invalid' : failed }"
                      v-model="tempProduct.category"
                      >
                        <option value="" disabled></option>
                        <option
                          v-for="item in category"
                          :key="item"
                          :value="item"
                        >{{ item }}</option>
                      </select>
            </div>
            <div class="mb-3 col-md-6">
              <label for="price" class="form-label">單位</label>
              <input type="text" class="form-control" id="unit"
              v-model="tempProduct.unit"
                      placeholder="請輸入單位">
            </div>
          </div>

          <div class="row gx-2">
            <div class="mb-3 col-md-6">
              <label for="origin_price" class="form-label">原價</label>
              <input type="number" class="form-control" id="origin_price"
              v-model.number="tempProduct.origin_price"
                      placeholder="請輸入原價">
            </div>
            <div class="mb-3 col-md-6">
              <label for="price" class="form-label">售價</label>
              <input type="number" class="form-control" id="price"
              v-model.number="tempProduct.price"
                      placeholder="請輸入售價">
            </div>
          </div>
          <hr>

          <div class="mb-3">
            <label for="description" class="form-label">產品描述</label>
            <textarea type="text" class="form-control" id="description"
            v-model="tempProduct.description"
            placeholder="請輸入產品描述"></textarea>
          </div>
          <div class="mb-3">
            <label for="content" class="form-label">說明內容</label>
            <textarea type="text" class="form-control" id="content"
            v-model="tempProduct.content"
                      placeholder="請輸入產品說明內容"></textarea>
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox"
                      :true-value="1"
                      :false-value="0"
                      id="is_enabled"
                      v-model="tempProduct.is_enabled">
              <label class="form-check-label" for="is_enabled">
                是否啟用
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-secondary"
              data-bs-dismiss="modal">取消
      </button>
      <button type="button" class="btn btn-primary"
      @click="$emit('update-product',tempProduct)">確認</button>
    </div>
  </div>
</div>
</div>
</template>

<script>
// import Modal from 'bootstrap/js/dist/modal';
import modalMixin from '../../mixins/modalMixin';

export default {
  props: { // 在內層props 定義”product” 來接收
    product: {
      type: Object,
      default() { return {}; },
    },
  },
  watch: { // props觸發watch監聽
    // product 有資料就傳給tempProduct
    product() {
      this.tempProduct = this.product;
    },
  },
  data() {
    return {
      modal: {},
      tempProduct: {},
      category: ['K金珠寶', '裸石裸鑽', '設計系列'],
    };
  },
  methods: {
    // showModal() {
    //   this.modal.show();
    // },
    // hideModal() {
    //   this.modal.hide();
    // },
    uploadFile() { // 這是方法
      const uploadedFile = this.$refs.fileInput.files[0]; // 這是要上傳的file
      const formData = new FormData(); // js方法定義一個表單
      formData.append('file-to-upload', uploadedFile); // 表單增加上傳用的欄位  把要上傳的file帶入
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(url, formData).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          this.tempProduct.imageUrl = response.data.imageUrl;
        }
      });
    },
  },
  // mounted() {
  //   this.modal = new Modal(this.$refs.modal);
  // },
  mixins: [modalMixin],
};

</script>
