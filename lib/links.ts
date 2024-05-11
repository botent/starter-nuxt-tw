import { HomeIcon } from 'lucide-vue-next'
import type { Link } from '~/types'

const navigationLinks: Link[] = [
  {
    label: 'Home',
    route: '/',
    icon: HomeIcon,
  },
  {
    label: 'Link 2',
    route: '/',
    icon: HomeIcon,
  },
  {
    label: 'Link 3',
    route: '/',
    icon: HomeIcon,
  },
]

export { navigationLinks }
