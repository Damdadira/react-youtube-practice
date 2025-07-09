# YoungTube
- 유튜브 인터페이스를 **React**와 **YouTube Data API**로 제작한 프로젝트입니다.
- 검색, 동영상 시청, 관련 동영상 탐색, 댓글과 답글, 다크 모드 등 **다양한 기능**이 포함되어 있으며 **반응형 UI**로 구현되었습니다.
<br/><br/>

## 🖥 화면 구성
<details>
 <summary><h3 style="display:inline; margin-left:4px">1️⃣ 홈 화면</h3></summary>
 <img src=".github/assets/video_home.gif" />
</details>

<details>
 <summary><h3 style="display:inline; margin-left:4px">2️⃣ 검색 화면</h3></summary>
 <img src=".github/assets/video_search.gif" />
</details>

<details>
 <summary><h3 style="display:inline; margin-left:4px">3️⃣ 동영상 상세 화면</h3></summary>
 <img src=".github/assets/video_detail.gif" />
</details>

<details>
 <summary><h3 style="display:inline; margin-left:4px">4️⃣ 댓글, 답글 화면</h3></summary>
 <img src=".github/assets/video_comment.gif" />
</details>

<details>
 <summary><h3 style="display:inline; margin-left:4px">5️⃣ 로딩 화면</h3></summary>
 <img src=".github/assets/video_loading.gif" />
</details>

<details>
 <summary><h3 style="display:inline; margin-left:4px">6️⃣ 에러 화면</h3></summary>
 <img src=".github/assets/video_error.gif" />
</details>
<br/>

## 💡 주요 기능 및 구현
- **API 버전**: YouTube Data API v3
- **인증 방식**: API Key

<details>
 <summary><h3 style="display:inline; margin-left:4px">홈 페이지</h3></summary>
 
 - **사용 API:** `videos?key={개인 API키}&part=snippet&maxResults=25&order=date&chart=mostPopular`
 - **설명:** 인기 동영상을 최신순으로 25개만 불러와 홈 화면에 표시합니다.
</details>

<details>
 <summary><h3 style="display:inline; margin-left:4px">키워드 검색</h3></summary>
 
 - **사용 API:** `search?key={개인 API키}&part=snippet&maxResults=25&order=date&type=video&q=rose`
 - **설명:** 키워드로 검색한 동영상을 최신순으로 25개만 불러와 홈 화면에 표시합니다.
</details>

<details>
 <summary><h3 style="display:inline; margin-left:4px">동영상 상세 페이지, 관련 동영상</h3></summary>
 
 - **사용 API:** `videos, search API에서 불러온 데이터 사용`
 - **설명:** 동영상에 대한 자세한 정보(동영상 제목, 채널 썸네일, 채널명, 게시일)를 제공 받아 동영상 상세 화면에 표시합니다.
</details>

<details>
 <summary><h3 style="display:inline; margin-left:4px">유튜버 프로필 이미지</h3></summary>
 
 - **사용 API:** `channels?key={개인 API키}&part=snippet&id={channelId}`
 - **설명:** 채널 운영자의 프로필 이미지 주소를 가져와 동영상 상세 화면에서 이미지로 보여줍니다.
</details>

<details>
 <summary><h3 style="display:inline; margin-left:4px">댓글</h3></summary>
 
 - **사용 API:** `commentThreads?key={개인 API키}&part=snippet&videoId={videoId}&maxResults=50&order=relevance`
 - **설명:** 댓글에 대한 자세한 정보(총 댓글수, 총 답글수, 작성자 프로필 이미지, 작성자 이름, 댓글 내용, 게시일)를 50개만 불러와 관련성 높은순으로 댓글 화면에 표시합니다.
</details>

<details>
 <summary><h3 style="display:inline; margin-left:4px">답글</h3></summary>
 
 - **사용 API:** `comments?key={개인 API키}&part=snippet&parentId={commentId}`
 - **설명:** 답글에 대한 자세한 정보(작성자 프로필 이미지, 작성자 이름, 댓글 내용, 게시일)를 50개만 불러와 답글 화면에 표시합니다.
</details>

<details>
 <summary><h3 style="display:inline; margin-left:4px">로딩 페이지</h3></summary>
 
 - **설명:** 데이터가 로딩 중일 때 사용자에게 로딩 상태를 보여줍니다.
</details>

<details>
 <summary><h3 style="display:inline; margin-left:4px">에러 페이지</h3></summary>
 
 - **설명:** 잘못된 접근 또는 오류 발생 시 사용자에게 에러 메시지를 보여줍니다.
</details>

<details>
 <summary><h3 style="display:inline; margin-left:4px">테마 기능</h3></summary>
 
 - **설명:** 토글 버튼으로 다크/라이트 모드로 전환할 수 있으며 localStorage에 저장하여 상태를 유지합니다.
</details>








