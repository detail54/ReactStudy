import React from 'react'
import ImgBox from '../../common/imgBox/ImgBox'
import HomeView from './HomeView'

const Home: React.FC = () => {
  const bgImgUrl =
    'https://image.istarbucks.co.kr/upload/common/img/main/2021/2021_halloween_bg.jpg'

  const imgUrl = [
    {
      id: 'slogan',
      alt: "IT'S BLACK GLAZED LATTE SEASON",
      url: 'https://image.istarbucks.co.kr/upload/common/img/main/2021/2021_halloween_slogan.png',
      width: '466px',
      height: '101px',
    },
    {
      id: '2021_halloween_drink1',
      alt: '바니라 미라 크림 프라푸치노',
      url: 'https://image.istarbucks.co.kr/upload/common/img/main/2021/2021_halloween_drink3.png',
      width: '613px',
      height: '528px',
    },
    {
      id: '2021_halloween_drink2',
      alt: '아이스 젠틀 조커 스윗 사워',
      url: 'https://image.istarbucks.co.kr/upload/common/img/main/2021/2021_halloween_drink2.png',
      width: '282px',
      height: '422px',
    },
    {
      id: '2021_halloween_drink3',
      alt: '펌킨 스파이스 라떼',
      url: 'https://image.istarbucks.co.kr/upload/common/img/main/2021/2021_halloween_drink1.png',
      width: '478px',
      height: '371px',
    },
  ]

  const setImgBox = imgUrl.map((img) => (
    <ImgBox
      key={img.id}
      alt={img.alt}
      imgUrl={img.url}
      boxWidth={img.width}
      boxHeight={img.height}
    />
  ))

  const viewProps = {
    bgImgUrl,
    setImgBox,
  }

  return <HomeView {...viewProps} />
}

export default Home
