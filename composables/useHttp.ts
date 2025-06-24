import type { FetchResponse, SearchParameters } from 'ofetch'
import cloneDeep from 'lodash-es/cloneDeep'

export interface ResOptions<T> {
  data: T
  code: number
  message: string
  success: boolean
}

function err(message: string = '请求失败！') {
  ElMessage.closeAll()
  ElMessage.error({
    message,
    customClass: 'min-w-80% break-all',
  })
}

function handleError<T>(response: FetchResponse<ResOptions<T>> & FetchResponse<ResponseType>) {
  const handleMap: Record<number, string> = {
    404: '服务器资源不存在',
    500: '服务器内部错误',
    403: '没有权限访问该资源',
    401: '登录状态已过期，需要重新登录',
  }

  const msg = response?._data?.message
  err(msg ?? handleMap[response.status])
}

// get方法传递数组形式参数
function paramsSerializer(params?: SearchParameters) {
  if (!params)
    return

  const query = useCloned(params, { clone: cloneDeep }).cloned.value as any
  Object.entries(query).forEach(([key, val]) => {
    if (typeof val === 'object' && Array.isArray(val) && val !== null) {
      query[`${key}[]`] = toRaw(val).map((v: any) => JSON.stringify(v))
      delete query[key]
    }
  })
  return query
}

const { public: { apiBase } } = useRuntimeConfig()
const fetch = $fetch.create({
  onRequest({ options }) {
    options.baseURL = apiBase
    options.headers = new Headers({
      ...options.headers,
      'Content-Type': 'application/json',
    })
    options.params = paramsSerializer(options.params)
  },
  onRequestError({ error }) {
    if (error.name === 'TimeoutError') {
      err('请求超时！请您稍后重试')
    }
  },
  onResponse({ response }) {
    if (response._data.code !== 200) {
      handleError(response)
      return Promise.reject(response._data)
    }
    return response._data
  },
  onResponseError({ response }) {
    handleError(response)
    return Promise.reject(response?._data ?? null)
  },
})

function awaitWrap<T>(promise: Promise<T>) {
  return promise.then((data: any) => [data.data, null]).catch(err => [null, err])
}

export const useHttp = {
  get: <T>(url: string, params?: any) => {
    return awaitWrap(fetch<T>(url, { method: 'get', params }))
  },
  post: <T>(url: string, body?: any) => {
    return awaitWrap(fetch<T>(url, { method: 'post', body }))
  },
  put: <T>(url: string, body?: any) => {
    return awaitWrap(fetch<T>(url, { method: 'put', body }))
  },
  delete: <T>(url: string, body?: any) => {
    return awaitWrap(fetch<T>(url, { method: 'delete', body }))
  },
}
