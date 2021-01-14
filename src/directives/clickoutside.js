const clickoutside = {
  bind(el, binding) {
    function handler(e) {
      !el.contains(e.target) && binding.value()
    }
    document.addEventListener('click', handler)
    el.handler = handler
  },
  unbind(el) {
    document.removeEventListener('click', el.handler)
  }
}

export default clickoutside
