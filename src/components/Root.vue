<template lang="html">
  <div id="app">
    <h2>Reklam</h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  created (){

  }
};
</script>

<style lang="scss">

$green: #4CAF50;
$blue: blue;
$red: red;

#app{
  font-family: Roboto;
}
form{
  width:400px;
  margin:auto;
}
button {
    background-color:$green ;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
}
button.register{
  background-color:$blue;
}
a.logout{
  color:$blue;
}

button:hover {
    opacity: 0.8;
}

form {
    border: 3px solid #f1f1f1;
}

input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

</style>
