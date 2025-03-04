// npx create-react-app 04-react-css
// npm install node-sass@9 (node-sass는 node version과 호환이 되는 버전으로 설치하지 않으면 에러가나므로 node version20에서는 node-sass@9 버전으로 설치한다!!)
//설치후 버전 확인하려면 04 폴더 안에서 npm show node-sass version 으로 확인!
import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>CSS Modules입니다</p>
      <button className={classes.button}>버튼</button>
    </div>
  );
  //return()뒤에 ;이 없으면 에러남!!
};