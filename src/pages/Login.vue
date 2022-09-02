<template>
  <q-page class="flex flex-center q-px-md">
    <div class="form-container q-pa-md fit">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input
          class="fit"
          filled
          v-model="username"
          label="Username"
          hint="Enter your username"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          class="fit"
          filled
          type="password"
          v-model="password"
          label="Password"
          lazy-rules
          :rules="[
            (val) =>
              (val && val.length >= 6) ||
              'Please enter a password least 6 chars.',
          ]"
        />

        <div>
          <q-btn label="Log in" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Logout",

  data() {
    return {
      username: null,
      password: null,
    };
  },

  methods: {
    onSubmit() {
      this.$q.notify({
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "Logged in",
      });

      /*

      To show an error notification use following code
      
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      */
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 400px;
}
</style>
