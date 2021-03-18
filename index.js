/*
 * @Author: Quinn
 * @Date: 2020-09-27 18:18:58
 * @LastEditTime: 2020-11-26 18:39:17
 * @LastEditors: quinn
 * @Description:  
 */
// experiences: {
//     province_list: {
//         110000: 'Amazon类',
//         120000: 'eBay类',
//         130000: 'AliExpress类',
//         140000: '无',
//         150000: '其它',
//     },
//     city_list: {
//         110100: '全部',
//         110200: '熟悉Amazon基础规则',
//         110300: '操作过Amazon后台',
//         120100: '全部',
//         120200: '熟悉eBay基础规则',
//         120300: '操作过eBay后台',
//         130100: '全部',
//         130200: '熟悉AliExpress基础规则',
//         130300: '操作过AliExpress后台',
//         140100: '无',
//         150100: '其它',
//     }
// } 

function getList(start) {
    let end = new Date().getFullYear();
    let obj = {
        province_list: {},
        city_list: {}
    }
    for (let i = start, j = 11; i <= end; i++, j++) {
        obj.province_list[j + '0000'] = i
    }
    for (let key in obj.province_list) {
        let n = key.slice(0, 2),
            s = obj.province_list[key]
        for (let i = s, j = 1; i <= end; i++, j++) {
            obj.city_list[n + (j > 9 ? j : '0' + j) + '00'] = i
        }
    }
    return obj
}
getList(1980);