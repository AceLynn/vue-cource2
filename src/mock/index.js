import Mock from "mockjs";
import { getUserInfo } from "./response/user";

Mock.mock("/getUserInfo", "post", getUserInfo);

export default Mock;
