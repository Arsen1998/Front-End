const format = prompt('Please write the pictures format, 1 -> small 2 -> normal 3 -> big ')
const count = prompt('How many pictures do you want')
let result = 0
switch (format) {
    case "1":
        result = count * 10000;
    break
    case "2":
        result = count * 20000;
    break
    default:
        result = count * 30000;
}
if(count > 10) {
    alert(result - (result * 20 / 100))
} else {
    alert(result)
}