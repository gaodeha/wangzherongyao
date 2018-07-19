const mockImages = [
  "http://p16ubc2o5.bkt.clouddn.com/avatar/6f654707aac7fe96a7cda4e3a112fc97_1.jpg",
  "http://p16ubc2o5.bkt.clouddn.com/avatar/67ee1fcfcb84d4f7b8ec34688ed82f81_1.jpg",
  "http://p16ubc2o5.bkt.clouddn.com/avatar/a877d5a2db5114f38e766bba3fcb0d47_1.jpg",
  "http://p16ubc2o5.bkt.clouddn.com/avatar/bda748a2813dc0ff2eb265ee58662700_1.jpg",
  "http://p16ubc2o5.bkt.clouddn.com/avatar/f5a603b43c3b264cf9221bd5fb0c1ecb_1.jpg",
  "http://p16ubc2o5.bkt.clouddn.com/avatar/f0a4e9d9f91038244e2c60f04f842390_1.jpg",
  "http://p16ubc2o5.bkt.clouddn.com/avatar/c82a3cb121c431f55f420183b5fb57ca_1.jpg",
  "http://p16ubc2o5.bkt.clouddn.com/avatar/b206b8dce1b60041becbd2b0632bbe77_1.jpg",
  "http://p16ubc2o5.bkt.clouddn.com/avatar/9e400ff0f8c3e47c99c5c7bdd73b8cd2_1.jpg",
  "http://p16ubc2o5.bkt.clouddn.com/avatar/982df1ac2c92ee6b9f30a9def1f9769d_1.jpg",
  "http://p16ubc2o5.bkt.clouddn.com/avatar/83551ffbb36ff6f4aa6e7e8d75b59109_1.jpg",
  "http://p16ubc2o5.bkt.clouddn.com/avatar/6be6aa4cd71b14221982746d418c17a9_1.jpg"
];

const mockNames = [
  "花姐Iris",
  "彭琳",
  "无法安静",
  "幸福de小熊..",
  "简单水果",
  "小梦",
  "张鹏",
  "米饭",
  "藏在瓶中的西班牙阳光",
  "凛冬将至"
];


function _choose(choices) {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

const ryRanks = [];
const ylRanks = [];

for (let i=0; i< 20; i++) {
  ryRanks.push({
    avatarUrl: _choose(mockImages),
    nickName: _choose(mockNames),
    rankText: "¥" + (20 - i + Math.random()).toFixed(2)
  })
  ylRanks.push({
    avatarUrl: _choose(mockImages),
    nickName: _choose(mockNames),
    rankText: "挑战" + (110 - i) + "次"
  })
}

const getRanksMock = () => Promise.resolve({
  ryRanks,
  ylRanks
});

const getRewardsMock = () => Promise.resolve({
  stat: {
    chanceRemain: Math.floor(Math.random() * 20),
    passedTotal: Math.floor(Math.random() * 20),
    redpocketRemain: (Math.random() * 10).toFixed(2),
    redpocketTotal: (Math.random() * 10).toFixed(2)
  },
  items: [
    {
      detail: "¥0.08",
      updateTime: "2018-06-29 12:12:11"
    },
    {
      detail: "¥3.00",
      updateTime: "2018-06-28 12:12:11"
    },
    {
      detail: "¥1.08",
      updateTime: "2018-06-27 12:12:11"
    },
    {
      detail: "¥0.08",
      updateTime: "2018-06-29 12:12:11"
    },
    {
      detail: "¥3.00",
      updateTime: "2018-06-28 12:12:11"
    },
    {
      detail: "¥1.08",
      updateTime: "2018-06-27 12:12:11"
    }
  ]
});

const getRedrawsMock= () => Promise.resolve(
  [
    {
      id: "12s2sddafsdfsd",
      amount: (6 + Math.random()).toFixed(2),
      addTime: "2018-06-29 12:12:11",
      redrawStatus: _choose(["未发送", "处理中", "已完成"])
    },
    {
      id: "17s2sddafsdfsd",
      amount: (7 + Math.random()).toFixed(2),
      addTime: "2018-06-29 12:12:11",
      redrawStatus: _choose(["未发送", "处理中", "已完成"])
    },
    {
      id: "18s2sddafsdfsd",
      amount: (8 + Math.random()).toFixed(2),
      addTime: "2018-06-29 12:12:11",
      redrawStatus: _choose(["未发送", "处理中", "已完成"])
    }
  ]
);

const getRedPocketMock = (paperId) => Promise.resolve((Math.random() * 10).toFixed(2));


const loadConfigMock = () => Promise.resolve({
  "question_count": 18,
  "kefu": "www",
  "gongzhonghao": "荣耀闯关",
  "share_title": "王者荣耀闯关赢红包，你能赢多少？?",
  "share_images": '["http://game.gtimg.cn/images/yxzj/img201606/heroimg/183/183-mobileskin-1.jpg", "http://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127-mobileskin-1.jpg"]'
});

const reportShareMock = (title, path, imageUrl) => Promise.resolve(true);

const redrawMock = (amount) => Promise.resolve(true);

const reportUserRelationMock = () => Promise.resolve(true);
