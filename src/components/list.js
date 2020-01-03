import Taro from "@tarojs/taro"
import { View, Text, Button, Image } from '@tarojs/components'
import './style.scss'
import Right from "../assets/icon/right.png"

export default class List extends Taro.Component {

    constructor(props){
        super(props)
    }

    handleListClick(){
        this.props.onClick()
    }

    render(){
        const { course } = this.props
        return (
            <View className="list" onClick={this.handleListClick.bind(this)}>
                <View className="center-item">
                    <Image className="image" src={course.src} />
                </View>
                <View className="item">
                    <Text className="title">{course.title}</Text>
                    <Text className="class-hour">{course.classHour}</Text>
                    
                </View>
                {/* <View className="item">
                    <Text className="price">{course.price}</Text>
                    <Text className="from">{course.from}</Text>
                </View> */}
                <View className="center-item">
                    <Image className="right" src={Right} />
                </View>
            </View>
        )
    }
}