// printResult simply printing each category and its products
const printResult = (arr) => {
    const keys = Object.keys(arr)
    for (let i = 0; i < keys.length; i++) {
        console.log(keys[i], ':',arr[keys[i]])
    }
    console.log()
}
// createCategoryKey create category name base on its category level.
// its will be easy to see it with sub-category structure
// I know it will be issue if there are more than 5 level so, this is just for sake of this assessment
const createCategoryKey = (id, level) => {
    if (level === 0) {
        return ` ${id}`
    } else if (level === 1) {
        return `   ${id}`
    } else if (level == 2) {
        return `     ${id}`
    } else if (level == 3) {
        return `       ${id}`
    } else if (level == 4) {
        return `         ${id}`
    } else {
        return `           ${id}`
    }
}
// category's name, this variable to store category's name in correct order
// so its easy so print as natural category order
// let names = {}
// recursive to count all products number of the nested object
const getCategoryProduct = (categories, amount, level,names) => {
    level++
    for (let i = 0; i < categories.length; i++) {
        const item = categories[i]
        let itemProduct = item.products
        const name = createCategoryKey(item.id, level)
        names[name] = 0
        if (item.categories.length > 0) {
            itemProduct = getCategoryProduct(item.categories, item.products, level, names)
        }
        amount += itemProduct
        // record names for later display result
        names[name] = itemProduct
    }
    return amount
}

const findTotals = () => {
    try {
        const data = require('./categories.json')
        if (!data) {
            return new Error('data is empty!')
        }
        // looping though all main (level 1) category
        for (let i = 0; i < data.length; i++) {
            let categoryNames = {}
            // create object with temporary value = 0, will update it after calculation
            categoryNames[createCategoryKey(data[i].id,0)] = 0
            let productAmount = data[i].products
            if (data[i].categories.length > 0) {
                productAmount = getCategoryProduct(data[i].categories, productAmount, 0,categoryNames)
            }
            // update category's product value after calculation
            categoryNames[createCategoryKey(data[i].id,0)] = productAmount
            printResult(categoryNames)
            categoryNames = {}
        }
    } catch (err) {
        console.error(err)
    }
}

findTotals()