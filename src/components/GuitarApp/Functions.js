
export const moveElementsOfArrayToRight = (arr) => {
  return [
    arr[arr.length - 1],
    ...arr.splice(0, arr.length - 1)
  ]
}

export const moveElementsOfArrayToLeft = (arr) => {
  let flippedArray = arr.splice(1, arr.length)
  flippedArray.push(arr[0])

  return flippedArray
}

export const moveElementsOfArray = (arr, direction, moves) => {
  let x = 0

  switch (direction) {
    default:
    case 'left':
      for (x = 0; x < moves; x++) {
        arr = moveElementsOfArrayToLeft(arr)
      }
      break
    case 'right':
      for (x = 0; x < moves; x++) {
        arr = moveElementsOfArrayToRight(arr)
      }
      break
  }
  return arr
} 

const fillArrayByPositions = (arrayToFill, positions, originalArrayLength) => {
  let newArray = []
  let count = 0

  for (var v = 0; v < originalArrayLength; v++) {
    for (var j = 0; j < positions.length; j++) {
      if (positions[j] === v){
        newArray.push(arrayToFill[j])
        count += 1
      }
    }
    if (count === v) {
      newArray.push('')
      count += 1
    }
  }
  return newArray
}

const searchInArrayForElementsActiveAndTheirPositions = (arr) => {
  let positions = []
  let elementsActive = []

  for (var x = 0; x < arr.length; x++) {
    if (arr[x] !== '') {
      elementsActive.push(arr[x])
      positions.push(x)
    }
  }
  return  {'positions': positions,
           'elementsActive': elementsActive}
}

// This function should convert ['', 'a', '', 'b', 'c'] to ['', 'c', '', 'a', 'b']
export const moveElementsActiveOfArrayToRigth = (arr) => {
  let positionsAndActiveElements = searchInArrayForElementsActiveAndTheirPositions(arr)
  let flippedArray = moveElementsOfArrayToRight(positionsAndActiveElements.elementsActive)

  return fillArrayByPositions(flippedArray, positionsAndActiveElements.positions, arr.length)
}

// This function should convert ['', 'a', '', 'b', 'c'] to ['', 'c', '', 'a', 'b']
export const moveElementsActiveOfArrayToLeft = (arr) => {
  let positionsAndActiveElements = searchInArrayForElementsActiveAndTheirPositions(arr)
  let flippedArray = moveElementsOfArrayToLeft(positionsAndActiveElements.elementsActive)
    
  return fillArrayByPositions(flippedArray, positionsAndActiveElements.positions, arr.length) 
}

export const countElementsOfAnArray = (arr) => {
  let count = 0
  for (var x = 0; x < arr.split(' ').length; x++) {
    if (arr.split(' ')[x] !== '') {
      count++
    }
  }
  return count
}

export const cleanTheNote = (note) => {
  if (note.includes('#')) {
    return note.charAt(0) + note.charAt(1)
  }
  else {
    return note.charAt(0)
  }
}


