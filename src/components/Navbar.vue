<template>
  <div class="container-fluid">
    <div id="navbar-top">
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" style="color: aliceblue" href="#"
          ><img
            src="../assets/glasses.svg"
            alt="testIcon"
            width="25"
            height="25"
            style="margin: 0 10px 0 5px"
          />
          Test Nav Bar</a
        >
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
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" style="color: aliceblue" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style="color: aliceblue" href="/about">About</a>
            </li>
          </ul>
          <slot name="log-btn"></slot>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
#navbar-top {
  font-family: 'Noto Sans';
  font-weight: bold;
  color: aliceblue;
  background-color: #819ae6;
  width: 100vw;
}
</style>
