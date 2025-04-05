export default class LikeVue {
  #element = null
  #template
  #data

  static createApp = createApp

  constructor(
    /* options */
    { data = () => ({}), template = null } = {}
  ) {
    this.#data = data()
    this.#template = template
    this.#setReactivity()
  }

  #setReactivity() {
    this.$data = new Proxy(this.#data, {
      get: (target, prop) => {
        return Reflect.get(target, prop)
      },
      set: (target, prop, newValue) => {
        const oldValue = target[prop]
        const result = Reflect.set(target, prop, newValue)
        // 데이터가 변경되면 렌더링
        if (oldValue !== newValue) {
          this.#render()
        }
        return result
      },
    })
  }

  #render() {
    if (this.#template && typeof this.#template === 'string') {
      // 템플릿을 HTML로 변환
      const renderedHTML = this.#template.replace(
        /\{\{(.*?)\}\}/g,
        (match, p1) => {
          const key = p1.trim()
          return this.$data[key] !== undefined ? this.$data[key] : ''
        }
      )

      // 요소에 HTML 삽입
      if (this.#element) {
        this.#element.innerHTML = renderedHTML
      }
    }
  }

  mount(selectorOrHTMLElement) {
    if (typeof selectorOrHTMLElement === 'string') {
      this.#element = document.querySelector(selectorOrHTMLElement)
    } else {
      this.#element = selectorOrHTMLElement
    }

    this.#render() // 처음 렌더링

    return this
  }

  unmount() {
    if (this.#element) {
      this.#element.innerHTML = '' // 요소 내용을 비움
    }
  }

  on(selector, type, listener) {
    this.#element.addEventListener(type, (e) => {
      if (e.target.matches(selector)) {
        listener(this.$data, e)
      }
    })
  }
}

export function createApp(options) {
  return new LikeVue(options)
}
