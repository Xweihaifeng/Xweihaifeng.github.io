/*
 * @Description:
 * @Author: 魏驰
 * @Date: 2021-03-02 17:22:03
 * @LastEditors: 魏驰
 * @LastEditTime: 2021-03-03 11:36:06
 */
import moment from "moment";

// 页面一次展示五条数据，为了便于看出在轮播，所以此处只六条数据，
const data = [
  {
    title: "第一条数据....",
    city: "杭州",
    time: moment(202103022200, "YYYYMMDDhhmmss").fromNow() ,
  },
  {
    title: "阿里云....",
    city: "杭州",
    time: moment(202103022002, "YYYYMMDDhhmmss").fromNow(),
  },
  {
    title: "中台....",
    city: "上海",
    time: moment(202103022102, "YYYYMMDDhhmmss").fromNow(),
  },
  {
    title: "阿里妈妈....",
    city: "北京",
    time: moment(202103022152, "YYYYMMDDhhmmss").fromNow(),
  },
  {
    title: "同城销售....",
    city: "杭州",
    time: moment(202102022202, "YYYYMMDDhhmmss").fromNow(),
  },
  {
    title: "最后一条数据....",
    city: "杭州",
    time: moment(202103022301, "YYYYMMDDhhmmss").fromNow(),
  },
  // {
  //   title: "中台....",
  //   city: "上海",
  //   time: moment(2021030221044, "YYYYMMDDhhmmss").fromNow(),
  // },
  // {
  //   title: "阿里妈妈....",
  //   city: "北京",
  //   time: moment(202103022308, "YYYYMMDDhhmmss").fromNow(),
  // },
  // {
  //   title: "阿里云....",
  //   city: "杭州",
  //   time: moment(202103023202, "YYYYMMDDhhmmss").fromNow(),
  // },
  // {
  //   title: "中台....",
  //   city: "上海",
  //   time: moment(202103022252, "YYYYMMDDhhmmss").fromNow(),
  // },
  // {
  //   title: "阿里妈妈....",
  //   city: "北京",
  //   time: moment(202103022212, "YYYYMMDDhhmmss").fromNow(),
  // },
  // {
  //   title: "同城销售....",
  //   city: "杭州",
  //   time: moment(202103022232, "YYYYMMDDhhmmss").fromNow(),
  // },
  // {
  //   title: "阿里云....",
  //   city: "杭州",
  //   time: moment(202103022122, "YYYYMMDDhhmmss").fromNow(),
  // },
];

export default data;
