import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Topic from "./component/Topic";
import List from "./component/List";
import Writer from "./component/Writer";
import Recommend from "./component/Recommend";
import { actionCreator } from "./store";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style.js";

// PureComponent  immutable管理数据
class Home extends PureComponent {
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  bindEvents() {
    // window.onscroll = this.props.changeScrollTopShow();
    window.addEventListener("scroll", this.props.changeScrollTopShow());
  }
  shouldComponentUpdate() {}
  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow());
  }
  render() {
    const { showScroll } = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="//upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=""
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
      </HomeWrapper>
    );
  }
}
const mapState = state => ({
  showScroll: state.get("home").get("showScroll")
});

const mapDispathToProps = dispatch => ({
  changeHomeData() {
    dispatch(actionCreator.getHomeInfo());
  },
  changeScrollTopShow(e) {
    console.log(e);
    let scroll = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    if (scroll > 400) {
      dispatch(actionCreator.toggleTopShow(true));
    } else {
      dispatch(actionCreator.toggleTopShow(false));
    }
  }
});
export default connect(
  mapState,
  mapDispathToProps
)(Home);
