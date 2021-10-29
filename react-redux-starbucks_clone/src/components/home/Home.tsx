import React from 'react'
import ImgBox from '../../common/imgBox/ImgBox'
import HomeView from './HomeView'

const Home: React.FC = () => {
  const imgUrl = [
    {
      id: 'slogan',
      alt: "IT'S BLACK GLAZED LATTE SEASON",
      url: 'https://image.istarbucks.co.kr/upload/common/img/main/2021/2021_chiristmas_slogan.png',
      width: '328px',
      height: '131px',
    },
    {
      id: '2021_christmas_drink1',
      alt: '토피넛 라떼',
      url: 'https://image.istarbucks.co.kr/upload/common/img/main/2021/2021_christmas_drink1.png',
      width: '295px',
      height: '341px',
    },
    {
      id: '2021_christmas_drink2',
      alt: '핑크 캐모마일 릴렉서, 골든 위시 라떼, 토피 넛 콜드 브루',
      url: 'https://image.istarbucks.co.kr/upload/common/img/main/2021/2021_christmas_drink2.png',
      width: '503px',
      height: '511px',
    },
    {
      id: '2021_christmas_drink1',
      alt: '펌킨 스파이스 라떼',
      url: 'https://image.istarbucks.co.kr/upload/common/img/main/2021/2021_christmas_drink3.png',
      width: '236px',
      height: '417px',
    },
    {
      id: 'main_visual',
      alt: 'main_visual',
      url: 'https://image.istarbucks.co.kr/upload/common/img/main/2021/2021_chiristmas_bg_left.png',
      width: '348px',
      height: '150px',
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
    setImgBox,
  }

  return <HomeView {...viewProps} />
}

export default Home
