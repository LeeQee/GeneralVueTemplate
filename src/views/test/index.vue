<template>
  <div class="test">
      <ul>
          <span>0000</span>
          <li>11</li>
          <li>22</li>
          <li>33</li>
          <li>44</li>
          <li>55</li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'test',

}
</script>

<style scoped lang="scss">
    ul>li:first-of-type{
        color:red;
    }
</style>