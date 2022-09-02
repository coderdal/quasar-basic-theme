<template>
  <q-page class="flex flex-center column text-center">
    <p class="text-h6 q-px-md">
      This is a example Quasar theme & layout combination.
    </p>
    <p class="text-subtitle1 q-px-md">
      You can add routes at, src/router/routes.js <br />
      <span class="text-negative"
        ><span class="text-bold">Important</span>: the routes should be children
        of main route (/).
      </span>
    </p>
    <p class="text-subtitle1 q-px-md">
      You can edit the layout at src/layouts/Main/Mainlayout.vue
    </p>
    <p class="text-subtitle1 q-px-md">
      You can add Qdrawer link at src/layouts/Main/Mainlayout.vue with Essential
      Link Component
    </p>
  </q-page>
</template>

<script>
export default {
  name: "Home",
};
</script>
