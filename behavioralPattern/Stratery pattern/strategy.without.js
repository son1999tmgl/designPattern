/**
 * 8/3
 * ngày trùng tháng
 * blackFriday
 * Tết âm
 */

/**
 * 
 * @param {*} defaultPrice 
 * @param {*} typePromotion 
 */
function getPrice(defaultPrice, typePromotion) {
    if(typePromotion == 'promoiton83'){
        return defaultPrice*0.9;
    }
    else if(typePromotion == 'promotionDayMonth') {
        return defaultPrice*0.8;
    }
    
    else if(typePromotion == 'promotionBlackFriday') {
        return defaultPrice*0.7;
    }
    
    else if(typePromotion == 'promotionLunarNewYear') {
        return defaultPrice*0.5;
    }
    return defaultPrice;  
}

console.log('price: ', getPrice(100, 'promotionDayMonth'));