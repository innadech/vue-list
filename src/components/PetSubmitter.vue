<script>
export default {
  emits: ['pet-submitted'],

  data() {
    return {
      newPet: this.initPet(),
    }
  },

  methods: {
    submitPet() {
      if (this.newPet.caption) {
        this.newPet.caption = this.newPet.caption.toLowerCase()
        this.$emit('pet-submitted', { ...this.newPet })
        this.newPet = this.initPet()
        this.$refs.elInput.focus()
      }
    },

    initPet() {
      return {
        id: this.makeId(),
        caption: '',
        isEdited: false,
      }
    },

    makeId() {
      return crypto.randomUUID().split('-').at(0)
    },
  },
}
</script>

<template>
  <form>
    <input
      ref="elInput"
      v-bind:value="newPet.caption"
      v-on:input="newPet.caption = $event.target.value"
    />
    <button type="submit" v-on:click.prevent="submitPet">Submit</button>
    <h3><span>newPet: </span>{{ newPet }}</h3>
  </form>
</template>
