function dayOfWeeks(a) {

    let arr = ['Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday', 'Sunday']

    let index = arr.indexOf(a)
    return index > -1 ? index +1: 'error'

}