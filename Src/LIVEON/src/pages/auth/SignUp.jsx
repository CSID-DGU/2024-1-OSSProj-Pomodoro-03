import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { auth, db } from '@/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import Button from '@/components/Button';
import Header from '@/layout/Header';
import FormInput from '@/components/FormInput';
import { Link } from 'react-router-dom';

function SignUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  const nicknameRef = useRef(null);
  const regionRef = useRef(null);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      toast.error('비밀번호가 일치하지 않습니다.\n다시 입력해 주세요.', {
        position: 'top-center',
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        email: emailRef.current.value,
        nickname: nicknameRef.current.value,
        region: regionRef.current.value,
        createdAt: serverTimestamp(),
      });

      toast.success('회원가입이 성공적으로 완료되었습니다!');
      navigate('/');
    } catch (error) {
      toast.error('회원가입 중 오류가 발생했습니다: ' + error.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>LIVE:ON - 회원가입</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content=" 자취생을 위한 위치기반 쉐어커뮤니티 서비스 LIVE :ON 회원가입 페이지" />
        <meta property="twitter:title" content="자취생을 위한 위치기반 쉐어커뮤니티 서비스 LIVE :ON 회원가입 페이지" />
        <meta property="og:type" content="web application" />
        <meta property="og:url" content="https://liveon.vercel.app/signup" />
        <meta property="og:description" content="LIVE:ON 회원가입 페이지입니다. 인증된 사용자만 공동구매에 참여할 수 있습니다." />
        <meta name="description" content="LIVE:ON 회원가입 페이지입니다. 인증된 사용자만 공동구매에 참여할 수 있습니다." />
        <meta property="og:image" content="favicon.ico" />
        <meta property="og:article:author" content="Ready! Act" />
      </Helmet>
      <h1 className="sr-only">R09M</h1>

      <div className="px-4 py-2">
        <Header />
        <h2 className="pageTitle">회원가입</h2>
     
        <form encType="multipart/form-data" onSubmit={handleSignUp}>
          <FormInput
            ref={emailRef}
            label="이메일"
            type="email"
            name="email"
            placeholder="이메일을 입력해 주세요."
            labelClassName="authLabel"
            inputClassName="authInput"
          />

          <FormInput
            ref={passwordRef}
            label="비밀번호"
            type="password"
            name="password"
            placeholder="비밀번호를 입력해 주세요."
            labelClassName="authLabel"
            inputClassName="authInput"
          />

          <FormInput
            ref={passwordConfirmRef}
            label="비밀번호 확인"
            type="password"
            name="passwordConfirm"
            placeholder="비밀번호를 다시 입력해 주세요."
            labelClassName="authLabel"
            inputClassName="authInput"
          />

          <FormInput
            ref={nicknameRef}
            label="닉네임"
            type="text"
            name="nickname"
            placeholder="닉네임을 입력해 주세요."
            labelClassName="authLabel"
            inputClassName="authInput"
          />

          <FormInput
            ref={regionRef}
            label="지역"
            type="text"
            name="region"
            placeholder="지역을 입력해 주세요."
            labelClassName="authLabel"
            inputClassName="authInput"
          />

          <Button type="submit" className="authActiveButton">
            회원가입
          </Button>
        </form>
        <Link to="/signin">
          <span className="authTransform">로그인</span>
        </Link>
      </div>
    </>
  );
}

export default SignUp;


