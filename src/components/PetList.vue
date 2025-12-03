<script>
import PetItem from './PetItem.vue'

export default {
  components: { PetItem },

  props: ['pets'],

  emit: ['pets-removed', 'pets-edited'],

  methods: {
    deletePetById(id) {
      this.$emit(
        'pets-removed',
        this.pets.filter(p => p.id !== id)
      )
    },
    updatePet(pet) {
      if (!pet) return
      const updated = this.pets.map(p =>
        p.id === pet.id ? { ...p, ...pet, isEdited: true } : p
      )
      this.$emit('pets-edited', updated)
    },
  },
}
</script>

<template>
  <ul>
    <PetItem
      v-for="pet of pets"
      :key="pet.id"
      :pet="pet"
      v-on:pet-deleted="deletePetById($event)"
      v-on:pet-edited="updatePet($event)"
    />
  </ul>
</template>

<!-- updatePet(pet) {
      if (pet) {
        this.$emit('pets-edited', {
          caption: pet,
          isEdited: false,
        })
      }
    }, -->
