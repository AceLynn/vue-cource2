import Mock from "mockjs";

const Random = Mock.Random;

export const getUserInfo = (options) => {
  // console.log(options);
  // return options;
  // 设置 mock 随机方法
  const template = {
    "str|2-4": "lison",
    "name|5": "lison",
    "age|+2": 18,
    // 调用 random 生成随机数据
    email: Random.email(),
    rang: Random.range(3, 10, 2),
    data: Random.date("yyyy-MM-dd"),
    time: Random.time("hh:mm"),
    datetime: Random.datetime("yyyy-MM-dd hh:mm"),
    now: Random.now("minute", "yyyy-MM-dd"),
    img: Random.image("100x200", "#369", "#fff"),
    color: Random.color(),
    cword: Random.cword("玩儿索斯岛", 2, 5),
    cname: Random.cname(),
    email2: Random.email("lison.com"),
    region: Random.region(),
    province: Random.province(),
    city: Random.city(true),
    country: Random.county(true),
    zip: Random.zip(),
    upperFirstLetter: Random.capitalize("this is lower"),
    pick: Random.pick([1, 2, 3, 4, 5, 6]),
    shuffle: Random.shuffle([1, 2, 3, 4, 5, 6]),
    guid: Random.guid(),
    id: Random.id(),
    fruit: Random.fruit(),
  };
  return Mock.mock(template);
};
