<script>
export default {
  data() {
    return {
      newPet: {
        caption: '',
        newCaption: '',
        isEdited: false,
        id: this.makeId(),
      },
      pets: [],
    }
  },

  methods: {
    updatePet(pet) {
      if (pet.newCaption && this.isPetUnique(pet.newCaption)) {
        pet.caption = pet.newCaption.toLowerCase()
        pet.isEdited = false
      }
    },

    submitPet() {
      if (this.newPet.caption && this.isPetUnique(this.newPet.caption)) {
        this.newPet.caption = this.newPet.caption.toLowerCase()
        this.newPet.newCaption = this.newPet.caption
        this.pets.push(this.newPet)
        this.newPet = {
          caption: '',
          newCaption: '',
          isEdited: false,
          id: this.makeId(),
        }
        this.$refs.elInput.focus()
      }
    },

    isPetUnique(petCaption) {
      return !this.pets.find(p => p.caption === petCaption)
    },

    makeId() {
      return crypto.randomUUID().split('-').at(0)
    },

    removePet(id) {
      this.pets = this.pets.filter(p => p.id !== id)
    },
  },
}
</script>

<template>
  <div class="p-5">
    <h3>Pets</h3>
    <ul>
      <li v-for="(pet, idx) of pets" :key="pet">
        <div v-if="pet.isEdited" class="d-inline-block">
          <input
            v-bind:value="pet.newCaption"
            v-on:input="pet.newCaption = $event.target.value"
          />
          <button v-on:click="updatePet(pet)">OK</button>
        </div>
        <span v-if="!pet.isEdited">
          {{ pet.caption }}
          <button
            v-on:click="pet.isEdited = true"
            type="button"
            class="btn btn-secondary btn-sm ms-3"
          >
            Edit
          </button>
        </span>

        <button
          type="button"
          class="btn btn-secondary btn-sm ms-3"
          v-on:click="removePet(pet.id)"
        >
          Delete
        </button>
      </li>
    </ul>
    <form>
      <input
        ref="elInput"
        v-bind:value="newPet.caption"
        v-on:input="newPet.caption = $event.target.value"
      />
      <button type="submit" v-on:click.prevent="submitPet">Submit</button>
    </form>

    <h3><span>newPet: </span>{{ newPet }}</h3>
    <h3><span>pets: </span>{{ pets }}</h3>
  </div>
</template>

<style scoped></style>
