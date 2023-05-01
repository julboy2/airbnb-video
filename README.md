https://www.youtube.com/watch?v=c_-b_isI4vg <br />
youtube 에어비앤비 클론코딩 <br />
7:11:00 
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
<br />

- import { FieldValues, useForm } from 'react-hook-form' <br />
const { register, handleSubmit, setValue, watch, formState: { errors }, reset, } = useForm<FieldValues>({}) <br />
에서 <br />
**register**  함수는 input 요소의 name 속성을 사용하여 해당 필드를 등록합니다.  <br />
**handleSubmit** 함수는 폼 제출 이벤트를 처리하며, 인수로 onSubmit 함수를 전달합니다. <br />
**watch** 는 특정 input 요소의 값 변화를 감지하는 역할을 합니다. 예를 들어, 폼에 입력한 값을 실시간으로 반영해야 할 때 유용하게 사용됩니다.<br />
watch 함수는 사용하려는 input 요소의 이름을 전달받아 해당 input 요소의 값을 반환합니다. 예를 들어, watch("email")<br />
**setValue** 는 폼 필드의 값을 변경하는 데 사용됩니다. 사용자 입력에 따라 동적으로 폼 필드 값을 변경해야 할 때 사용됩니다. <br />
setValue('firstName', 'John') <br />
<input type="text" {...register('firstName')} /> <br />
firstName 필드의 값을 John으로 변경합니다. <br />
    
<br />
 - import { MapContainer, Marker, TileLayer } from 'react-leaflet' 쓸경우 <br />
서버에서 사용할 react-leaflet 을 use client 페이지에서 사용하려고 하면 에러가난다.<br />
그럴때는 **dynamic ** 을 써서 ssr :  false 준다.   <br />
  const Map = useMemo( <br />
    () => dynamic(() => import('../Map'), { ssr: false }), <br />
    [location] <br />
  ) <br />
참조 :   https://react-leaflet.js.org/
<br />
<br />
- 파일업로드
https://cloudinary.com/ <br /> 
https://next-cloudinary.spacejelly.dev/ <br />
