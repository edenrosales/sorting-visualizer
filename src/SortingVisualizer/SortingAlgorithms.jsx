function selectionSort(array){
    const animations = []
    doSelectionSort(array,animations)
    return animations
}

function doSelectionSort(array, animations){
//    var swapOccured = false
    const arrayLength=array.length
    for(let i =0; i<arrayLength; i++){
        let lowestIndex = i
        for(let j =i + 1; j<arrayLength; j++){
            if(array[j]<array[lowestIndex]){
                lowestIndex=j;
                const animation = {}
                animation.pink= [lowestIndex]
                animations.push(animation)
            }
            else{
            const animation = {}
            animation.green=j
            animations.push(animation)
            }
        }
        const animation= {}
        animation.purple = i -1
        animation.red=[i, lowestIndex]
        animations.push(animation)
        let temp = array[i]
        array[i] = array[lowestIndex]
        array[lowestIndex] = temp
    }
}

function bubbleSort(array){
    const animations = []
    doBubbleSort(array,animations)
    return animations
}

function doBubbleSort(arr,animations){
    const arrayLength = arr.length
    for(let i= 0; i<arrayLength; i++){
        for(let j=0; j<arrayLength - 1 - i; j++){

            if(arr[j]> arr[j+1]){
                var temp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
                const animation= {}
                animation.green = [j,j+1]
                animation.red = [j,j+1]
                animations.push(animation)
            }
            else { 
                const animation = {}
                animation.green = [j, j+1]
                animations.push(animation)
            }
        }
        const animation= {}
        animation.purple = arrayLength - 1 - i;
        animations.push(animation)
    }
}
export {selectionSort ,bubbleSort}

 