import Taro from '@tarojs/taro'
import { view } from '@tarojs/components'

class QuillEditor extends Taro.Component {
    config = {
        navigationBarTitleText: '富文本'
      }

    render(){

        return ( 
            <View className='quill'></View>
        )
    }
}