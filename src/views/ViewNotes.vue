<template>
  <div class="notes">

    <AddEditNote
      v-model="newNote"
      placeholder="Add a new note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>
    <pre>{{newNote}}</pre>
    <Note
      v-for="note in storeNotes.notes"
      :key="note.id"
      :note="note"
    />

  </div>
</template>

<script setup>

/*
  imports
*/

  import { ref } from 'vue'
  import Note from '@/components/Notes/Note.vue'
  import AddEditNote from '@/components/Notes/AddEditNote.vue'
  import { useStoreNotes } from '@/stores/storeNotes'
/*import composable watcher*/
  import { useWatchCharacters } from '@/use/useWatchCharacters'

/*
  store
*/

  const storeNotes = useStoreNotes()

/*
  notes
*/

  const newNote = ref('')
  const addEditNoteRef = ref(null)

  const addNote = () => {
    storeNotes.addNote(newNote.value)
    newNote.value = ''
    addEditNoteRef.value.focusTextarea()
  }
/*and use it with the parameter which is needed to be watching*/
  useWatchCharacters(newNote, 100)

</script>
