
<template>
    <div class="avatar-container">
      <img
      class="avatar-img"
        :src="url"
        :style="{
          width: size + 'px',
          height: size + 'px',
        }"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      url: {
        type: String,
        default: "",
      },
      size: {
        type: Number,
        default: 100
      },
    },
  };
  </script>
  
  <style scoped>
.avatar-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar-img {
      object-fit: cover;
      border-radius: 50%;
  }
  </style>