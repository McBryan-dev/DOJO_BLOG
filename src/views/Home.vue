<template>
  <div class="home">
    <h2>My Name is {{name}} and i am {{age}} years old</h2>
    <br />
    <strong>{{full}}</strong>
    <br />
    <button @click="handleClick">darega watashi wa</button>
    <button @click="age++">Plus One</button>
    <input type="text" v-model="name" />
    <br />
    <button @click="fetchApi" >Save</button>
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

      const fetchApi = async () => {
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

          if(data) {
            
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
        fetchApi
      }

    }

  }
</script>