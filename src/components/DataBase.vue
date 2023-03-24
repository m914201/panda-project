<template>
  <div>
    <div>
      <h1>Data Base 쓰기</h1>
      <input type="text" v-model="title" />
      <input type="text" v-model="content" />
      <button type="button" @click="post">POST</button>
    </div>
    <div>
      <h1>Data Base 읽기</h1>
      <ul>
        <li v-for="(item, idx) in items" :key="`items_${idx}`">
          <p>id : {{ item.id }}</p>
          <p>title : {{ item.title }}</p>
          <p>content : {{ item.content }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      items: [],
      title: '',
      content: '',
    }
  },
  mounted() {
    // this.get()
    this.read()
  },
  methods: {
    async post() {
      const r = await this.$firebase.firestore().collection('notes').add({
        title: this.title,
        content: this.content,
      })
      console.log(r)
    },
    async read() {
      const rs = await this.$firebase.firestore().collection('notes').get()
      //   rs.docs.forEach(v => {
      //     console.log(v.data())
      //     console.log(v.id)
      //   })

      //여기가 중요
      this.items = rs.docs.map(v => {
        const item = v.data()
        return {
          id: v.id,
          title: item.title,
          content: item.content,
        }
      })
    },
  },
}
</script>

<style></style>
