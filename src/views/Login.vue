<template>
<div class="row">
    <div class="col-lg-6">
    <div class="card">
      <div class="card-header">
        <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <a class="nav-link " href="/Register">Register</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/Login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Single Sign in</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <h4 class="card-title">Login</h4>
        <div class="card-text">
            <form @submit.prevent="submit">
                <div class="form-group">
                  <label for="Email">Email</label>
                  <input type="text" v-model="data.email"
                    class="form-control" name="Email" id="Email" aria-describedby="helpEmail" placeholder="Email">
                  <small id="helpEmail" class="form-text text-muted">You can use any email that you've use on our site</small>
                </div>
                <div class="form-group">
                  <label for="Password">Password</label>
                  <input type="password" v-model="data.password"
                    class="form-control" name="Password" id="Password" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>
      </div>
    </div>
    </div>
    <div class="col-lg-6">
      <div class="card border-success" v-if="newUser">
        <div class="card-body">
          <h4 class="card-title">Congrats! You've Logged in!</h4>
          <p class="card-text">
            {{newUser.firstName}} {{newUser.lastName}} 
          </p>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import { Globals } from "@/models/api";
import { Login } from "@/models/users";

export default {
    data: ()=> ({
        data: {},
        newUser: null
    }),
    methods: {
        async submit(){
            try {
              const m = await Login(this.data);
              // console.log(m)
              if(Globals.redirectRoute != null){
              this.$router.push(Globals.redirectRoute)
              }
              this.newUser = m.user;
            } catch (error) {
              Globals.errors.push(error);
            }
        }
    }
}
</script>

<style>
</style> 