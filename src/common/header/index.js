import React, { Component } from "react";
import { Link } from "react-router-dom";
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
  getListArea() {
    const {
      focused,
      list,
      page,
      mouseIn,
      totalPage,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage
    } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>);
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i
                ref={icon => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe851;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>

        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>&#xe60a;</i>
            {this.getListArea()}
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
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"])
    // focused:state.get("header").get('focused')
  };
};
const mapDispathToProps = dispatch => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreator.getList());
      dispatch(actionCreator.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreator.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreator.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreator.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";
      console.log(originAngle);
      if (page < totalPage) {
        dispatch(actionCreator.changePage(page + 1));
      } else {
        dispatch(actionCreator.changePage(1));
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Header);
