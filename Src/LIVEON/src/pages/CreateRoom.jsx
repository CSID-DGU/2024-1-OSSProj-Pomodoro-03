import { AppContext } from '@/App';
import { db, auth } from '@/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Button from '@/components/Button';
import CreateHeader from '@/layout/CreateHeader';
import CategoryDropdown from '@/parts/create/CategoryDropdown';
import ContentTextarea from '@/parts/create/ContentTextarea';
//import DatePicker from '@/parts/create/DatePicker';
import Creator from '@/parts/create/Creator';
import FileUpload from '@/parts/create/FileUpload';
import Location from '@/parts/map/Location';
import ParticipateCounter from '@/parts/create/ParticipateCounter';
import PaymentToggleButton from '@/parts/create/PaymentToggleButton';
import Status from '@/parts/create/Status';
import { useContext, useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
//import Price from '@/parts/create/Price';
import Title from '@/parts/create/Title';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';

function CreateRoom() {
  const { createRoomForm } = useContext(AppContext);
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
        setCurrentUser(user);
      } else {
        setIsAuth(false);
        navigate('/signin');
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  const formRef = useRef(null);
  const uploadImageRef = useRef(null);
  const paymentRef = useRef(null);

  const handleCreate = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      toast.error('사용자 인증에 문제가 발생했습니다. 다시 로그인 해주세요.', {
        position: 'top-center',
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      return;
    }

    const userId = currentUser.uid;

    const categoryValue = createRoomForm.category;
    const titleValue = createRoomForm.title;
    const contentValue = createRoomForm.content;
    //const priceValue = createRoomForm.price;
    const participateCounterValue = Number(createRoomForm.participateNumber);
    const meetingPointValue = createRoomForm.meetingPoint;
    const creatorValue = createRoomForm.creator.id;
    const statusValue = createRoomForm.status;
    const uploadImageValue = uploadImageRef.current.files[0];

    // 현재 사용자 UID를 포함하여 participate 배열 생성
    const participate = [userId];

    const data = {
      category: categoryValue,
      title: titleValue,
      content: contentValue,
      //price: priceValue,
      participateNumber: participateCounterValue,
      meetingPoint: meetingPointValue,
      user_id: userId,
      status: statusValue,
      participate: participate,
      uploadImage: uploadImageValue ? uploadImageValue.name : null,
    };

    console.log('Data to be added:', data);

    try {
      await addDoc(collection(db, 'share'), data);
      toast.success('등록되었습니다.', {
        position: 'top-center',
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      navigate(`/products`);
    } catch (error) {
      console.error('Error adding document:', error);
      toast.error('등록에 실패하였습니다. 다시 시도해 주세요.', {
        position: 'top-center',
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>방만들기</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="자취생을 위한 위치기반 쉐어커뮤니티 서비스 LIVE :ON 공동구매 방 만들기 페이지"
        />
        <meta
          property="twitter:title"
          content="자취생을 위한 위치기반 쉐어커뮤니티 서비스 LIVE :ON 공동구매 방 만들기 페이지"
        />
        <meta property="og:type" content="web application" />
        <meta property="og:url" content="https://liveon.vercel.app/createRoom" />
        <meta
          property="og:description"
          content="공동구매 상품을 확인할 수 있는 페이지입니다. "
        />
        <meta
          name="description"
          content="공동구매 상품을 확인할 수 있는 페이지입니다."
        ></meta>
        <meta property="og:image" content="favicon.png" />
        <meta property="og:article:author" content="Ready! Act" />
      </Helmet>

      <h1 className="sr-only">LIVE:ON</h1>

      <div className="py-2">
        <div className="px-4">
          <CreateHeader />
          <h2 className="pageTitle">방만들기</h2>
        </div>
      </div>

      <div>
        <form encType="multipart/form-data" ref={formRef} onSubmit={handleCreate}>
          <div className="flex flex-col gap-4 p-4 relative">
            <Location />

            <CategoryDropdown
              title="카테고리"
              className="w-full defaultInput"
              label="카테고리"
              value={createRoomForm.category}
              id="category"
            />

            <Title value={createRoomForm.title} id="title" />

    
            <ContentTextarea
              title="내용"
              placeholder="공구 모임 주요내용을 알려주세요."
              className="w-full defaultInput"
              labelClassName="product content"
              label="내용"
              value={createRoomForm.content}
              id="content"
            />


            <Status
              title="상태"
              label="상태"
              className="w-full defaultInput"
              labelClassName="status"
              id="status"
            />

            {/* <Creator id="creator" /> */}

            <PaymentToggleButton
              ref={paymentRef}
              title="정산 방법"
              label="정산 방법"
              labelClassName="payment"
              value={createRoomForm.payment}
              id="payment"
            />

            <ParticipateCounter labelClassName="participateCounter" label="참여자 인원" id="participateCounter" />

            <FileUpload
              ref={uploadImageRef}
              title="파일 업로드"
              label="파일 업로드"
              className="bg-[#EBF8E8] p-4 rounded-lg text-primary-500"
              id="uploadImage"
            />
          </div>
          <Button
            type="submit"
            className="fixed bottom-3 py-4 activeButton lgFontButton mx-3 w-[93vw] max-w-[544px]"
          >
            방 만들기
          </Button>
        </form>
      </div>
    </>
  );
}

export default CreateRoom;
