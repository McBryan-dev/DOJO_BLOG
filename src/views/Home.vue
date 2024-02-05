<template>

  <div class="home p-4 m-2 justify-center align-center text-center gap-2 flex flex-col bg-slate-300 rounded">
    <h2 class="text-green-500 text-3xl" >My Name Is {{name}} And I Am {{age}} Years Of Age</h2>
    <br />
    <div class="bg-blue-300 py-1 w-32 mx-auto rounded justify-center text-center align-center" >
      <strong>{{full}}</strong>
    </div>
    <br />
    <div class="flex justify-center text-center align-center">
      <button @click="handleClick" class="bg-neutral-200 w-36 rounded text-black-200 mx-auto p-1 border-2 border-neutral-300" >Set name</button>
      <button @click="age++, changeVal" class="mx-auto bg-neutral-400 rounded text-back-200 p-1 px-2 border-2 border-neutral-300">Plus One Year</button>
    </div>
    <br />
    <input type="text" class="w-1/2 mx-auto p-1 text-lg rounded" v-model="name" id="exampleInput" @input="setFull" />
    <br />
    <button @click="postApi" class="bg-red-400 w-1/4 mx-auto p-2 rounded">Save</button>
    <button @click="fetchApi" class="bg-red-400 w-1/4 mx-auto p-2 rounded" >View Saved</button>
  </div>

</template>

<script>

  import {ref} from 'vue';

  export default {

    name: 'home',

    setup() {
      const  name= ref("mario")
      const age = ref(30)

      const full = ref("Not Saved")

      const handleClick = () => {
        name.value= 'luigi'
        age.value = 35
      }

      const setFull = (e) => {
        e.target.id = e.target.value;
        changeVal();
      }

      const changeVal = () => {
        full.value = 'Not Saved'
        console.log('val')
      }

      const postApi = async () => {
        try {

          const newData = {
            name: name.value,
            age: age.value
          }

          const res = await fetch (' http://localhost:3000/posts', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(newData)
          })

          const data = res.json();

          if(!data) {
            console.log(error)
            full.value = 'Not Saved';
          } else {
            console.log(data);
            full.value = 'Saved';
          }
        
        } catch(error) {
          console.log(error)
        }
      }

      return {
        name,
        age,
        full,
        handleClick,
        changeVal,
        setFull,
        postApi
      }

    }

  }
</script>