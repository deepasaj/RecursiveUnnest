const data = {
 a: {confidence: 0, value: 0},
 b: {confidence: 1, value: "abc"},
 c: {confidence: 1, value: {confidence: 1, value: {confidence: 0, value: 12345}}},
 d: {confidence: 0, value: [1, 2, 3]},
 e: {confidence: 0, value: [{confidence: 0, value: "sajani"}, {confidence: 0, value: "deepa"}]},
  
 f: {confidence: 1, value: { "remainingAmount": {confidence: 0, value: [{confidence: 0, value: "sajani"}, {confidence: 0, value: "deepa"}]},
                             "totalLoanAmount": { "confidence": 1.0, "value": 4322345.0}}},
  g: {confidence: 1, value: [{ "remainingAmount": { "confidence": 1.0, "value": 2344.0 },
                             "totalLoanAmount": { "confidence": 1.0, "value": 4322345.0}},
                           { "remainingAmount": { "confidence": 1.0, "value": 2},
                             "totalLoanAmount": { "confidence": 1.0, "value": 4}}]}, 
  h: { "remainingAmount": { "confidence": 1.0, "value": 2344.0 },
                             "totalLoanAmount": { "confidence": 1.0, "value": 4322345.0}},
  i: [{ "remainingAmount": { "confidence": 1.0, "value": 2344.0 },
                             "totalLoanAmount": { "confidence": 1.0, "value": 4322345.0}}],
  j: [1, 2, 3]
}

function flattenDict(dict, key) {
  if ("value" in dict) {
      const extractedValue = dict["value"]
      return flatten(extractedValue, key)
  } else {
      let response = {}
      Object.entries(dict).forEach(([key, value]) => {
        let valueTemp =  flatten(value, key)
        response[key] = valueTemp
      })
      return response
  }
}

function flattenArray(array) {
    let result = []
    for (const elem of array) {
      result.push(flatten(elem))
    }
    return result
}

function flatten(value, key = "") {
  if (value instanceof Array) {
    return flattenArray(value)
  }
  if (value instanceof Object) {
    return flattenDict(value, key)
  } 
  return value
}

function normalize(data) {
  return flatten(data)
}
console.log(normalize(data))

