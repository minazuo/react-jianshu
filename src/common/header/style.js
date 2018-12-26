import styled from "styled-components";

import logoPic from "../../static/logo.png";
export const HeaderWrapper = styled.div`
  height: 56px;
  background-color: #3f3f3f;
  border-color: #2f2f2f;
  position: relative;
`;

export const Logo = styled.a.attrs({
  href: "/"
})`
  height: 56px;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`;
export const NavItem = styled.div`
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #c8c8c8;
  }
  &.active {
    color: #ea6f5a;
  }
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #c8c8c8;
`;
/*.slide 为html中的class名*/
export const SearchWrapper = styled.div` 
    float:left;
    position:relative;
 
   
    .iconfont{
      position:absolute;
      right:5px;
      bottom:5px;
      width:30px;
      line-height:30px;
      border-radius:15px;
      text-align:center;
      &.focused {
       background:red;
      }
    }
   
`

export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  box-sizing: border-box; /* box不加padding的值*/
  border: none;
  outline: none;
  border-radius: 19px;
  border-color: #4f4f4f;
  background: #4f4f4f;
  color: #c8c8c8;
  font-size: 14px;
  &::placeholder {
    color: #c8c8c8;
  }
  &.focused {
    width:240px;
  }
  &.slide-enter{
     transition: all 200ms ease-out;
  }
  &.slide-enter-active{
    width:240px;
  }
  &.slide-exit{
    transition: all 200ms ease-out;
  }
  &.slide-exit-active{
    width:160px;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top:56px;
  width :240px;
  padding:0 24px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
`;

export const SearchInfoTitle = styled.div`
  margin-top:20px;
  margin-bottom:15px;
  line-height:20px;
  font-size:14px;
  color:#969696;
`;
export const SearchInfoList = styled.div`
  overflow:hidden;
`;

export const SearchInfoItem = styled.a`
  display:block;
  float:left;
  padding:0 5px;
  line-height:20px;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-size:12px;margin-right:5px;
  margin-bottom:10px;
  color:#969696;
`;


export const SearchInfoSwitch = styled.span`
 float:right;
 font-size:13px;
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;
export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ea6f5a;
  margin-right: 20px;
  padding: 0 20px;
  &.reg {
    color: #ea6f5a;
  }
  &.writing {
    color: #fff;
    background: #ea6f5a;
  }
`;
