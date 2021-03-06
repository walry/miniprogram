import Taro from '@tarojs/taro'
import { View, Input, Button } from '@tarojs/components'
import { AtMessage } from 'taro-ui'

import './aip.scss'

class Aip extends Taro.Component {
    config = {
        navigationBarTitleText: '定投计算'
    }

    constructor(props){
        super(props)
        this.state = {
            amount: '',
            rate: '',
            period: '',

            cost: '',
            total: '',

            showResultEnable: false
        }
    }

    onAmountChange(e){
        this.setState({ amount: e.target.value })
    }

    onRateChange(e){
        this.setState({ rate: e.target.value })
    }

    onPeriodChange(e){
        this.setState({ period: e.target.value })
    }

    AtMessage(type,msg){
        Taro.atMessage({
            message : msg,
            type
        })
    }
    valid(){
        if(this.state.amount <= 0){
            this.AtMessage('warning','请输入定投金额！')
            return false
        }
        if(this.state.rate <= 0){
            this.AtMessage('warning','请输入定投收益率！')
            return false
        } 
        if(this.state.period <= 0){
            this.AtMessage('warning','请输入定投年限需!')
            return false
        }
        return true
    }

    handleCalc(){
        if(this.valid()){
            let r = this.state.rate / 100
            let m = this.state.amount * 12
            let cost = this.state.period * m
            let total = m * (1 + r) * (-1 + Math.pow(1 + r,this.state.period)) / r
            total = Math.round(total)
            this.setState({
                cost,
                total,
                showResultEnable: true
            })
        }
    }

    handleClear(){
        this.setState({
            amount: '',
            rate: '',
            period: '',
            showResultEnable: false
        })
    }

    render(){

        const { showResultEnable } = this.state

        return ( 
            <View className='aip'>
                <AtMessage />
                <View className="form">
                    <Input className="input" value={this.state.amount} onInput={this.onAmountChange} type='number' placeholder='请输入每月定投金额（元）' />
                    <Input className="input" value={this.state.rate} onInput={this.onRateChange} type='number' placeholder='请输入定投年收益率（%）' />
                    <Input className="input" value={this.state.period} onInput={this.onPeriodChange} type='number' placeholder='请输入定投年限（年）'/>
                    <View>
                        <Button className="button" type="primary" onClick={this.handleCalc.bind(this)}>计算</Button>
                        <Button className="button" onClick={this.handleClear.bind(this)}>清空</Button>
                    </View>
                </View>
                {
                    showResultEnable && (
                        <View className="result">
                        <View className="label">
                            总投资金额：<Text className="number">{this.state.cost}</Text>元
                        </View>
                        <View className="label">
                            预计到期总金额：<Text className="number">{this.state.total}</Text>元
                        </View>
                        <View className="label">
                            预期定投收益：<Text className="number">{this.state.total - this.state.cost}</Text>元
                        </View>
                    </View>
                
                    )
                }
            </View>
        )
    }
}