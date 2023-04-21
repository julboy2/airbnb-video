https://www.youtube.com/watch?v=c_-b_isI4vg <br />
youtube 에어비앤비 클론코딩 <br />
2:56:30 
<br />

### hydration error 현재버전의 (13) app 폴더가 재대로 동작하지 않는것 같음 <br />
ClientOnly.tsx 파일로 감싸줄것<br />
37:00 참고할것
<br />
<br />


npx create-next-app@latest --experimental-app <br />
- project named ? airbnb-video <br />
nextjs 버전에서 자동으로 추가가 되지 않았다면 <br />
yarn add -D tailwindcss postcss autoprefixer <br />
<br /><br />

### next-auth 페이지 참고해서 prisma  설치
npx prisma init<br />
https://authjs.dev/reference/adapter/prisma
<br />
prisma 설치후 <br />
.env<br />
DATABASE_URL="mongodb://localhost:27017/airbnb?authSource=admin"<br />
model 만든후 동기화 <br />
npx prisma db push <br />


## 참고
- (hydration error) 해당 console 창의 경고는 서버데이터인 Date 필드가 가 client 에서 불러오기 때문에 경고가 난다. 
![image](https://user-images.githubusercontent.com/6093105/233089039-46c92b0e-1fee-4587-94ca-7b5464562011.png)
<br />
getCurrentUser.ts 파일에서 아래처럼 return 해준다.
<br />
    return currentUser // 가 아니라 아래처럼 수정해준다.
    <br />
    return { <br />
      ...currentUser, <br />
      createdAt: currentUser.createdAt.toISOString(), <br />
      updatedAt: currentUser.updatedAt.toISOString(), <br />
      emailVerified: currentUser.emailVerified?.toISOString(), <br />
    }

 - import qs from 'query-string' : 검색해볼것 <br />
ex) https://example.com/search?q=apple&page=2&category=fruit <br />
const qeury = qs.parse(q=apple&page=2&category=fruit) <br />
console.log(qeury) <br />
결과값 : { q: 'apple', page: '2', category: 'fruit' } <br />
<br />
반대로  <br />
const query = { <br />
  q: 'apple', <br />
  page: '2', <br />
  category: 'fruit' <br />
};<br />
const queryString = qs.stringify(query); <br />
console.log(queryString); <br />
결과값 "q=apple&page=2&category=fruit" <br />
