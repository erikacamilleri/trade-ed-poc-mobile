<template>
  <f7-page>
    <f7-navbar>
      <div class="title">Trade Education Screens</div>
    </f7-navbar>
    <f7-block-title>Welcome to our UX playground</f7-block-title>
    <f7-block inner>
      <p>We are just building some screens for a trade education mobile app. Here we can create high fidelity mocks and even test out navigation flows.</p>
    </f7-block>
    <f7-block-title>App Pages</f7-block-title>
    <f7-list class="components-list">
      <f7-list-item link="/login/" title="Login" panel-close>
        <f7-icon slot="media"
                 ios="f7:lock_rotation"
                 md="material:lock_rotation"></f7-icon>
      </f7-list-item>
      <f7-list-item link="/scaffolding/" title="Scaffolding" panel-close>
        <f7-icon slot="media"
                 ios="f7:skew"
                 md="material:dashboard"></f7-icon>
      </f7-list-item>
    </f7-list>
    <f7-block-title>Supported Devices</f7-block-title>
    <f7-list>
      <f7-list-item title="iOS"
                    external
                    link="./index.html?theme=ios"></f7-list-item>
      <f7-list-item title="Android (MD)"
                    external link="./index.html?theme=md"></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
export default {
  components: {}
};
</script>
