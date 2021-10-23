function findMin(nums: number[]): number {
  // compire first index with last index
  if (nums[nums.length - 1] < nums[0]) {
    return moveLeft(nums)
  // compire first index with secand inedex
  } else if (nums[1] < nums[0]) {
    return moveRight(nums)
  // compire first index with last index
  } else if (nums[nums.length - 1] === nums[0]) {
    return moveLeft(nums)
  // compire first index with secand inedex
  } else if (nums[1] === nums[0]) {
    return moveRight(nums)
  } 

  return nums[0];
};

// Compaire each number from left
function moveLeft(nums: number[]) {
  let min = nums[nums.length - 1]
  // move to each left index
  for (let i = nums.length - 1; i > 0; i--) {
    // compire numbers
    if (nums[i] < nums[i - 1]) {
      return nums[i];
    } 
    
  }
  // return min number
  return min
}

// Compire each number from right
function moveRight(nums: number[]) {
  let min = nums[1]
  // move to each right index
  for (let i = 1; i < nums.length - 1; i++) {
    // compire numbers
    if (nums[i] < nums[i + 1]) {
      return nums[i];
    } 
    
  }
  // return min number
  return min
}