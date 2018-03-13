var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  
return object
}

function deleteFromObjectByKey(object, key) {
  const newObj = Object.assign({}, object)

  delete newObj[key]

  return newObj
}

<<<<<<< HEAD
function destructivelyDeleteFromObjectByKey(object, key) {
=======
function desructivelyDeleteFromObjectByKey(object, key) {
>>>>>>> 69465171da8381e0652f04cd7867f52dbd7fa886
  delete object[key]
  return object
}
