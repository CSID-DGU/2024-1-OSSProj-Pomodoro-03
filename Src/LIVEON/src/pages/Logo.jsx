import {useEffect, useState} from 'react';
import {Link, Navigate} from 'react-router-dom';

import Button from '@/components/Button';
import AnimationLogo from '@/parts/AnimationLogo';
import {Helmet} from 'react-helmet-async';

const SPLASH_KEY = 'd3mj2aom9hmfz7v';

function Logo() {
  const [isShowSplash] = useState(() => {
    const splash = JSON.parse(localStorage.getItem(SPLASH_KEY));
    return splash ? true : false;
  });

  useEffect(() => {
    if (!isShowSplash) {
      localStorage.setItem(SPLASH_KEY, JSON.stringify(true));
    }
  }, [isShowSplash]);

  if (isShowSplash) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <Helmet>
        <title>LIVE:ON</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="자취인 전용 위치기반 커뮤니티 리본(LIVE: ON)"
        />
        <meta
          property="twitter:title"
          content="자취인 전용 위치기반 커뮤니티 리본(LIVE: ON)"
        />
        <meta property="og:type" content="web application" />
        <meta property="og:url" content="https://LIVEON.vercel.app" />
        <meta
          property="og:description"
          content="1인가구를 위한 공동구매, 배달음식 등을 쉐어할 수 있는 기능과 생활정보팁을 공유할 수 있는 서비스 입니다"
        />
        <meta
          name="description"
          content="1인가구를 위한 공동구매, 배달음식 등을 쉐어할 수 있는 기능과 생활정보팁을 공유할 수 있는 서비스, LIVE:ON의 로고 페이지입니다."
        ></meta>
        <meta property="og:image" content="favicon.png" />
        <meta property="og:article:author" content="Ready! Act" />
      </Helmet>
      <div className="bg-primary-600 w-full h-[90vh] text-center flex justify-center items-center relative">
        <h1 className="sr-only">LIVE:ON</h1>
        <AnimationLogo />
        <Link to="/home" className="absolute bottom-10">
          <Button className="goToHomepage lgFontButton hover:hoverGoToHomepage">
            홈페이지로 가기
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Logo;
