<script setup lang="ts">
import { navigationLinks } from '~/lib/links'

// Lucide Icons
import { Menu } from 'lucide-vue-next'
// Shadcn components start

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
// Shadcn components end
</script>

<template>
  <header class="w-full px-4">
    <div class="w-full flex flex-row items-center justify-between py-2 min-h-6">
      <p class="max-w-24">Logo</p>
      <NavigationMenu class="w-fit hidden md:block flex-shrink-0">
        <NavigationMenuList>
          <NavigationMenuItem
            v-for="(link, index) in navigationLinks"
            :key="index"
          >
            <NavigationMenuLink
              :class="[navigationMenuTriggerStyle(), 'group']"
            >
              <NuxtLink
                :to="link.route"
                class="flex flex-row items-center justify-start space-x-2 text-muted-foreground transition-colors group-hover:text-foreground hover:text-foreground"
              >
                <component v-if="link.icon" :is="link.icon" size="16px" />
                <p>{{ link.label }}</p>
              </NuxtLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Sheet>
        <SheetTrigger as-child>
          <Button variant="outline" size="icon" class="shrink-0 md:hidden">
            <Menu class="h-5 w-5" />
            <span class="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav class="grid gap-6 text-lg font-medium">
            <a href="#" class="flex items-center gap-2 text-lg font-semibold">
              <Package2 class="h-6 w-6" />
              <span class="sr-only">Acme Inc</span>
            </a>
            <NuxtLink
              v-for="(link, index) in navigationLinks"
              :key="index"
              :to="link.route"
              class="flex flex-row items-center justify-start space-x-2 text-muted-foreground transition-colors group-hover:text-foreground hover:text-foreground"
            >
              <component v-if="link.icon" :is="link.icon" size="16px" />
              <p>{{ link.label }}</p>
            </NuxtLink>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  </header>
</template>
