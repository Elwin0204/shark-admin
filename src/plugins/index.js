import './element'
import './support'
import '@/styles/sk.scss'
import '@/remixIcon'
import '@/colorfulIcon'
import '@/config/permission'
import '@/utils/errorLog'
import './faIcon'
import './components'
import './themes'
import { initDB } from '@/utils/localforage'
import { initGenid } from '@/utils/snowFlake'
import { initDirectives } from './directives'
import { initGlobals } from './globals'

initDB()
initGenid()
initGlobals()
initDirectives()
