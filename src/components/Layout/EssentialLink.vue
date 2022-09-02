<template>
  <q-item clickable v-ripple :to="link" exact active-class="text-primary">
    <q-item-section avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section> {{ title }} </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
  },
};
</script>
