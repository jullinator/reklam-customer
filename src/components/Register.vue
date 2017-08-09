<template lang="html">
  <form class="" v-on:submit.prevent="onSubmit">
    <div class="container">
      <label for="email"><b>Email</b></label>
      <input v-model="email" type="text" name="email" placeholder="Skriv email"  required/>
      <label for="password"><b>Lösenord</b></label>
      <input v-model="password" type="password" name="password" placeholder="Skriv lösenord" required />
      <label for="password2"><b>Bekräfta lösenord</b></label>
      <input v-model="passwordConfirm" type="password" name="password2" placeholder="Skriv lösenord" required />
      <button class="register" type="submit">Registrera</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email:'',
      password:'',
      passwordConfirm:''
    };
  },
  methods:{
    onSubmit(){
      var action = ()=>{
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      }
      this.email.length < 1 ? action= ()=> alert("fill in email") : null
      this.password.length < 1 ? action= ()=> alert("fill in password") : null
      this.password != this.passwordConfirm ? action= ()=> alert("not the same password") : null
      action()
      //
    }
  }
};
</script>

<style lang="scss">

</style>
