module.exports = function toReadable (num) {
  let str  = '';
  const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const decArr = ['zero', 'ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  
  const numsplit = String(num).split('')
  const twoLength = (numsplit) => {
    return num < 20 ? `${arr[num]}` : `${decArr[Number(numsplit[0])]} ${arr[Number(numsplit[1])]}`
  }
  const threeLength = (numsplit) => {
    return num > 99 && num !== 100 || 200 || 300 || 400 ||500 || 600 || 700 || 800 || 900
                           ? `${arr[Number(numsplit[0])]} hundred ${twoLength(numsplit.slice(1), num = Number(numsplit.slice(1).join('')))}` 
                           : `${arr[Number(numsplit[0])]} hundred`
  }
  if(num < 100) {
    str = twoLength(numsplit)
  }
  if(num > 99 && num < 1000) {
    str = threeLength(numsplit)
  }
  return str.split(' ').filter(item => item !== 'zero').join(' ') || 'zero'
}
