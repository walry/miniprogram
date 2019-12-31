import Taro from "@tarojs/taro"
import { View, Image, Text } from "@tarojs/components"
import { observer, inject } from "@tarojs/mobx"
import './recomend.scss'

@inject('courseStore')
@observer

class CourseDetail extends Taro.Component {

    render(){
        const { courseStore: { getCourseById } } = this.props
        const detail = getCourseById(this.$router.params.id)
        console.log('detail---',detail)
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
                            <Text className="head">课程概况</Text>    
                            <View className="team-content at-article">
                                <View className="feature"><Text className="at-article__h3 feature-label">学习人次</Text><Text className="at-article__p feature-value">{detail.team.learnPeople}</Text></View>
                                <View className="feature"><Text className="at-article__h3 feature-label">购买人数</Text><Text className="at-article__p feature-value">{detail.team.buyPeople}</Text></View>
                                <View className="feature"><Text className="at-article__h3 feature-label">课程数</Text><Text className="at-article__p feature-value">{detail.team.courseNum}</Text></View>
                                <View className="feature"><Text className="at-article__h3 feature-label">好评率</Text><Text className="at-article__p feature-value">{detail.team.buyerPraise}</Text></View>
                            </View>
                            <Text className="head">如何购买</Text>
                               
                        </View>
                    )
                }
            </View>
        )
    }
}
