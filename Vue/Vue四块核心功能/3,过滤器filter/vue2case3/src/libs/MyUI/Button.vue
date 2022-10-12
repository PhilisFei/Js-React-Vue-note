<template>
  <button :class="['my-btn', btnStyle]">
    <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'MyBtn',
    props: {
        btnStyle: String
    }
}
</script>

<style>
    .my-btn {
      height: 34px;
      padding: 0 15px;
      border: none;
      outline: none;
      background-color: #000;
      color: #fff;
    }
  
    .btn-primary.btn-primary {
      background-color: blue;
      color: #fff;
    }
  
    .btn-primary.btn-danger {
      background-color: red;
      color: #fff;
    }
  
    .btn-primary.btn-success {
      background-color: green;
      color: #fff;
    }
  
  </style>