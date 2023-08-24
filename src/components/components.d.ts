declare module '@vue/runtime-dom' {
  export interface GlobalComponents {
    Welcome: (typeof import('./Welcome/Welcome.vue'))['default']
  }
}

export {}
