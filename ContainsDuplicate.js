var containsDuplicate = function(nums) {
    uniqueNums = new Set()

    for (let item of nums) {
        if (uniqueNums.has(item)) {
            return true
        } else {
            uniqueNums.add(item)
        }
    }
    return false
    
};