import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
// 获取推荐列表,查看qq音乐列表接口的参数来填写
export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0, // qq号，不填则为0
    needNewCode: 1
  })

  return jsonp(url, data, options)
}
