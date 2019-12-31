import { observable } from 'mobx'

const courseStore = observable({
    courseList: [
        {
            id: 1,
            src: "//10.url.cn/qqcourse_logo_ng/ajNVdqHZLLC9MP4mjYngOic3KJQmib2QIFYI6KZ2TpEqN0uJAcb97ap3EiaCp9ZHvGjhqr6fVo9ic4k/90",
            title: "最新完整React从入门到精通纯干货，企业级实战项目",
            from: "腾讯课堂",
            price: "￥98.00",
            classHour: "196节",
            avatarUrl:"//10.url.cn/eth/ajNVdqHZLLBBbyRPtEr4bCAxP2X6Qlic3EeXaI6d3I6sWaNl2Mq2ibfoDT9yicunt2s4LbUWIJKodM/130",
            authorInfo:"李杰，程序思维创始人，资深前端工程师。8年以上软件开发经验，熟悉大前端技术，拥有丰富的Web前端和移动端开发经验，尤其对react技术栈和移动Hybrid开发技术有深入的理解和实践经验。教学思路明确，认真负责，毫无保留，希望大家共同进步，实现自己的梦想！",
            catalog:[
                "01 react介绍与安装",
                "02 webpack4教程（一）",
                "03 webpack4教程（二）",
                "04 React基础（一）",
                "05 React基础（二）",
                "06 React基础（三）",
                "07 React高级",
                "08 react-router-dom路由",
                "09 Redux状态管理和axios、fetch数据流（一）",
                "10 Redux状态管理和axios、fetch数据流（二）",
                "11 React常用UI库的使用",
                "12 多语言国际化",
                "13 项目架构搭建",
                "14 Immutable的使用",
                "15 mobx的使用",
                "16 React实战项目仿京东电商(做完后天下无敌)",
                "17 React实战项目仿京东电商（二）",
                "18 React实战项目仿京东电商（三）",
                "19 React实战项目仿京东电商（四）",
                "20 React实战项目仿京东电商（五）",
                "21 React实战项目仿京东电商（六）",
                "22 React实战项目仿京东电商（七）",
                "23 React实战项目仿京东电商（八）",
                "24 React实战项目仿京东电商（九）"
            ],
            team: {
                learnPeople: 16,
                buyPeople: 20,
                courseNum: 17,
                buyerPraise: "100%"
            },
            link: "https://ke.qq.com/course/474705?saleToken=1876781",
            poster: ""
        },
        {
            id: 2,
            src: "https://wj.jd100.com/20191230145450d4d26cf260c0e333b10a44092b81c736.png",
            title: "最新完整React从入门到精通纯干货，企业级实战项目",
            from: "腾讯课堂",
            price: "￥98.00",
            classHour: "196节"
        },
        {
            id: 3,
            src: "https://wj.jd100.com/20191230145450d4d26cf260c0e333b10a44092b81c736.png",
            title: "最新完整React从入门到精通纯干货，企业级实战项目",
            from: "腾讯课堂",
            price: "￥98.00",
            classHour: "196节"
        },
    ],

    getCourseById(id){
        const arr = courseStore.courseList.filter(item => item.id == id)
        if(arr.length > 0){
            return arr[0]
        }
        return
    },

})

export default courseStore