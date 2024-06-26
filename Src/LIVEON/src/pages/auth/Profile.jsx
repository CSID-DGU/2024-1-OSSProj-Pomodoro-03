import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import Spinner from '@/components/Spinner';
import Header from '@/layout/Header';
import navStyles from '@/styles/Nav.module.css';
import Button from '@/components/Button';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Withdrawal from './Withdrawal';
import Nav from '@/parts/nav/Nav';
import { db } from '@/firebase'; // Firestore 인스턴스 가져오기

function Profile() {
  const [userData, setUserData] = useState(null);
  const [sharesData, setSharesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const auth = getAuth(); // Firebase 인증 인스턴스 가져오기

  useEffect(() => {
    const fetchUserData = async (userId) => {
      const userDoc = await getDoc(doc(db, 'users', userId));
      if (userDoc.exists()) {
        setUserData(userDoc.data());
      }
    };

    const fetchSharesData = async (userId) => {
      const q = query(collection(db, 'share'), where('user_id', '==', userId));
      const querySnapshot = await getDocs(q);
      const shares = [];
      querySnapshot.forEach((doc) => {
        shares.push({ id: doc.id, ...doc.data() });
      });
      setSharesData(shares);
    };

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = user.uid;
        fetchUserData(userId);
        fetchSharesData(userId);
        setLoading(false);
      } else {
        navigate('/signin');
      }
    });
  }, [auth, navigate]);

  if (loading) {
    return <Spinner />;
  }

  if (userData && sharesData) {
    const { email, nickname, region } = userData;

    return (
      <>
        <Helmet>
          <title>LIVE:ON - 프로필</title>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content=" 자취생을 위한 위치기반 쉐어커뮤니티 서비스 LIVE :ON 프로필 페이지" />
          <meta property="twitter:title" content="자취생을 위한 위치기반 쉐어커뮤니티 서비스 LIVE :ON 프로필 페이지" />
          <meta property="og:type" content="web application" />
          <meta property="og:url" content="https://liveon.vercel.app/profile" />
          <meta property="og:description" content="로그인된 사용자의 정보 및 작성글을 확인할 수 있는 페이지입니다." />
          <meta name="description" content="로그인된 사용자의 정보 및 작성글글을 확인할 수 있는 페이지입니다." />
          <meta property="og:image" content="favicon.png" />
          <meta property="og:article:author" content="Ready! Act" />
        </Helmet>
        <h1 className="sr-only">LIVE:ON</h1>

        <div className="px-4 py-2 h-screen">
          <Header />
          <h2 className="pageTitle">프로필</h2>

          <div className="flex gap-5 border-b border-b-line-400 pb-4 pt-4">
            <div className="flex flex-col">
              <span className="font-semibold text-lg text-primary-600">{nickname}</span>
              <span className="text-greenishgray-600 text-xs my-1">{email}</span>
              <span className="text-greenishgray-600 text-xs my-1">{region}</span>
            
              <div className="flex gap-2">
                <Button
                  type="button"
                  className="signOut"
                  onClick={() => {
                    auth.signOut();
                    toast.success('로그아웃되었습니다', {
                      position: 'top-center',
                      ariaProps: {
                        role: 'status',
                        'aria-live': 'polite',
                      },
                    });
                    navigate('/signin');
                  }}
                >
                  로그아웃
                </Button>
                <Withdrawal />
              </div>
            </div>
          </div>

          <h3 className="font-semibold mt-6 mb-3">쉐어 목록</h3>
          <ul>
            {sharesData.map((share) => (
              <Link to={`/share/${share.id}`} key={share.id}>
                <li>
                  <div className="bg-primary-200 p-4 rounded-2xl mb-4 relative">
                    <figure className="flex gap-4 h-[100px]">
                      <figcaption>
                        <h4 className="text-sm text-greenishgray-700 font-semibold ">
                          {share.title}
                        </h4>

                        {share.status === '모집중' ? (
                          <span className="font-bold absolute text-primary-500 right-6 top-4">
                            {share.status}
                          </span>
                        ) : share.status === '쉐어중' ? (
                          <span className="font-bold absolute text-map-500 right-6 top-4">
                            {share.status}
                          </span>
                        ) : (
                          <span className="font-bold absolute text-greenishgray-500 right-6 top-4">
                            {share.status}
                          </span>
                        )}
                        <div className="text-xs flex flex-col">
                          <span className="max-w-xl text-ellipsis line-clamp-2">
                            {share.content}
                          </span>

                          <span className="mt-1 mb-5">
                          <span className="mt-1 mb-5">
                            {share.currentNumber} / {share.particapateNumber} 명
                          </span>

                          </span>

                          <span className="text-xs mt-2">
                            {share.category} {/* 카테고리 표시 */}
                          </span>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <Nav profileColor="#000" profileSpan={navStyles.navSpan} />
      </>
    );
  } else {
    return <Spinner />;
  }
}

export default Profile;
