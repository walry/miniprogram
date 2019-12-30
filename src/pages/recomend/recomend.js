import Taro from '@tarojs/taro'
import { View, image, Button } from '@tarojs/components'
import List from "../../components/list"

class Recomend extends Taro.Component {

    constructor(props){
        super(props)
        this.state = {
            courseList: [
                {
                    src: "https://wj.jd100.com/20191230145450d4d26cf260c0e333b10a44092b81c736.png",
                    title: "最新完整React从入门到精通纯干货，企业级实战项目",
                    from: "腾讯课堂",
                    price: "￥98.00",
                    classHour: "196节"
                },
                {
                    src: "https://wj.jd100.com/20191230145450d4d26cf260c0e333b10a44092b81c736.png",
                    title: "最新完整React从入门到精通纯干货，企业级实战项目",
                    from: "腾讯课堂",
                    price: "￥98.00",
                    classHour: "196节"
                },
                {
                    src: "https://wj.jd100.com/20191230145450d4d26cf260c0e333b10a44092b81c736.png",
                    title: "最新完整React从入门到精通纯干货，企业级实战项目",
                    from: "腾讯课堂",
                    price: "￥98.00",
                    classHour: "196节"
                },
            ]
        } 
    }

    handleItemClick(course){
        // Taro.previewImage({
        //     urls: ["https://wj.jd100.com/2019123011364200673e015793e86c82f3e95fd608cf3e.png","https://wj.jd100.com/2019123011414559ddb3448bf62510b77ec390eecd7d49.jpeg"]
        // })

       // https://wj.jd100.com/20191230145450d4d26cf260c0e333b10a44092b81c736.png

        console.log('course---',course)
        Taro.navigateTo({
            url: ''
        })
    }

    render(){
        const { courseList } = this.state
        return (
           <View className="recomand">
            {
                courseList.map(item => {
                    return (
                        <List key={item.title + item.price} course={item} onClick={this.handleItemClick.bind(this,item)} />
                    )
                })
            }
           </View>
        )
    }
}