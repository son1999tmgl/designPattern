/**
 * 8/3
 * ngày trùng tháng
 * blackFriday
 * Tết âm
 */



/**
 * 
 * @param {*} price 
 * @returns 
 */
function promotion83(price){
    return price*0.9
}

/**
 * 
 * @param {*} price 
 * @returns 
 */
function promotionDayMonth(price) {
    return price*0.8
}

/**
 * 
 * @param {*} price 
 * @returns 
 */
function promotionBlackFriday(price) {
    return price*0.7
}

/**
 * 
 * @param {*} price 
 * @returns 
 */
function promotionDefault(price) {
    return price
}


const getPriceStrategy = {
    promotionDayMonth: promotionDayMonth,
    promotion83: promotion83,
    promotionBlackFriday: promotionBlackFriday,
    promotionDefault: promotionDefault

}

/**
 * 
 * @param {*} defaultPrice 
 * @param {*} typePromotion 
 */
function getPrice(defaultPrice, typePromotion) {
    return getPriceStrategy[typePromotion](defaultPrice)
}

console.log('price: ', getPrice(100, 'promotionDayMonth'));