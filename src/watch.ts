export default function Watch(obj: object) {
  return new Proxy(obj, {
    // 监听收集store
  })
}