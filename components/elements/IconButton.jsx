// 아이콘에 마우스 올리면 아이콘 투명효과 + 커서 변환 포인터 

import React from 'react'

const IconButton = ({icon, onClickIcon = () => {} }) => {

  return (
    <div
      onClick ={onClickIcon}
      className="flex justify-center items-center w-[36px] h-[36px]
      hover : bg-[rgba(144,144,144,0,45)] rounded-full cursor-pointer"
      >
      {icon}
    </div>
  )
};

export default IconButton

