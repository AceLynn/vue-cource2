import Mock, { Random } from "mockjs";
import { getUserInfo } from "./response/user";

Mock.mock("/getUserInfo", "post", getUserInfo);

Random.extend({
  fruit() {
    const fruit = ["apple", "peach", "lemon"];
    return this.pick(fruit);
  },
});

export default Mock;
