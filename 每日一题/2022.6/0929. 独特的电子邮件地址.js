/*
 * @Author: ZhangTuo 13120409722@163.com
 * @Date: 2022-06-04 22:44:17
 * @LastEditors: ZhangTuo 13120409722@163.com
 * @LastEditTime: 2022-06-04 23:18:13
 * @FilePath: \leetcode-js\每日一题\929. 独特的电子邮件地址.js
 * @Description:
 */
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const set = new Set();
  emails.forEach((item) => {
    const contents = item.split("@", 2);
    set.add(contents[0].split("+")[0].replaceAll(".", "") + "@" + contents[1]);
  });
  return set.size;
};

const emails = [
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com",
];
console.log(numUniqueEmails(emails));
