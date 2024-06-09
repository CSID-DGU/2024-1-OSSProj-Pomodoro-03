# A3.1 OSS 프로젝트 최종보고서

## I. 프로젝트 수행팀 개요

* 수행 학기:  24-1
* 프로젝트명:  위치기반 자취 커뮤니티 서비스 '리본(LIVE:ON)'
* Key Words : 자취, 커뮤니티, 위치기반, 쉐어, 채팅
* 팀명: 뽀모도로(Pomodoro)        

구분 | 성명 | 학번 | 소속학과 | 연계전공 | 이메일
------|-------|-------|-------|-------|-------
팀장 | 김지우 | 2020110269 | 통계학과 | 융합SW연계전공 | kjw01024@naver.com         
팀원 | 김지송 | 2021112431 | 산업시스템공학과 | 융합SW연계전공 | jisong1222@naver.com        
팀원 | 박나영 | 2018111743 | 의생명공학과 | 융합SW연계전공 | skdud025@naver.com        

* 지도교수: (SW교육원)      (박효순)     , (대학혁신지원사업단)(이길섭)  

## II. 프로젝트  수행 결과

### 1. 프로젝트 개요  
- 본가를 떠나 자취를 시작하는 1인가구가 증가함에 따른 자취를 하는 사람들을 위한 자취 커뮤니티를 개설하는 프로젝트를 기획해보았다.
- 본조는 최종적으로 프로젝트를 통해 1인가구들이 슬기로운 자취생활을 이어나가는데 기여하고자 한다.

#### 1.1 개발 동기 및 목적  
- 1인 가구 비중이 점점 늘어나는 오늘날의 사회 속에서 아직 자취 전용 커뮤니티의 상용화는 이뤄지지 않음
- 이에 따라 자취하는 사람들을 대상으로 가장 필요성이 높을 것으로 판단되는 배달 음식 쉐어, 공동구매 기능을 포함한 자취 커뮤니티를 개발하고자함
- 본 프로젝트는 생활비 절감 및 불필요한 생활품 낭비 방지 등의 다양한 이점을 갖는 자취 커뮤니티를 개발하는 것을 목표로 함
#### 1.2 필요성 
- 1인 가구의 배달 이용 빈도는 평균 주 1.3회부터 시작하여 연령대가 낮을수록 높은 이용빈도수를 보임
- 배달비 절약, 음식 낭비 줄이기, 생활비 절약 등의 자취생에게 큰 이점을 가져다 줌
- 위치기반을 이용한 이웃 지역 자취생 간의 커뮤니티 활성화가 필요함

#### 1.3 개발 목표  
- 자취 생활 정보를 한눈에 모아볼 수 있는 커뮤니티
    - 쉐어기능과 일반 커뮤니티 기능을 기본으로 자취인 전용 커뮤니티 구축
- 지도에 위치별로 게시글을 볼 수 있는 기능
    - 배달 주문, 공동구매 특성 상 위치 정보가 쉐어 참여의 주요 요인으로 작용
    - 위치 정보 기반으로 공유된 지역 관련 소식 또한 한 눈에 파악할 수 있도록하여 커뮤니티의 활성화를 추진
- 지역 태그(@@구) 를 부여
    - 지역 태그를 부여해 사용자 위치정보에 대한 신뢰성을 확보
    - 관심 있는 동네 위주로 쉐어 정보 및 지역 소식들을 활용

### 2. 최종결과물 소개  

* 최종결과물의 주요 목록을 소개하고, 주요 항목별 관련 사진 또는 그림을 필히 제시하고 설명한다.
  #### LIVE: ON의 주요 기능 소개
- 회원가입 및 로그인
<p align="left">  
 <img src="https://github.com/CSID-DGU/2024-1-OSSProj-Pomodoro-03/blob/main/Doc/Images/%EB%A1%9C%EA%B7%B8%EC%9D%B8%EC%B0%BD.png" align="left" width="35%">  
 <img src="https://github.com/CSID-DGU/2024-1-OSSProj-Pomodoro-03/blob/main/Doc/Images/%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85%EC%B0%BD.png" align="center" width="35%"> 
 </figcaption></p>

 
firebase를 활용하여 사용자 인증과 회원정보 저장 및 관리
 - 프로필
 <img width="300" alt="image" src="https://github.com/CSID-DGU/2024-1-OSSProj-Pomodoro-03/blob/main/Doc/Images/%ED%94%84%EB%A1%9C%ED%95%84.png">
프로필 화면에서 내 정보와 내가 쓴 쉐어글 확인 가능

- 지도 위 게시글 시각화
 <img width="300" alt="image" src="https://github.com/CSID-DGU/2024-1-OSSProj-Pomodoro-03/blob/main/Doc/Images/%EC%A7%80%EB%8F%84%20%EC%8B%9C%EA%B0%81%ED%99%94.png">

사용자들이 직관적으로 자신의 주변 쉐어글을 확인할 수 있도록 지도 위에 시각화, 쉐어 페이지로 바로 접근 가능 
- 카테고리 별 쉐어 글 작성 및 참여
 <img width="300" alt="image" src="https://github.com/CSID-DGU/2024-1-OSSProj-Pomodoro-03/blob/main/Doc/Images/%EB%B0%B0%EB%8B%AC%EC%89%90%EC%96%B4.png">

카테고리 별 게시글 목록 표시 

 <img width="300" alt="image" src="https://github.com/CSID-DGU/2024-1-OSSProj-Pomodoro-03/blob/main/Doc/Images/%EC%89%90%EC%96%B4%EB%94%94%ED%85%8C%EC%9D%BC.png">
게시글 세부 내용 표시 

 <img width="300" alt="image" src="https://github.com/CSID-DGU/2024-1-OSSProj-Pomodoro-03/blob/main/Doc/Images/%EC%B1%84%ED%8C%85%EB%B0%A9.png">
참여 인원 간 채팅 기능을 통해 세부사항 조율 

- 일반 게시판 (자유 및 익명) 
 <img width="300" alt="image" src="https://github.com/CSID-DGU/2024-1-OSSProj-Pomodoro-03/blob/main/Doc/Images/%EC%9E%90%EC%9C%A0%EA%B2%8C%EC%8B%9C%ED%8C%90.png">

자유롭게 글 작성. 작성자의 지역구+닉네임이 표시됨 

 <img width="300" alt="image" src="https://github.com/CSID-DGU/2024-1-OSSProj-Pomodoro-03/blob/main/Doc/Images/%EC%9E%90%EC%9C%A0%20%EB%94%94%ED%85%8C%EC%9D%BC.png">

댓글 작성 가능. 댓글 작성자의 지역구+닉네임이 표시됨 

 <img width="300" alt="image" src="https://github.com/CSID-DGU/2024-1-OSSProj-Pomodoro-03/blob/main/Doc/Images/%EC%9D%B5%EB%AA%85%EA%B2%8C%EC%8B%9C%ED%8C%90.png">

익명으로 글 작성. 작성자의 지역, 닉네임 등 모두 비공개 


### 3. 프로젝트 추진 내용    

#### 3.1 프로젝트 진행과정    

* 기존 작품을 Upgrade한 경우, 기존 작품에 대한 소개와 차이점 기술한다.
 <img width="300" alt="image" src="https://github.com/CSID-DGU/2024-1-OSSProj-Pomodoro-03/blob/main/Doc/Images/%EB%B9%84%EA%B5%90%20%ED%91%9C.png">

  - 일반 커뮤니티 (자유 및 익명게시판)을 구현해 단순 공동구매 플랫폼에서 벗어나 자취와 관련된 자유로운 소통이 가능하게 개선
  - 지도 위의 게시물을 눌렀을 때, 세부 내용이 표시되도록 하여 사용에 직관성 부여
  - 채팅 기능을 통해 쉐어의 세부 조건들을 쉽게 조율 가능
  - 생필품, 식품에 대한 공동구매 뿐만 아니라 배달쉐어, 취미생활 공유 등 영역 다양화

  - 사용자 요구사항 
![image](https://github.com/CSID-DGU/2024-1-OSSProj-Pomodoro-03/assets/144210233/5656288e-c83b-4682-a5f8-393c8399ea0e)

  - API 명세서
    
    ![image](https://github.com/CSID-DGU/2024-1-OSSProj-Pomodoro-03/assets/144210233/4378a84f-d42c-4af4-b900-dbcd35de6b60)


  - 유스케이스 다이어그램
    
    ![Use case diagram-2 (1)](https://github.com/CSID-DGU/2024-1-OSSProj-Pomodoro-03/assets/144210233/68f2cd4e-e18f-4ea8-8313-715d18efe822)
  
  - 시스템 구조도
    
    ![image](https://github.com/CSID-DGU/2024-1-OSSProj-Pomodoro-03/assets/144210233/ea62cc49-4350-47a6-9856-7759d4c100f1)

  - 시퀀스 다이어그램
    
    ![image](https://github.com/CSID-DGU/2024-1-OSSProj-Pomodoro-03/assets/144210233/fa5ebed9-4820-47af-aac7-108c4ed74c44)

  

 

#### 3.2 프로젝트 구현과정    
  
<**구현 단계의 문제 해결 방안 및 과정**>

- **채팅 기능의 도입**
    - 시간상의 제약으로 인해 댓글 혹은 채팅 기능 중 택1 하여 개발범위 선정 필요
    - 프로젝트의 핵심인 이웃 자취생 간 “쉐어” 기능의 특성 고려 : 채팅 > 댓글
    - 사용자 편의성 및 실용성 극대화를 위해 쉐어글에서 “참여하기” 버튼 클릭 시, 곧바로 채팅방 입장이 가능하도록 설계
- **지도 시각화 화면의 정보 접근성 향상**
    - 기존 오픈소포
팀원 | 박나영  | 프론트엔드, 쉐어글 카테고리 별 리스트 및 지도 API 연동 및 지도 시각화 화면 구현        
  
### 6. 참고문헌  
  
1. 이현주, 함께 주문을 외워보자, 배민다움today, https://story.baemin.com/5357/ , 2023.01
2. 김은혜 외 8인, 반려식물 커뮤니티, 씨앗 https://github.com/INFP-Study/CIAT?tab=readme-ov-file , 2021
3. 심재운 외 4인, 1인가구를 위한 플랫폼, 둥지, https://github.com/DoongG/DoongG-Client?tab=readme-ov-file , 2023.12
4. [참고 오픈소스 : 공구룸](https://github.com/jellyjoji/ready-act)
  
### 7. 프로젝트 성과    
항목 | 세부내용 | 예상(달성)시기  
------|------------|-------
Github 등록 | 프로젝트 개발에 따른 내용들을 github에 등록 | 24년 6월 초 (완료)  
SW등록 | 프로젝트 개발 완성후 웹형식으로 SW 등록 | 24년 6월 중순  
  
