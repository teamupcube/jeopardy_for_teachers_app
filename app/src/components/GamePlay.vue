git a
<template>
  <main>
  <!-- <GameCategory v-if="categories" v-for="(category) in categories" 
    :key="category.id"/> -->
      <div v-if="categories" v-for="category in categories" :key="category.id" class="column" id="cat_one">
    <div class="box">{{ category.category }} </div>
    <!-- <GameClue v-for="clue in clues" :key="clue.id"/> -->
  </div>
  





  <!-- <h1>heyyyy</h1>
    <div class="container">
      <div class="column" id="cat_one">
        <div class="box">Cat 1</div>
        <button class="box" id="show-modal" @click="showModal = true"  >100</button>
        <button class="box" id="show-modal" @click="showModal = true" >200</button>
        <button class="box" id="show-modal" @click="showModal = true" >300</button>
        <button class="box" id="show-modal" @click="showModal = true" >400</button>
        <button class="box" id="show-modal" @click="showModal = true" >500</button>
      </div>
      <div class="column" id="cat_two">
        <div class="box" >Cat 2</div>
        <button class="box" id="show-modal" @click="showModal = true" >100</button>
        <button class="box" id="show-modal" @click="showModal = true" >200</button>
        <button class="box" id="show-modal" @click="showModal = true" >300</button>
        <button class="box" id="show-modal" @click="showModal = true" >400</button>
        <button class="box" id="show-modal" @click="showModal = true" >500</button>
      </div>
      <div class="column" id="cat_three">
        <div class="box" >Cat 3</div>
        <button class="box" id="show-modal" @click="showModal = true" >100</button>
        <button class="box" id="show-modal" @click="showModal = true" >200</button>
        <button class="box" id="show-modal" @click="showModal = true" >300</button>
        <button class="box" id="show-modal" @click="showModal = true" >400</button>
        <button class="box" id="show-modal" @click="showModal = true" >500</button>
      </div>
      <div class="column" id="cat_four">
        <div class="box" >Cat 4</div>
        <button class="box" id="show-modal" @click="showModal = true" >100</button>
        <button class="box" id="show-modal" @click="showModal = true" >200</button>
        <button class="box" id="show-modal" @click="showModal = true" >300</button>
        <button class="box" id="show-modal" @click="showModal = true" >400</button>
        <button class="box" id="show-modal" @click="showModal = true" >500</button>
      </div>
      <div class="column" id="cat_five">
        <div class="box" >Cat 5</div>
        <button class="box" id="show-modal" @click="showModal = true" >100</button>
        <button class="box" id="show-modal" @click="showModal = true" >200</button>
        <button class="box" id="show-modal" @click="showModal = true" >300</button>
        <button class="box" id="show-modal" @click="showModal = true" >400</button>
        <button class="box" id="show-modal" @click="showModal = true" >500</button>
      </div>
      <div class="column" id="cat_six">
        <div class="box" >Cat 6</div>
        <button class="box" id="show-modal" @click="showModal = true" >100</button>
        <button class="box" id="show-modal" @click="showModal = true" >200</button>
        <button class="box" id="show-modal" @click="showModal = true" >300</button>
        <button class="box" id="show-modal" @click="showModal = true" >400</button>
        <button class="box" id="show-modal" @click="showModal = true" >500</button>
      </div>
    </div> -->
    <Modal v-if="showModal" @close="showModal = false">
    <h3 slot="header">custom header</h3>
    </Modal>
  </main>
</template>

<script>
import Modal from './Modal';
import GameCategory from './GameCategory';
import { getGame } from '../services/api';

export default {
  components: {
    Modal,
    GameCategory
  },
  data() {
    return {
      showModal: false,
      categories: null
    };
  },
  created() {
    this.gameId = this.$route.params.id;
    getGame(this.gameId) 
      .then(saved => {
        this.categories = saved;
        console.log(this.categories);
        }
      );
  }
};
</script>

<style>


.container {
  display: grid;
  grid-template-columns: 15vw 15vw 15vw 15vw 15vw 15vw;
  /* grid-template-areas:
                      'cat1 cat2 cat3 cat4 cat5 cat6'; */
  grid-column-gap: 1vw;
}

#cat_one {
  display: grid;
  grid-template-rows: 5vw 5vw 5vw 5vw 5vw 5vw;
  grid-row-gap: 1vw;
}

#cat_two {
  display: grid;
  grid-template-rows: 5vw 5vw 5vw 5vw 5vw 5vw;
  grid-row-gap: 1vw;
}

#cat_three {
  display: grid;
  grid-template-rows: 5vw 5vw 5vw 5vw 5vw 5vw;
  grid-row-gap: 1vw;
}

#cat_four {
  display: grid;
  grid-template-rows: 5vw 5vw 5vw 5vw 5vw 5vw;
  grid-row-gap: 1vw;
}

#cat_five {
  display: grid;
  grid-template-rows: 5vw 5vw 5vw 5vw 5vw 5vw;
  grid-row-gap: 1vw;
}

#cat_six {
  display: grid;
  grid-template-rows: 5vw 5vw 5vw 5vw 5vw 5vw;
  grid-row-gap: 1vw;
}

.box {
  background-color: rgb(48, 48, 162);
  color: white;
  font-family: 'Courier New', Courier, monospace
}



</style>
