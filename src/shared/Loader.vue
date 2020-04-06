<template lang="pug">
    #everithyng
        .loader-countainer
        .loader-countainer2
        .circle
            img(src="../../public/discos-compactos (1).png" width="80px")
</template>

<style scoped>
.loader-countainer {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 215px;
  height: 215px;
  border: solid 4px transparent;
  border-top-color: #94545c;
  background: azure;
  border-left-color: #94545c;
  border-radius: 50%;
  animation: loader 1.2s linear infinite;
}

.loader-countainer2 {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  border: solid 8px transparent;
  border-top-color: #fd746c;
  background: azure;
  border-right-color: #fd746c;
  border-radius: 50%;
  animation: loader 1.5s linear infinite;
}

.circle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  background: azure;
  border: solid 8px transparent;
  border-radius: 50%;
  animation: loader 2s linear infinite;
}

@keyframes loader {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
