<script>
export default {
  props: ['pets'],

  emit: ['pets-removed', 'pets-edited'],

  methods: {
    removePet(id) {
      this.$emit(
        'pets-removed',
        this.pets.filter(p => p.id !== id)
      )
    },
  },

  updatePet(pet) {
    if (pet.newCaption) {
      this.$emit('pets-edited', pet.newCaption)
    }
  },
}
</script>

<template>
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
</template>

<!-- updatePet(pet) {
      if (pet.newCaption && this.isPetUnique(pet.newCaption)) {
        pet.caption = pet.newCaption.toLowerCase()
        pet.isEdited = false
      }
    }, -->

<!-- <ul>
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
    </ul> -->
