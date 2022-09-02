<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-grey-9">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title> App Title </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="260"
      :breakpoint="700"
      bordered
    >
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <essential-link icon="home" title="Home" link="/" />
          <essential-link icon="inbox" title="Inbox" link="/inbox" />
          <essential-link icon="explore" title="Explore" link="/explore" />
          <essential-link icon="star" title="Favorites" link="/favorites" />
          <essential-link icon="image" title="Carousel" link="/carousel" />
          <essential-link icon="login" title="Login" link="/login" />
          <essential-link icon="logout" title="Logout" link="/logout" />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "src/components/Layout/EssentialLink.vue";

export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
  components: {
    EssentialLink,
  },
};
</script>
