import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import List from "../../components/list"
import { observer, inject } from "@tarojs/mobx"

@inject('courseStore')
@observer

class Recomend extends Taro.Component {

    handleItemClick(id){
        // Taro.previewImage({
        //     urls: ["https://wj.jd100.com/2019123011364200673e015793e86c82f3e95fd608cf3e.png","https://wj.jd100.com/2019123011414559ddb3448bf62510b77ec390eecd7d49.jpeg"]
        // })

       // https://wj.jd100.com/20191230145450d4d26cf260c0e333b10a44092b81c736.png

        console.log('course---',id)
        Taro.navigateTo({
            url: '/pages/recomend/detail?id=' + id
        })
    }

    render(){
        const { courseStore: { courseList } } = this.props
        return (
           <View className="recomand">
            {
                courseList.map(item => {
                    return (
                        <List key={item.id.toString()} course={item} onClick={this.handleItemClick.bind(this,item.id)} />
                    )
                })
            }
           </View>
        )
    }
}