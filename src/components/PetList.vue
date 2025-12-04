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
<!-- 1. Проверка — пришёл ли сам объект pet

2. Создаём НОВЫЙ массив updated
const updated = this.pets.map(p => ...)
-перебирает каждый объект в массиве pets
-и создаёт новый массив (старый не изменяет)

3.Внутри map проверяем:
p.id === pet.id
Если ID совпали, значит, это тот объект, который нужно заменить.

4. Если совпали — создаём обновлённый объект
? { ...p, ...pet, isEdited: false }
получаете объединённый объект, где свойства нового объекта pet заменяют старые.

5. Если ID не совпали, возвращаем элемент как есть
: p -->
