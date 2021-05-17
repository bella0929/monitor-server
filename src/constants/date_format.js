// 统一时间记录格式
const UNIT = {};
UNIT.YEAR = 'year';
UNIT.MONTH = 'month';
UNIT.DAY = 'day';
UNIT.HOUR = 'hour';
UNIT.MINUTE = 'minute';
UNIT.SECOND = 'second';
UNIT.MILLSECOND = 'millsecond'; // countType最大支持10位字符串
// 数据库GroupBy

const SQL_GROUP_BY_YEAR = '%Y';
const SQL_GROUP_BY_MONTH = '%Y-%m';
const SQL_GROUP_BY_DAY = '%Y-%m-%d';
const SQL_GROUP_BY_HOUR = '%Y-%m-%d %H';
const SQL_GROUP_BY_MINUTE = '%Y-%m-%d %H:%i';
const SQL_GROUP_BY_SECOND = '%Y-%m-%d %H:%i:%s';
const SQL_GROUP_BY_MILLSECOND = '%Y-%m-%d %H:%i:%s.%f'; // 根据单位, 转为对应常量

const SQL_GROUP_BY_UNIT = {};
SQL_GROUP_BY_UNIT[UNIT.YEAR] = SQL_GROUP_BY_YEAR;
SQL_GROUP_BY_UNIT[UNIT.MONTH] = SQL_GROUP_BY_MONTH;
SQL_GROUP_BY_UNIT[UNIT.DAY] = SQL_GROUP_BY_DAY;
SQL_GROUP_BY_UNIT[UNIT.HOUR] = SQL_GROUP_BY_HOUR;
SQL_GROUP_BY_UNIT[UNIT.MINUTE] = SQL_GROUP_BY_MINUTE;
SQL_GROUP_BY_UNIT[UNIT.SECOND] = SQL_GROUP_BY_SECOND;
SQL_GROUP_BY_UNIT[UNIT.MILLSECOND] = SQL_GROUP_BY_MILLSECOND; // 数据库记录

const DATABASE_BY_YEAR = 'YYYY';
const DATABASE_BY_MONTH = 'YYYY-MM';
const DATABASE_BY_DAY = 'YYYY-MM-DD';
const DATABASE_BY_HOUR = 'YYYY-MM-DD_HH';
const DATABASE_BY_MINUTE = 'YYYY-MM-DD_HH:mm';
const DATABASE_BY_SECOND = 'YYYY-MM-DD_HH:mm:ss';
const DATABASE_BY_MILLSECOND = 'YYYY-MM-DD_HH:mm:ss.SSS'; // 根据单位, 转为对应常量

const DATABASE_BY_UNIT = {};
DATABASE_BY_UNIT[UNIT.YEAR] = DATABASE_BY_YEAR;
DATABASE_BY_UNIT[UNIT.MONTH] = DATABASE_BY_MONTH;
DATABASE_BY_UNIT[UNIT.DAY] = DATABASE_BY_DAY;
DATABASE_BY_UNIT[UNIT.HOUR] = DATABASE_BY_HOUR;
DATABASE_BY_UNIT[UNIT.MINUTE] = DATABASE_BY_MINUTE;
DATABASE_BY_UNIT[UNIT.SECOND] = DATABASE_BY_SECOND;
DATABASE_BY_UNIT[UNIT.MILLSECOND] = DATABASE_BY_MILLSECOND; // 命令行参数

const COMMAND_ARGUMENT_BY_YEAR = 'YYYY';
const COMMAND_ARGUMENT_BY_MONTH = 'YYYY-MM';
const COMMAND_ARGUMENT_BY_DAY = 'YYYY-MM-DD';
const COMMAND_ARGUMENT_BY_HOUR = 'YYYY-MM-DD HH';
const COMMAND_ARGUMENT_BY_MINUTE = 'YYYY-MM-DD HH:mm';
const COMMAND_ARGUMENT_BY_SECOND = 'YYYY-MM-DD HH:mm:ss';
const COMMAND_ARGUMENT_BY_MILLSECOND = 'YYYY-MM-DD HH:mm:ss.SSS'; // 根据单位, 转为对应常量

const COMMAND_ARGUMENT_BY_UNIT = {};
COMMAND_ARGUMENT_BY_UNIT[UNIT.YEAR] = COMMAND_ARGUMENT_BY_YEAR;
COMMAND_ARGUMENT_BY_UNIT[UNIT.MONTH] = COMMAND_ARGUMENT_BY_MONTH;
COMMAND_ARGUMENT_BY_UNIT[UNIT.DAY] = COMMAND_ARGUMENT_BY_DAY;
COMMAND_ARGUMENT_BY_UNIT[UNIT.HOUR] = COMMAND_ARGUMENT_BY_HOUR;
COMMAND_ARGUMENT_BY_UNIT[UNIT.MINUTE] = COMMAND_ARGUMENT_BY_MINUTE;
COMMAND_ARGUMENT_BY_UNIT[UNIT.SECOND] = COMMAND_ARGUMENT_BY_SECOND;
COMMAND_ARGUMENT_BY_UNIT[UNIT.MILLSECOND] = COMMAND_ARGUMENT_BY_MILLSECOND; // 数据展示

const DISPLAY_BY_YEAR = 'YYYY';
const DISPLAY_BY_MONTH = 'YYYY-MM';
const DISPLAY_BY_DAY = 'YYYY-MM-DD';
const DISPLAY_BY_HOUR = 'YYYY-MM-DD HH';
const DISPLAY_BY_MINUTE = 'YYYY-MM-DD HH:mm';
const DISPLAY_BY_SECOND = 'YYYY-MM-DD HH:mm:ss';
const DISPLAY_BY_MILLSECOND = 'YYYY-MM-DD HH:mm:ss.SSS'; // 根据单位, 转为对应常量

const DISPLAY_BY_UNIT = {};
DISPLAY_BY_UNIT[UNIT.YEAR] = DISPLAY_BY_YEAR;
DISPLAY_BY_UNIT[UNIT.MONTH] = DISPLAY_BY_MONTH;
DISPLAY_BY_UNIT[UNIT.DAY] = DISPLAY_BY_DAY;
DISPLAY_BY_UNIT[UNIT.HOUR] = DISPLAY_BY_HOUR;
DISPLAY_BY_UNIT[UNIT.MINUTE] = DISPLAY_BY_MINUTE;
DISPLAY_BY_UNIT[UNIT.SECOND] = DISPLAY_BY_SECOND;
DISPLAY_BY_UNIT[UNIT.MILLSECOND] = DISPLAY_BY_MILLSECOND;
export default {
  DATABASE_BY_YEAR,
  DATABASE_BY_MONTH,
  DATABASE_BY_DAY,
  DATABASE_BY_HOUR,
  DATABASE_BY_MINUTE,
  DATABASE_BY_SECOND,
  DATABASE_BY_MILLSECOND,
  COMMAND_ARGUMENT_BY_YEAR,
  COMMAND_ARGUMENT_BY_MONTH,
  COMMAND_ARGUMENT_BY_DAY,
  COMMAND_ARGUMENT_BY_HOUR,
  COMMAND_ARGUMENT_BY_MINUTE,
  COMMAND_ARGUMENT_BY_SECOND,
  COMMAND_ARGUMENT_BY_MILLSECOND,
  DISPLAY_BY_YEAR,
  DISPLAY_BY_MONTH,
  DISPLAY_BY_DAY,
  DISPLAY_BY_HOUR,
  DISPLAY_BY_MINUTE,
  DISPLAY_BY_SECOND,
  DISPLAY_BY_MILLSECOND,
  SQL_GROUP_BY_YEAR,
  SQL_GROUP_BY_MONTH,
  SQL_GROUP_BY_DAY,
  SQL_GROUP_BY_HOUR,
  SQL_GROUP_BY_MINUTE,
  SQL_GROUP_BY_SECOND,
  SQL_GROUP_BY_MILLSECOND,
  UNIT,
  DATABASE_BY_UNIT,
  COMMAND_ARGUMENT_BY_UNIT,
  DISPLAY_BY_UNIT,
  SQL_GROUP_BY_UNIT
};
//# sourceMappingURL=date_format.js.map