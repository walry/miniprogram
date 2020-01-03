import Taro from '@tarojs/taro'
import { View, RadioGroup, Radio, ScrollView } from '@tarojs/components'
import { AtInput, AtMessage } from 'taro-ui'

import './hl.scss'

class Hl extends Taro.Component {

    constructor(props){
        super(props)
        this.state = {
            principle: '',
            year: '',
            rate: '',

            all: '',
            interest: '',

            mode: '0',
            data: [],

            firstMonth: '',

            openEnable: false
        }
    }

    handlePrincipleChange(value){
        this.setState({ principle: value })
    }

    handleMonthChange(value){
        this.setState({ year: value })
    }

    handleRateChange(value){
        this.setState({ rate: value })
    }

    handleClearButton(){
        this.setState({
            principle: '',
            year: '',
            rate: '',
            openEnable: false
        })
    }

    handleCalcButton(){
        if(!this.valid()){
            return
        }

        const { principle, year, rate, mode } = this.state
        let p = principle * 10000
        let r = rate / (12 * 100)
        let m = year * 12
        
        if(mode == '0'){
            //等额本息
            this.calcModeZero(p,r,m)
        }
        if(mode == '1'){
            //等额本金
            this.calcModeOne(p,r,m)
        }

        this.setState({ openEnable: true })
    }

    calcModeZero(p,r,m){

        const monthPay = (p * r * Math.pow(1+r,m)) / (Math.pow(1+r,m) - 1)
        const pay = Math.round(monthPay * 100) / 100 
        let surplus = p
        let data = []
        let ti = 0

        for(let i = 1; i <= m; i ++){
            let obj = {}
            let monthInterest
            let cap
            monthInterest = surplus * r
            ti += monthInterest
            cap = monthPay - monthInterest
            surplus -= cap
            cap = Math.round(cap * 100) / 100 
            monthInterest = Math.round(monthInterest * 100) / 100
            obj.id = i
            obj.cap = cap
            obj.interest = monthInterest
            obj.pay = pay
            data.push(obj)
        }
        ti = Math.round(ti * 100) / 100
        this.setState({ data, firstMonth: pay, interest: ti, all: p + ti })
    }

    calcModeOne(p,r,m){
        const cap = p / m
        const c = Math.round(cap * 100) / 100
        let data = []
        let ti = 0
        for(let i = 1; i <= m; i ++){
            let obj = {}
            let surplus = p - (i -1) * cap
            let interest = surplus * r
            ti += interest
            let monthPay = cap + interest

            monthPay = Math.round(monthPay * 100) / 100
            interest = Math.round(interest * 100) / 100

            obj.id = i
            obj.cap = c
            obj.interest = interest
            obj.pay = monthPay

            data.push(obj)
        }
        let firstMonth = Math.round((cap + p * r) * 100) / 100
        ti = Math.round(ti * 100) / 100
        this.setState({ data, firstMonth, interest: ti, all: p + ti })
    }

    valid(){
        const { principle, year, rate } = this.state
        let msg = ''

        if(!principle){
            msg = "贷款总额不能为空！"
        }

        if(!year){
            msg = '贷款期限不能为空!'
        }

        if(!rate){
            msg = '贷款年利率不能为空！'
        }

        if(principle <= 0 || year <= 0 || rate <= 0){
            msg = '请输入正数!'
        }
        if(msg){
            Taro.atMessage({
                message : msg,
                type: 'warning'
            })
            return false
        }

        return true
    }

    handleRadioChange(e){
        this.setState({ mode: e.target.value })
    }

    render(){

        const { all, interest, mode, firstMonth, data, openEnable } = this.state
        const style = {
            height: '200px'
        }

        return (
            <View className="hl">
                <AtMessage />
                <AtInput
                    name='principle'
                    title='贷款总额'
                    type='digit'
                    placeholder='请输入贷款总额（万元）'
                    value={this.state.principle}
                    onChange={this.handlePrincipleChange.bind(this)}
                />
                <AtInput
                    name='year'
                    title='贷款期限'
                    type='number'
                    placeholder='请输入贷款期限（年）'
                    value={this.state.year}
                    onChange={this.handleMonthChange.bind(this)}
                /> 
                <AtInput
                    name='rate'
                    title='贷款年利率'
                    type='digit'
                    placeholder='请输入年利率（%）'
                    value={this.state.rate}
                    onChange={this.handleRateChange.bind(this)}
                />
                
                <RadioGroup className="radio" name="mode" onChange={this.handleRadioChange.bind(this)}>
                    <Radio value="0" checked>等额本息</Radio>
                    <Radio value="1" >等额本金</Radio>
                </RadioGroup>

                <Button className="button" type="primary" onClick={this.handleCalcButton.bind(this)}>计算</Button>
                <Button className="button" onClick={this.handleClearButton.bind(this)}>清空</Button>
                
                {
                    openEnable && (
                        <View className="result">
                            <View className="info">
                                <View className="item-label">{ mode == '0' ? '每月还款：' : '首月还款：' }<Text className="item-number">{firstMonth}</Text>元</View>
                                <View className="item-label">累计支付利息：<Text className="item-number">{interest}</Text>元</View>
                                <View className="item-label">累计还款总额：<Text className="item-number">{all}</Text>元</View>
                            </View>
                            <View className="table">
                                <View className='at-row tr'>
                                    <View className='at-col at-col-2'>期次</View>
                                    <View className='at-col at-col-3'>偿还本金</View>
                                    <View className='at-col at-col-3'>偿还利息</View>
                                    <View className='at-col at-col-3'>偿还本息</View>
                                </View>
                                <ScrollView scrollY style={style}>
                                    {
                                        data.map((item,i) => {
                                            return (
                                                <View className='at-row tr' key={i}>
                                                    <View className='at-col at-col-2'>{item.id}期</View>
                                                    <View className='at-col at-col-3'>{item.cap}</View>
                                                    <View className='at-col at-col-3'>{item.interest}</View>
                                                    <View className='at-col at-col-3'>{item.pay}</View>
                                                </View>
                                            )
                                        })
                                    }
                                </ScrollView>
                            </View>
                        </View>
                    )
                }
            </View>
        )
    }
}