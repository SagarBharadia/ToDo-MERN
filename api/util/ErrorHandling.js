exports.genErrorBag = (errors) => {
  const errorBag = []

  for (let error in errors) {
    errorBag.push({ field: error, error: errors[error].message })
  }

  return errorBag
}
