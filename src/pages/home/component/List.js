import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { ListItem, ListInfo, LoadMore } from "../style";
import { actionCreator } from "../store";
import { Link } from "react-router-dom";
class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {list.map((item, index) => (
          <Link key={index} to="/detail">
            <ListItem>
              <img className="pic" src={item.get("imgUrl")} alt="" />
              <ListInfo>
                <h3 className="title"> {item.get("title")}</h3>
                <p className="desc">{item.get("desc")}</p>
              </ListInfo>
            </ListItem>
          </Link>
        ))}
        <LoadMore onClick={() => getMoreList(page)}>加载更多</LoadMore>
      </div>
    );
  }
}

const mapState = state => ({
  list: state.getIn(["home", "articleList"]),
  page: state.getIn(["home", "acticlePage"])
});
const mapDispatch = dispatch => ({
  getMoreList(page) {
    dispatch(actionCreator.getMoreList(page));
  }
});

export default connect(
  mapState,
  mapDispatch
)(List);
