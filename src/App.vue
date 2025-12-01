<script>
import PetSubmitter from './components/PetSubmitter.vue'

export default {
  components: { PetSubmitter },

  data() {
    return {
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

    isPetUnique(petCaption) {
      return !this.pets.find(p => p.caption === petCaption)
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

    <PetSubmitter v-on:pet-submitted="pets.push($event)" />

    <h3><span>pets: </span>{{ pets }}</h3>
  </div>
</template>

<style scoped></style>
