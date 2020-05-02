<template>
    <f7-page no-toolbar
             no-navbar
             no-swipeback
             login-screen
             color-theme="orange">
        <f7-login-screen-title>
            <img width="150" height="auto" :src="logo">
        </f7-login-screen-title>
        <f7-list form>
            <f7-list-input
                    label="Username"
                    type="text"
                    placeholder="john.doe@example.com"
                    :value="form.username"
                    @input="form.username = $event.target.value"
            ></f7-list-input>
            <f7-list-input
                    label="Password"
                    type="password"
                    placeholder="Type in your password"
                    :value="form.password"
                    @input="form.password = $event.target.value">
                <f7-link slot="root-end"
                         text="Forgot password?"
                         class="float-right"
                         style="font-size: 14px; margin-right: 14px; margin-top: -7px;"></f7-link>
            </f7-list-input>
        </f7-list>
        <f7-list>
            <f7-block>
                <f7-button class="margin-horizontal-half" fill @click="login()">Login</f7-button>
            </f7-block>
            <f7-block-footer>
                <f7-row class="margin-top-half">
                    <f7-col>
                        <p class="margin-top">Or Login With</p>
                    </f7-col>
                </f7-row>
                <f7-row>
                    <f7-col>
                        <f7-chip   color="red"
                                   text="Google">
                            <f7-icon slot="media"
                                     ios="f7:logo_google"
                                     md="f7:logo_google"
                                     icon-size="18"></f7-icon>
                        </f7-chip>
                    </f7-col>
                    <f7-col>
                        <f7-chip   color="blue"
                                   text="Facebook">
                            <f7-icon slot="media" ios="f7:logo_facebook"
                                     md="f7:logo_facebook"
                                     icon-size="18"
                                     style="margin-left: 10px;"></f7-icon>
                        </f7-chip>
                    </f7-col>
                </f7-row>
            </f7-block-footer>
            <f7-block-footer>
                Don't have an account?
                <f7-link>Register now...</f7-link>
            </f7-block-footer>
        </f7-list>
    </f7-page>
</template>
<script>
  import TradeBiteLogo from '../../../assets/images/tradebrite.png'
  export default {
    name: "LoginPage",
    data () {
      return {
        form: {
          username: '',
          password: ''
        }
      }
    },
    computed: {
      logo () {
        return TradeBiteLogo
      }
    },
    methods: {
      login() {
        if (this.form.username && this.form.password) {

        }
      }
    }
  }
</script>