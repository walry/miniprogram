import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtAvatar } from 'taro-ui'

import './index.scss'


@inject('counterStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: 'PQT'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleButtonClick(){
    Taro.navigateTo({
      url: '/pages/home/home'
    })
  }

  render () {
    const opendata = {
      type: 'userAvatarUrl'
    }
    return (
      <View className='index'>
        <AtAvatar circle size='large' openData={opendata}></AtAvatar>
        <View className='description'><Text >欢迎进入量化交易小程序！</Text></View>
        <Button type='primary' onClick={this.handleButtonClick.bind(this)}>点击进入</Button>
      </View>
    )
  }
}

export default Index 
