<script>
export default {
  props: ['pet'],

  emits: ['pet-deleted'],

  data() {
    return {
      localPet: { ...this.pet },
    }
  },
}
</script>

<template>
  <li class="m-3">
    <div v-if="localPet.isEdited" class="d-inline-block">
      <input
        v-bind:value="localPet.newCaption"
        v-on:input="localPet.newCaption = $event.target.value"
      />
      <button v-on:click="">OK</button>
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
