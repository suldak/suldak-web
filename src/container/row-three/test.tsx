import React, {useState, useEffect} from 'react'

interface BlockAreaProps {
  positionArray: number[];
}

const Test: React.FC<BlockAreaProps> = ({ positionArray }) => {
  const [onCounting, setOnCounting] = useState<number>(0)

  function plusCount() {
    setOnCounting(onCounting + 1)
  }

  function plusCount2() {
    setOnCounting(prev => prev + 1)
  }
  
  return (
    //* 원본 좌표e데이터의 length만큼 반복하여 element 배치
    <Container>
      {positionArray.map((num: number, columnIndex) => (
        <>
          <BlockColumn columnIndex={columnIndex} positionArray={positionArray} />
        </>
      ))}
    </Container>
    //* 배치하는 column에 인덱스값 부여 , 원본값 전달
  );
};

export default Test;
