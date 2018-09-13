git a
<template>
  <main>
    <div class="container">
      <div v-if="categories" 
        v-for="(category) in categories" 
        :key="category.id" 
        class="column">
        <div class="box-cat">{{ category.category }}</div>
        <div v-for="clue in clues" 
          :key="clue.id">
          <button v-if="category.category===clue.category" class="box-clue" id="show-modal" @click="showModal = true">{{ clue.value }}</button>
        </div>
      </div>

      <Modal v-if="showModal" @close="showModal = false">
          <h3 slot="header">Clue:</h3>
          <h2 slot="body">MODAL</h2>
      </Modal>
    </div>
  </main>
</template>

<script>
import Modal from './Modal';
import { getClues, getCategories } from '../services/api';

export default {
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
      categories: null,
      clues: null
    };
  },
  created() {
    this.gameId = this.$route.params.id;
    getClues(this.gameId) 
      .then(saved => {
        this.clues = saved;
        console.log(this.clues);
      });
    getCategories(this.gameId)
      .then(saved => {
        this.categories = saved;
        console.log(this.categories);
      });
  }
 
};
</script>

<style>

.container {
  display: grid;
  grid-template-columns: 15vw 15vw 15vw 15vw 15vw 15vw;
  grid-column-gap: 1vw;
}

.box-cat {
  background-color: rgb(48, 48, 162);
  color: white;
  font-family: 'Courier New', Courier, monospace;
  width: 100%;
  text-align: center;
  padding: 15px 0px;
}

.box-clue {
  background-color: rgb(48, 48, 162);
  color: white;
  font-family: 'Courier New', Courier, monospace;
  width: 100%;
  text-align: center;
  padding: 10px 0px;
}


</style>
