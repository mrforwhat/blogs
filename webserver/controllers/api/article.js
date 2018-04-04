/**
 * Created by Administrator on 2018/4/4/004.
 */
var Router = require('express').Router;

var router = new Router();

router.get('/list', function (req, res, next) {
    res.api({
        code: 200,
        result: {
            list: [
                {
                    id: 0,
                    title: '码农的自我修养1',
                    content: '辗转一流年，时光穿梭，岁月如水轻轻地蒸发，光景却是另一番。光阴积累回忆，时间循环生机，每一片旖旎的风光，孕育了每一片代表生机的翠绿，绿化了曾暗黄的校园。春天里的阳光轻暖如棉，细雨如针，轻轻落在浅黄的树叶上，深化每一点绿色，迎来四季的中央，妩媚了夏季艳阳天。',
                    date: new Date().getTime()
                },
                {
                    id: 1,
                    title: '码农的自我修养2',
                    content: '辗转一流年，时光穿梭，岁月如水轻轻地蒸发，光景却是另一番。光阴积累回忆，时间循环生机，每一片旖旎的风光，孕育了每一片代表生机的翠绿，绿化了曾暗黄的校园。春天里的阳光轻暖如棉，细雨如针，轻轻落在浅黄的树叶上，深化每一点绿色，迎来四季的中央，妩媚了夏季艳阳天。',
                    date: new Date().getTime()
                }
            ]
        }
    });
});

module.exports = router;