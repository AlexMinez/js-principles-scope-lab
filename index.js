// Write your solution in this file!
var customerName = 'bob'

function upperCaseCustomerName(){
    window.customerName = 'BOB'
    return customerName
}
function setBestCustomer(){
    window.bestCustomer = 'not bob'
    return bestCustomer
}
function overwriteBestCustomer(){
    window.bestCustomer = 'maybe bob'
    return bestCustomer
}
const leastFavoriteCustomer = 'hello'
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'goodbye'
    return leastFavoriteCustomer
}