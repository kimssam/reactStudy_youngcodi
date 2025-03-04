//css 내부선언방식에서는 속성명에 -를 사용하지 않고 camelCase로 작성한다.
export const ColoredMessage = (props) => {
    console.log(props)

    //Props분할 대입 destructuring assignment 여부(destructure를 한다 안한다를 결정할 것)
    const {color, children} = props;

    const contentStyle={
        // color:"blue",
        // color:props.color,
        // color:color,
        color,
        fontSize : "20px"
      }
      
    // return <p style={contentStyle}>{props.message}</p>
    // return <p style={contentStyle}>{props.children}</p>
    return <p style={contentStyle}>{children}</p>
}

