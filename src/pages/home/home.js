import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtGrid } from "taro-ui"
import Dingtou from "../../assets/icon/dingtou.png"
import Fangdai from "../../assets/icon/fangdai.png"
import CourseIcon from "../../assets/icon/video.png"

import './home.scss'

class Pqt extends Taro.Component {
    config = {
        navigationBarTitleText: '菜单'
    }

    constructor(props){
        super(props)
        this.state = {
            f: [
                { image: Dingtou, value: '定投复利' },
                { image: Fangdai, value: '房贷还款' },
                { image: CourseIcon, value: '课程推荐' }
            ]
        }
    }
    handButtonClick(item,index){
        const group = [ '/pages/aip/aip', '/pages/hl/hl','/pages/recomend/recomend' ]
        Taro.navigateTo({
            url: group[index]
        })
    }

    render(){
        const { f } = this.state
        return ( 
            <View className='home'>
                <AtGrid onClick={this.handButtonClick.bind(this)} hasBorder={false} data={f} />
            </View>
        )
    }
}