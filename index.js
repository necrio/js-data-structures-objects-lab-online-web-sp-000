<<<<<<< HEAD
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  // Alternate using ES6 Spread operators:
  // return { ...driver, ...{ [key]: value } }
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;

  return driver;
}

function deleteFromDriverByKey(driver, key) {
  // Alternate using ES6 Spread operators:
  // const newObj = { ...driver }
  const newObj = Object.assign({}, driver);

  delete newObj[key];

  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];

  return driver;
}
=======
var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
 object[key] = value
return object
}

function deleteFromObjectByKey(object, key){
  var newObj =  Object.assign({},object)
  delete newObj[key]
  return newObj
}
>>>>>>> 37697b43f63f6f87c7ac56e4d1e2c77e76d41e55
