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
    isPetUnique(petCaption) {
      return !this.pets.find(p => p.caption === petCaption)
    },
    submitPet(pet) {
      if (this.isPetUnique(pet.caption)) this.pets.push(pet)
    },
  },
}
</script>

<template>
  <div class="p-5">
    <h3>Pets</h3>

    <PetList v-bind:pets="pets" v-on:pets-removed="pets = $event" />

    <PetSubmitter v-on:pet-submitted="submitPet($event)" />

    <h3><span>pets: </span>{{ pets }}</h3>
  </div>
</template>
