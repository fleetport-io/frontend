<template lang="html">
  <v-flex offset-xs4 xs4>
    <v-card>
      <v-card-title primary-title>
        <div>
          <div class="headline">Login</div>
          <v-form v-model="form">
            <v-text-field
              name="name"
              label="Organisation"
              required
            ></v-text-field>
            <v-text-field
              label="Password"
              min="8"
              v-model="pw"
              :append-icon="show ? 'visibility_off' : 'visibility'"
              :type="show ? 'text' : 'password'"
              @click:append="show = !show"
              required
            ></v-text-field>
            <v-checkbox label="Remember me" v-model="check"></v-checkbox>
            <v-btn :disabled="!form" color="primary" @click="toggleLoggedIn(true)">Login</v-btn>
          </v-form>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script>
  import { mapMutations } from 'vuex';
  export default {
    data: function () {
      return {
        pw: '',
        show: false,
        form: true,
        check: false,
      }
    },
    methods: {
			...mapMutations([
				'toggleLoggedIn',
			]),
    }
  }
</script>

<style lang="css">
</style>
