interface CustomError {
  code: number;
  message: string;
  original: any | null;
}
class CustomError extends Error {
  static CODE = {
    SUCCESS: 0,            // success
    UNKNOWN: 1,            // 未知错误	001	未定义的应用错误
    FAILED: 2,             // 操作失败	002	存取数据库的时候失败
    FORBIDDEN: 3,          // 禁止访问	003	无权限或者不允许当前状态下访问
    PARAMS_INVALID: 4,     // 参数错误	004	接口调用参数错误
    NOT_EXISTS: 5,         // 访问的记录不存在
    NOT_LOGGED: 6,         // 未登录
    TIMEOUT: 7,            // 超时
    UNSUPPORTE: 8,        // 不支持的操作	008	当前状态不支持指定的操作
    DUPLICATION: 9,        // 字段重复	009	某些字段名重复
    TOO_OFTEN: 10,         // 访问过于频繁	010	接口访问过于频繁
    NOT_FOUND: 11,         // NOT FOUND
  };

  constructor(code = CustomError.CODE.UNKNOWN, original = null, message = '') {
    super(message);
    this.code = code;
    this.original = original;
    this.name = 'CustomError';
  }
}

export default CustomError;