import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

class Pqt extends Taro.Component {
    config = {
        navigationBarTitleText: '量化交易'
      }

    render(){

        return ( 
            <View className='pqt'>
                量化交易程序尚在开发中。。。。
            </View>
        )
    }
}