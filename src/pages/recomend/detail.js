import Taro from "@tarojs/taro"
import { View, Image, Text, Input } from "@tarojs/components"
import { observer, inject } from "@tarojs/mobx"
import './recomend.scss'
import { AtCard } from "taro-ui"

@inject('courseStore')
@observer

class CourseDetail extends Taro.Component {

    constructor(props){
        super(props)
        this.state = {
            inputValue: ''
        }
    }

    handleCopyButtonClick(link){
        Taro.setClipboardData({
            data: link
        })
    }

    handlePreviewButtonClick(poster){
        Taro.previewImage({ urls: poster })
    }

    render(){
        const { courseStore: { getCourseById } } = this.props
        const detail = getCourseById(this.$router.params.id)
        
        return (
            <View className="course-detail">
                { !detail && ( <Text>未找到该课程详情！</Text> ) }
                {
                    detail && (
                        <View>
                            <Text className="head">老师介绍</Text>
                            <View className="at-article author">
                                <Image className="at-article__img avatar" mode="centor" src={detail.avatarUrl} />
                                <Text className='at-article__p'>{detail.authorInfo}</Text>
                            </View>
                            <Text className="head">目录</Text>
                            <View className="catalog">
                            {
                                detail.catalog.map((item,i) => {
                                    return ( <View className="cartalog-item" key={i.toString()}>{item}</View> )
                                })
                            }
                            </View>
                            <Text className="head">教育机构概况</Text>    
                            <View className="company-label">{detail.team.title}</View>
                            <View className="team-content at-article">
                                <View className="feature"><Text className="at-article__h3 feature-label">总学习人次</Text><Text className="at-article__p feature-value">{detail.team.learnPeople}</Text></View>
                                <View className="feature"><Text className="at-article__h3 feature-label">课程数</Text><Text className="at-article__p feature-value">{detail.team.courseNum}</Text></View>
                                <View className="feature"><Text className="at-article__h3 feature-label">好评率</Text><Text className="at-article__p feature-value">{detail.team.buyerPraise}</Text></View>
                            </View>
                            <Text className="head">课程入口</Text>
                            <AtCard
                                className="buy-card"
                                note='由于小程序权限问题不能直接打开课程链接，所以需要将链接发送朋友或自己后点击打开，另外也可以直接在浏览器里打开。'
                                extra='课程链接'
                                title='方式一：'
                                >
                                <Input className="link-input" type='text' value={detail.link} disabled />
                                <Button type="primary" onClick={this.handleCopyButtonClick.bind(this,detail.link)}>复制</Button>
                            </AtCard>
                            <AtCard
                                className="buy-card"
                                note='由于小程序权限问题不能识别海报二维码，所以需要将海报发送朋友或自己来识别海报中的二维码。'
                                extra='海报'
                                title='方式二：'
                                >
                                <Button type="primary" onClick={this.handlePreviewButtonClick.bind(this,detail.poster)}>预览海报</Button>
                            </AtCard>
                        </View>
                    )
                }
            </View>
        )
    }
}
