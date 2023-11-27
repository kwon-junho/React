import React, { Component } from "react";

// class MyName extends Component {
//     static defaultProps = {
//         name: '기본이름'
//     }
//     render(){
//         return (
//             <div>
//                 안녕하세요 제 이름은 <b> {this.props.name} </b>
//             </div>

//         );
//     }
// }
// -> 함수형으로 변경
const MyName = ({name}) => {
    return (
        <div>
            안녕하십니까? {name}
        </div>
    );
};

export default MyName;