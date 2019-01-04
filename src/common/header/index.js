import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from "./style";
import { actionCreator } from "./store";

class Header extends Component {
  getListArea(show) {
    if (show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={this.props.focused} timeout={200} classNames="slide">
              <NavSearch
                className={this.props.focused ? "focused" : ""}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              />
            </CSSTransition>
            <i className={this.props.focused ? "focused iconfont" : "iconfont"}>&#xe60a;</i>
            {this.getListArea(this.props.focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writing">
            <i className="iconfont">&#xe615;</i>写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

//如果一个函数只有render 函数可以写成无状态组件

const mapStateToProps = state => {
  return {
    focused: state.getIn(["header", "focused"])
    // focused:state.get("header").get('focused')
  };
};
const mapDispathToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreator.getList());
      dispatch(actionCreator.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreator.searchBlur());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Header);
