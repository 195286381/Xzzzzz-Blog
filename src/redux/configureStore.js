/**
 * create by Xzzzzz in 03/08/2017
 */

if (process.env.NODE_ENV === 'production') { // 生成环境
    module.exports = require('./configureStore.prod')
} else { // 开发环境
    module.exports = require('./configureStore.dev')
}