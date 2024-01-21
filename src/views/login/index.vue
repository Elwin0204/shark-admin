<template>
  <div class="login-container">
    <div class="login-particles">
      <vue-particles
        color="#dedede"
        :particle-opacity="0.7"
        :particles-number="80"
        shape-type="circle"
        :particle-size="4"
        lines-color="#dedede"
        :lines-width="1"
        :line-linked="true"
        :line-opacity="0.4"
        :lines-distance="150"
        :move-speed="3"
        :hover-effect="true"
        hover-mode="grab"
        :click-effect="true"
        click-mode="push"
      ></vue-particles>
    </div>
    <el-alert
      title="What's up, guys. Welcome to shark-admin"
      type="success"
      :closable="false"
      style="position: fixed"
    ></el-alert>
    <div class="login-dialog">
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        class="login-form"
        label-position="left"
      >
        <div class="title-tips">欢迎来到{{ title }}！</div>
        <el-form-item style="margin-top: 40px" prop="username">
          <span class="svg-container svg-container-admin">
            <v-icon name="user" />
          </span>
          <el-input
            v-model.trim="form.username"
            v-focus
            placeholder="用户名: admin/editor"
            tabindex="1"
            type="text"
          />
        </el-form-item>
        <el-form-item prop="password">
          <span class="svg-container">
            <v-icon name="lock" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model.trim="form.password"
            :type="passwordType"
            tabindex="2"
            placeholder="密码: 123456"
            @keyup.enter.native="handleLogin"
          />
          <span
            v-if="passwordType === 'password'"
            class="show-password"
            @click="handlePassword"
          >
            <v-icon name="eye-slash"></v-icon>
          </span>
          <span v-else class="show-password" @click="handlePassword">
            <v-icon name="eye"></v-icon>
          </span>
        </el-form-item>
        <el-button
          :loading="loading"
          class="login-btn"
          type="primary"
          @click="handleLogin"
        >
          登录
        </el-button>
      </el-form>
    </div>
    <!-- 波浪 -->
    <div class="login-waves">
      <svg
        class="waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <!-- 形狀容器 -->
        <defs>
          <path
            id="JS_BaseWave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 55-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <!-- 組合形狀 -->
        <g class="parallax">
          <use
            xlink:href="#JS_BaseWave"
            x="48"
            y="0"
            fill="rgba(255,255,255,0.7)"
          />
          <use
            xlink:href="#JS_BaseWave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.5)"
          />
          <use
            xlink:href="#JS_BaseWave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
          />
          <use xlink:href="#JS_BaseWave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
  import { isPassword } from '@/utils/validate'
  import { loginAuto } from '@/config'
  export default {
    name: 'Login',
    directives: {
      focus: {
        inserted(el) {
          el.querySelector('input').focus()
        },
      },
    },
    data() {
      const validateusername = (rule, value, callback) => {
        if ('' == value) {
          callback(new Error('用户名不能为空'))
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (!isPassword(value)) {
          callback(new Error('密码不能少于6位'))
        } else {
          callback()
        }
      }
      return {
        nodeEnv: process.env.NODE_ENV,
        title: this.$baseTitle,
        form: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            {
              required: true,
              trigger: 'blur',
              validator: validateusername,
            },
          ],
          password: [
            {
              required: true,
              trigger: 'blur',
              validator: validatePassword,
            },
          ],
        },
        loading: false,
        passwordType: 'password',
        redirect: undefined,
      }
    },
    watch: {
      $route: {
        handler(route) {
          this.redirect = (route.query && route.query.redirect) || '/'
        },
        immediate: true,
      },
    },
    created() {
      document.body.style.overflow = 'hidden'
    },
    beforeDestroy() {
      document.body.style.overflow = 'auto'
    },
    mounted() {
      loginAuto && this.autoLogin()
    },
    methods: {
      autoLogin() {
        this.form.username = 'admin'
        this.form.password = '123456'
        setTimeout(() => {
          this.handleLogin()
        }, 3000)
      },
      handlePassword() {
        this.passwordType === 'password'
          ? (this.passwordType = '')
          : (this.passwordType = 'password')
        this.$nextTick(() => {
          this.$refs.password.focus()
        })
      },
      handleLogin() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.loading = true
            this.$store
              .dispatch('user/login', this.form)
              .then(() => {
                const routerPath =
                  this.redirect === '/404' || this.redirect === '/401'
                    ? '/'
                    : this.redirect
                this.$router.push(routerPath).catch(() => {})
                this.loading = false
              })
              .catch(() => {
                this.loading = false
              })
          } else {
            return false
          }
        })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .login-container {
    height: 100vh;
    position: relative;
    background-image: url('../../assets/images/bg.jpg');
    background-size: cover;
    .login-particles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .login-waves {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      .waves {
        position: relative;
        margin-bottom: -7px;
        width: 100%;
        min-height: 133px;
        max-height: 200px;

        .parallax > use {
          animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5)
            infinite;
        }

        /* 選擇一個use */
        .parallax > use:nth-child(1) {
          /* 延遲2S執行 */
          animation-delay: -2s;
          /* 7s內執行完畢 */
          animation-duration: 7s;
        }

        .parallax > use:nth-child(2) {
          animation-delay: -3s;
          animation-duration: 10s;
        }

        .parallax > use:nth-child(3) {
          animation-delay: -4s;
          animation-duration: 13s;
        }

        .parallax > use:nth-child(4) {
          animation-delay: -5s;
          animation-duration: 20s;
        }

        /* 動畫 */
        @keyframes move-forever {
          0% {
            transform: translate3d(-90px, 0, 0);
          }
          100% {
            transform: translate3d(85px, 0, 0);
          }
        }
      }
    }

    .login-dialog {
      width: 450px;
      background-color: rgba(255, 255, 255, 0.15);
      border-radius: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .title-tips {
      margin-top: 29px;
      font-size: 20px;
      font-weight: 400;
      color: rgba(14, 18, 26, 1);
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .login-btn {
      display: inherit;
      width: 100%;
      height: 50px;
      margin-top: 5px;
      border: 0;

      &:hover {
        opacity: 0.9;
      }
    }

    .login-form {
      position: relative;
      max-width: 100%;
      padding: 30px 50px;
      overflow: hidden;

      .forget-password {
        width: 100%;
        margin-top: 40px;
        text-align: left;

        .forget-pass {
          width: 129px;
          height: 19px;
          font-size: 20px;
          font-weight: 400;
          color: rgba(92, 102, 240, 1);
        }
      }
    }

    .tips {
      margin-bottom: 10px;
      font-size: $base-font-size-default;
      color: $base-color-white;

      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }

    .title-container {
      position: relative;

      .title {
        margin: 0 auto 40px auto;
        font-size: 34px;
        font-weight: bold;
        color: $base-color-blue;
        text-align: center;
      }
    }

    .svg-container {
      position: absolute;
      top: 14px;
      left: 15px;
      z-index: $base-z-index;
      font-size: 16px;
      color: #d7dee3;
      cursor: pointer;
      user-select: none;
    }

    .show-password {
      position: absolute;
      top: 14px;
      right: 25px;
      font-size: 16px;
      color: #d7dee3;
      cursor: pointer;
      user-select: none;
    }

    ::v-deep {
      .el-form-item {
        padding-right: 0;
        margin: 20px 0;
        color: #454545;
        background: transparent;
        border: 1px solid transparent;
        border-radius: 2px;

        &__content {
          min-height: $base-input-height;
          line-height: $base-input-height;
        }

        &__error {
          position: absolute;
          top: 100%;
          left: 18px;
          font-size: $base-font-size-small;
          line-height: 18px;
          color: $base-color-red;
        }
      }

      .el-input {
        box-sizing: border-box;

        input {
          height: 50px;
          padding-left: 45px;
          font-size: $base-font-size-default;
          line-height: 58px;
          color: $base-font-color;
          background: #f6f4fc;
          border: 0;
          caret-color: $base-font-color;
        }
      }
    }
  }
</style>
