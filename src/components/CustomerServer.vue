<template>
  <div class="customer-server">
    <img src="@/assets/images/customer-server.svg">
  </div>
</template>

<script>
export default {
  name: 'CustomerServer',
}
</script>

<style lang="scss" scoped>
  .customer-server {
    position: absolute;
    bottom: 7.5rem;
    right: 1.5rem;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: #8A56AC;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>