<script>
export default {
  emits: ['pet-submitted'],

  data() {
    return {
      newPet: {
        caption: '',
        newCaption: '',
        isEdited: false,
        id: this.makeId(),
      },
    }
  },

  methods: {
    submitPet() {
      if (this.newPet.caption) {
        this.newPet.caption = this.newPet.caption.toLowerCase()
        this.newPet.newCaption = this.newPet.caption

        // this.pets.push(this.newPet)
        this.$emit('pet-submitted', 'hi')

        this.newPet = {
          caption: '',
          newCaption: '',
          isEdited: false,
          id: this.makeId(),
        }
        this.$refs.elInput.focus()
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
