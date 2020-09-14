<template>
  <div id="app">
    <div class="header px-0">
      <h1>
        <strong>Zelle® Support Update:</strong> Our response and hold times may be longer than normal at our
        <a href>service center</a> due to the COVID-19 pandemic. We appreciate your patience.
      </h1>
    </div>
    <div class="nav-header">
      <div class="container px-0">
        <nav id="nav" class="navbar navbar-expand-md navbar-light px-0">
          <span>Zelle |</span>
          <a class="navbar-brand d-sm-flex" href>
            <img src alt />
            THIS IS HOW MONEY MOVES
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto flex-row">
              <li class="nav-item active">
                <router-link class="nav-link" to="/">HOW IT WORKS</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/get-started">GET STARTED</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/faq">FAQ</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/pay-safe">PAY IT SAFE</router-link>
              </li>
            </ul>
            
          </div>
          
        </nav>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./assets/style/custom";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
// @import '../node_modules/bootstrap-vue/src/_variables';
.header {
  background: $secondaryHeader;
  padding: 20px;
  h1 {
    font-size: 18px;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.nav-header {
  background: $primaryHeader;
  width: 100%;
  height: 70px;
  color: $primaryWhite;
  border-bottom: 1px solid $primaryWhite;
  #nav {
    padding: 10px;
    background: $primaryHeader;
    a {
      font-weight: 500;
      font-size: 14px;
      color: $primaryWhite;

      &.router-link-exact-active {
        color: $primaryWhite;
        border-bottom: 5px solid $primaryWhite;
      }
    }
    span {
      font-size: 2em;
      font-weight: 900;
      letter-spacing: -1px;
      word-spacing: 2px;
    }

    .navbar-nav {
      font-size: 18px;
    
      li {
        .nav-link {
          font-weight: 500;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
