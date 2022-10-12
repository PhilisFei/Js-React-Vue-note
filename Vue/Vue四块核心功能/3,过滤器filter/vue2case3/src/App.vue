<template>
  <div id="app">
    <table
      border="1"
    >
      <tr 
        v-for="(item, index) of orderData"
        :key="index"
      >
        <td>
          {{ item.orderId }}
        </td>
        <td>
          {{ item.name }}
        </td>
        <td>
          {{ item.price }}
        </td>
        <td
          :class="item.status | setOrderStatus | setStatusStyle"
        >
          {{ item.status | setOrderStatus }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

import orderData from '@/data/order';
import orderFilters from '@/filters/order';

export default {
  name: 'App',
  filters: orderFilters,
  data(){
    return orderData;
  }
}
</script>

<style>
  table {
    width: 800px;
    margin: 50px auto;
    border-collapse: collapse;
    text-align: center;
  }
  .not-pay {
    color: red;
  }
  .not-send {
    color: blue;
  }
  .not-receive {
    color: orange;
  }
  .not-comment {
    color: green;
  }
</style>

