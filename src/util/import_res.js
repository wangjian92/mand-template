const _import_ = (filePath) => (resolve) => {
  return import('@/components/' + filePath).then(module => resolve(module))
}
export default _import_
