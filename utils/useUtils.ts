export default function useUtils() {
  function isFalsy(value: any) {
    return ['', undefined, null].includes(value)
  }

  function getAssetsFile(path: string) {
    return new URL(`../assets/images/${path}`, import.meta.url).href
  }

  function useWithResolvers() {
    let resolve, reject
    const promise = new Promise((rs, rj) => {
      resolve = rs
      reject = rj
    })
    return { promise, resolve, reject }
  }

  return {
    isFalsy,
    getAssetsFile,
    useWithResolvers,
  }
}
