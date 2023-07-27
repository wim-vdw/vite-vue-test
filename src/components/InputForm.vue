<template>
  <form class="mt-3 needs-validation" novalidate>
    <div>
      <slot name="title"></slot>
    </div>
    <div>
      <slot name="fields"></slot>
    </div>
    <div>
      <slot name="buttons"></slot>
    </div>
  </form>
</template>
