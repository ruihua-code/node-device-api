/**
 * 接口返回数据结构定义
 */
const ResponseJson = {
  message: undefined,
  data: undefined,
  isSuccess: true,
  success: ({ data, message } = { data: undefined, message: "成功" }) => {
    this.message = message;
    this.data = data;
    this.isSuccess = true;
    return ResponseJson;
  },

  error: ({ message, data } = { data: undefined, message: "失败" }) => {
    this.message = message;
    this.data = data;
    this.isSuccess = false;
    return ResponseJson;
  },

  json: () => {
    return {
      message: this.message,
      data: this.data,
      isSuccess: this.isSuccess,
    };
  },
};
module.exports = ResponseJson;
