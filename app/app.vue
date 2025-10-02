<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <header class="mx-auto max-w-7xl px-4 py-4 md:px-8">
      <h1 class="text-2xl font-semibold">Receitas pelo que tenho</h1>
    </header>
    <div
      class="mx-auto grid max-w-7xl gap-6 p-4 md:grid-cols-[320px_1fr] md:p-8"
    >
      <PantrySidebar class="hidden md:block" />
      <NuxtPage />
    </div>
  </div>
</template>
