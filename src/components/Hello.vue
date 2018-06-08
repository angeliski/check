<template>
  <div class="hello">
      <form>
        <textarea v-model="check" placeholder='Item do checklist'></textarea>
          <button @click="adicionar()">Adicionar</button>
      </form>

      <div v-for="check in checks" :key="check">
        <span>{{check}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      check: '',
      checks: [],
    };
  },
  methods: {
    adicionar() {
      this.checks.push(this.check);
    },
  },
};
</script>

</style>
