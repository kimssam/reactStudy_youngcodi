//!!tailed Css는 다른 스타일과 같이 주면 설정때문에 동작안하므로 따로 프로젝트 만들어서 공식문서 보면서 Install Tailwind CSS with Vite 링크를 따라함!!
export const TailwindCss = () => {
  return (
    <div className="border border-gray-400 rounded-2xl p-2 m-2 flex justify-around items-center">
      <p className="m-0 text-gray-400">Tailwind CSS입니다</p>
      <button className="bg-gray-300 border-0 p-2 rounded-md hover:bg-gray-400 hover:text-white">
        버튼
      </button>
    </div>
  );
};
