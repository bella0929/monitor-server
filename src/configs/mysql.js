// mysql 配置。 mysql 使用参见 https://dev.mysql.com/doc/refman/8.0/en/
import env from '~/src/configs/env'; // 下面的特定环境可以深度合并到上面的默认环境
// 线上环境是上面的默认环境，不要乱改哦
// 开发环境配置

const development = {
  /* normal */
  host: '47.242.181.237',
  port: '3306',
  user: 'root',
  password: '12345678',
  database: 'platform'
}; // 测试环境配置

const testing = development; // 线上环境

const production = testing;
let config = {
  development,
  testing,
  production
};
export default config[env];
//# sourceMappingURL=mysql.js.map