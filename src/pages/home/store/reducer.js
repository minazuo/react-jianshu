import { fromJS } from "immutable";
import * as actionTypes from "./constants";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  acticlePage: 0,
  showScroll: true
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      });
    case actionTypes.ADD_ARTICLE_LIST:
      return state.merge({
        articleList: fromJS(state.get("articleList").concat(action.list)),
        articlePage: fromJS(action.nextPage)
      });
    case actionTypes.TOGGLE_SCROLL_TOP:
      console.log(action.show);
      return state.set("showScroll", action.show);
    default:
      return state;
  }
};
