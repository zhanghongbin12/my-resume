function getElements(refs) {
  const list = Array.isArray(refs) ? refs : [refs]

  return list.flatMap((item) => {
    if (!item) return []
    if (item.value !== undefined) {
      if (Array.isArray(item.value)) return item.value.filter(Boolean)
      return item.value ? [item.value] : []
    }
    if (item instanceof HTMLElement) return [item]
    return []
  })
}

export function useFadeIn(refs, options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -40px 0px' } = options
  const elements = getElements(refs)

  const reveal = (target) => {
    target.classList.add('visible')
    observer.unobserve(target)
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) reveal(entry.target)
      })
    },
    { threshold, rootMargin }
  )

  elements.forEach((el, i) => {
    el.style.transitionDelay = `${i * 80}ms`
    observer.observe(el)

    // Bottom sections may never satisfy the observer's shrunken root — reveal if already on screen
    requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect()
      const viewHeight = window.innerHeight || document.documentElement.clientHeight
      if (rect.top < viewHeight && rect.bottom > 0) reveal(el)
    })
  })

  return observer
}
