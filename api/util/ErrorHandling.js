/**
 * Pass a mongoose error.errors object in and get back a array of object containing them nicely layed out.
 * @param errors
 */
exports.genErrorBag = (errors) => {
  const errorBag = []

  for (let error in errors) {
    errorBag.push({ field: error, error: errors[error].message })
  }

  return errorBag
}
