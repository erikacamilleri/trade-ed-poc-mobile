<template>
    <f7-page :page-content="false"
             color-theme="orange">
        <f7-navbar transparent
                   no-shadow>
            <f7-nav-right>
                <f7-link icon-only icon-color="orange" icon-ios="f7:bars" icon-md="material:menu_open" panel-open="right"></f7-link>
            </f7-nav-right>
        </f7-navbar>
        <f7-panel right resizable theme-dark>
            <f7-view>
                <f7-page>
                    <f7-block>Right panel content</f7-block>
                </f7-page>
            </f7-view>
        </f7-panel>
        <f7-toolbar no-shadow
                    position="bottom"
                    bg-color="orange">
            <!-- Journey -->
            <f7-link icon-only icon-color="white" icon-ios="f7:skew" icon-md="material:dashboard" tab-link="#journey" tab-link-active></f7-link>
            <!-- Portfolio -->
            <f7-link icon-only icon-color="white" icon-ios="f7:chart_bar_fill" icon-md="material:show_chart" tab-link="#portfolio"></f7-link>
            <!-- Challenges -->
            <f7-link icon-only icon-color="white" icon-ios="f7:shield_lefthalf_fill" icon-md="material:security" tab-link="#challenges"></f7-link>
            <!-- Notifications -->
            <f7-link icon-only icon-color="white" icon-ios="f7:bell_fill" icon-md="material:notifications" tab-link="#notifications"></f7-link>
        </f7-toolbar>
        <f7-tabs>
            <f7-tab id="journey" class="page-content" tab-active>
                <journey></journey>
            </f7-tab>
            <f7-tab id="portfolio" class="page-content">
            </f7-tab>
            <f7-tab id="challenges" class="page-content">
            </f7-tab>
            <f7-tab id="notifications" class="page-content">
            </f7-tab>
        </f7-tabs>
    </f7-page>
</template>

<script>
  import Journey from '../../partials/journey'
  export default {
    name: "BaseLayout",
    components: {
      Journey
    }
  }
</script>

<style scoped>

</style>