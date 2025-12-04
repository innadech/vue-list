<script>
export default {
  props: ['pet'],

  emits: ['pet-deleted', 'pet-edited'],

  data() {
    return {
      localPet: { ...this.pet },
    }
  },
  methods: {
    edit() {
      this.localPet.isEdited = false
      this.$emit('pet-edited', this.localPet)
    },
  },
}
</script>

<template>
  <li class="m-3">
    <div v-if="localPet.isEdited" class="d-inline-block">
      <input
        v-bind:value="localPet.caption"
        v-on:input="localPet.caption = $event.target.value"
      />
      <button v-on:click="edit">OK</button>
    </div>
    <span v-if="!localPet.isEdited">
      <span>{{ localPet.caption }}</span>
      <button
        v-on:click="localPet.isEdited = true"
        type="button"
        class="btn btn-secondary btn-sm ms-3"
      >
        Edit
      </button>
    </span>
    <button
      type="button"
      class="btn btn-secondary btn-sm ms-3"
      v-on:click="$emit('pet-deleted', localPet.id)"
    >
      Delete
    </button>
  </li>
</template>
