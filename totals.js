// recursive all sub category and get REAL value from the deepest item
const getCategoryProduct = (categories, amount) => {
    for (let i = 0; i < categories.length; i++) {
        const item = categories[i]
        if (item.categories.length === 0) {
            // if there is no item in categories -> take value of 'products'
            amount += item.products
        } else {
            // if there is sub category -> go to nested object
            amount = getCategoryProduct(item.categories, amount)
        }
    }
    return amount
}

const findTotals = () => {
    try {
        const data = require('./categories.json')
        if(!data){
            return new Error('data is empty!')
        }
        // looping though all main (level 1) category
        for (let i = 0; i < data.length; i++) {
            let productAmount = 0
            if (data[i].categories.length === 0) {
                // if there is no item in categories -> take value of 'products'
                productAmount += item.products
            } else {
                // if there is sub category -> go to nested object
                productAmount = getCategoryProduct(data[i].categories, productAmount)
            }
            console.log(data[i].id, productAmount)
        }
    } catch (err) {
        console.error(err)
    }
}

findTotals()