import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import List from "../../components/list"
import { observer, inject } from "@tarojs/mobx"

@inject('courseStore')
@observer

class Recomend extends Taro.Component {

    handleItemClick(id){
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