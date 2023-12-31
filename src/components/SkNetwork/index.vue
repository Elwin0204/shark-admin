<template>
  <div v-if="!hasNetwork" class="sk-network">
    <div class="network-card">
      <div class="network-body">
        <img
          class="close"
          src="@/assets/images/close.png"
          alt="关闭"
          @click="handleClose"
        />
        <img
          class="network-err"
          src="@/assets/images/network_err.png"
          alt="无网络连接"
        />
        <span>无网络连接</span>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'SkNetwork',
    data() {
      return {}
    },
    computed: {
      ...mapGetters({
        hasNetwork: 'settings/hasNetwork',
      }),
    },
    methods: {
      ...mapActions({
        changeNetwork: 'settings/changeNetwork',
      }),
      handleClose() {
        this.changeNetwork(true)
      },
    },
  }
</script>
<style lang="scss" scoped>
  @property --rotate {
    syntax: '<angle>';
    initial-value: 132deg;
    inherits: false;
  }
  :root {
    --card-height: 65vh;
    --card-width: calc(var(--card-height) / 1.5);
  }
  @keyframes spin {
    0% {
      --rotate: 0deg;
    }
    100% {
      --rotate: 360deg;
    }
  }
  @keyframes fadeInTopLeft {
    from {
      opacity: 0;
      top: 0%;
      left: 0%;
    }
    to {
      opacity: 1;
      top: 50%;
      left: 50%;
    }
  }
  .sk-network {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    background: rgba($color: #000000, $alpha: 0.5);
    .network-card {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: fadeInTopLeft 1.5s ease-in-out;
      .network-body {
        background: #191c29;
        width: var(--card-width);
        height: var(--card-height);
        padding: 10px;
        position: relative;
        border-radius: 6px;
        justify-content: center;
        align-items: center;
        text-align: center;
        display: flex;
        font-size: 1.5em;
        color: rgb(88 199 250 / 0%);
        cursor: pointer;
        font-family: cursive;
        &:hover {
          color: rgb(88 199 250 / 100%);
          transition: color 1s;
        }
        &:hover:before,
        &:hover:after {
          animation: none;
          opacity: 0;
        }

        &::before {
          content: '';
          width: 102%;
          height: 104%;
          border-radius: 8px;
          background-image: linear-gradient(
            var(--rotate),
            #5ddcff,
            #3c67e3 43%,
            #4e00c2
          );
          position: absolute;
          z-index: -1;
          top: -2%;
          left: -1%;
          animation: spin 2.5s linear infinite;
        }

        &::after {
          position: absolute;
          content: '';
          top: calc(var(--card-height) / 6);
          left: 0;
          right: 0;
          z-index: -1;
          height: 100%;
          width: 100%;
          margin: 0 auto;
          transform: scale(0.8);
          filter: blur(calc(var(--card-height) / 6));
          background-image: linear-gradient(
            var(--rotate),
            #5ddcff,
            #3c67e3 43%,
            #4e00c2
          );
          opacity: 1;
          transition: opacity 0.5s;
          animation: spin 2.5s linear infinite;
        }
        .close {
          position: absolute;
          top: 5px;
          right: 5px;
          transition: all 0.5s ease-in-out;
          &:hover {
            transform: rotate(360deg);
          }
        }
        .network-err {
          width: 128px;
        }
        span {
          font-size: 24px;
          color: #f66f6a;
        }
      }
    }

    .network-card.fadein-lt {
      top: 0%;
      left: 0%;
    }
  }
</style>
