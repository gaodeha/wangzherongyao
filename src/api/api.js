import wepy from 'wepy';
import Session from '@/utils/session';
import constants from '@/utils/constants';

const host = 'https://api.kaopuxun.com';

/***
 * @class
 * 表示请求过程中发生的异常
 */
const RequestError = (function () {
  function RequestError(type, message) {
    Error.call(this, message);
    this.type = type;
    this.message = message;
  }

  RequestError.prototype = new Error();
  RequestError.prototype.constructor = RequestError;

  return RequestError;
})();


const wxRequest = async (params = {}, url, showToast = true) => {
  showToast && wepy.showToast({
    title: '加载中',
    icon: 'loading'
  });
  let header = {'Content-Type': 'application/x-www-form-urlencoded'}
  const session = Session.get();
  if(session && session.authToken){
    header[constants.HEADER_AUTH_TOKEN] = session.authToken;
  }
  if(params.header) {
    Object.assign(header, params.header);
  }
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: params.data || {},
    header: header,
  });
  showToast && wepy.hideToast();
  if (res.statusCode === 200) {
      const data = res.data;
      const header = res.header;
      if (header && header.authToken) {
        if (session) {
          session.authToken = header.authToken;
          Session.set(session);
        }
      }
      if (data.code === 0) {
          return data.data;
      } else {
          console.error("request fail with errorCode:", data);
          return Promise.reject(new RequestError(data.code, data.message))
      }
  } else {
    const errMsg = "request fail with statusCode:" + res.statusCode;
    console.error(errMsg)
    return Promise.reject(new RequestError(res.statusCode, errMsg));
  }
};

const post = 'POST';

const get = 'GET';


// Login
const login = (params) => wxRequest(params, host + '/api/user/login');
const startExam = () => wxRequest({method: post}, host + '/api/paper/start');
const getQuestion = (paperId, qIndex) => wxRequest({method: post}, host + `/api/paper/question/${paperId}/${qIndex}`);
const answerQuestion = (paperId, qIndex, choose) => wxRequest({ data: {choose}, method: post}, host + `/api/paper/answer/${paperId}/${qIndex}`);
const answerTimeout = (paperId, qIndex) => wxRequest({ method: post}, host + `/api/paper/timeout/${paperId}/${qIndex}`, false);

const getRanks = () => wxRequest({method: get}, host + `/api/rank/list`);
const getFriendRanks = () => wxRequest({method: get}, host + `/api/rank/friend`);
const getRewards = (showToast) => wxRequest({method: get}, host + `/api/redpocket/list`, showToast);
const getRedPocket = (paperId) => wxRequest({method: post}, host + `/api/redpocket/draw/${paperId}`);
const loadConfig = () => wxRequest({method: get}, host + `/api/config/list`, false);
const reportShare = (title, path, imageUrl) => wxRequest({method: post, data: { title, path, imageUrl } }, host + `/api/share/report`, false);
const redraw = (amount) => wxRequest({method: post, data: {amount}}, host + `/api/redraw/add`);
const getRedraws = () => wxRequest({method: get}, host + `/api/redraw/list`);
const reportUserRelation = (uid) => wxRequest({method: post}, host + `/api/relation/follow/${uid}`, false);

module.exports = {
  login,
  startExam,
  getQuestion,
  answerQuestion,
  answerTimeout,
  getRanks,
  getFriendRanks,
  getRewards,
  getRedraws,
  getRedPocket,
  loadConfig,
  reportShare,
  redraw,
  reportUserRelation
};
