def two_sums(nums,target):
    store = {}
    
    for i in range (len(nums)):
        num = nums[i]
        compliment = target - num
        
        if compliment in store:
            compliment_idx = store[compliment]
            return [compliment_idx,i]
        
        store[num] = i
    
    return []

print(two_sums([3,3],6))