import Taro from '@tarojs/taro'
import { View, Video } from '@tarojs/components'
import Poster from "../../assets/icon/poster.png"

import './video.scss'

class VideoCourse extends Taro.Component {

    render(){
        return (
            <View className='video'>
                <Video className="video-item"
                    src="https://www.runoob.com/try/demo_source/mov_bbb.mp4"
                    objectFit="cover"
                />
            </View>
        )
    }
}
