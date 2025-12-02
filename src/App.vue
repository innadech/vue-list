<script>
import PetSubmitter from './components/PetSubmitter.vue'
import PetList from './components/PetList.vue'

export default {
  components: { PetSubmitter, PetList },

  data() {
    return {
      pets: [],
    }
  },

  methods: {
    edited(e) {
      editedPetCaption = e
      if (this.isPetUnique(editedPetCaption)) {
        pet.caption = newPetCaption.newCaption.toLowerCase()
        pet.isEdited = false
      }
    },

    isPetUnique(petCaption) {
      return !this.pets.find(p => p.caption === petCaption)
    },
    submit(e) {
      const newPet = e
      if (this.isPetUnique(newPet.caption)) {
        this.pets.push(newPet)
      }
    },
  },
}
</script>

<template>
  <div class="p-5">
    <h3>Pets</h3>
    <PetList v-bind:pets="pets" v-on:pets-edited="edited" />
    <PetList v-bind:pets="pets" v-on:pets-removed="pets = $event" />
    <PetSubmitter v-on:pet-submitted="submit" />

    <h3><span>pets: </span>{{ pets }}</h3>
  </div>
</template>

<style scoped></style>
