import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtAvatar } from 'taro-ui'

import './index.scss'


@inject('counterStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
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
    Taro.switchTab({
      url: '/pages/quill/quill'
    })
  }

  render () {
    const opendata = {
      type: 'userAvatarUrl'
    }
    return (
      <View className='index'>
        <AtAvatar circle size='large' openData={opendata}></AtAvatar>
        <View className='description'><Text decode>&emsp;欢迎进入量化交易小程序！</Text></View>
        <Button type='primary' onClick={this.handleButtonClick.bind(this)}>点击进入</Button>
      </View>
    )
  }
}

export default Index 
