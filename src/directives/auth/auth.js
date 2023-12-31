import { checkAuth } from '@/utils/auth'

function handleCheck(el, binding) {
  const { value } = binding
  if (value && value instanceof Array && value.length > 0) {
    if (!checkAuth(value)) el.parentNode && el.parentNode.removeChild(el)
  } else {
    throw new Error(`roles is empty! eg: v-has="['admin','editor']"`)
  }
}

export default {
  inserted(el, binding) {
    handleCheck(el, binding)
  },
  update(el, binding) {
    handleCheck(el, binding)
  },
}
