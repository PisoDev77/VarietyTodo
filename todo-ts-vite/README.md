# Todo App 만들기 With TS - vite.js

- Vite 빌드 툴을 이용하여 TypeScript로 Todo 앱 만들었다.

## 1차 완성 
    객체지향 프로그래밍을 표방할 수 있었다 생각한다.
    자바스크립트로 된 프로젝트들 중 유일하게 class를 활용하여 구현했다.
    1차 완성 이후, 코드 개선이 필요하다고 느낀 부분이 있다.

+ TodoForm 클래스에서 keydown이벤트에서도 쓰로틀링이나 디바운싱 개념을 활용해야 겠다는 점
    keydown 이벤트를 그룹화하여 마지막 이벤트를 실행하도록 디바운싱을 활용하여 TodoFome 개선.

+ TodoType에 더 여러가지 interface나 type들을 활용할 방안을 추가하겠다는 점
+ Jsdoc도 활용하여 문서화를 해야겠다는 점. (ts 을 위한 jsdoc도 있다는 것을 알았지만 아직 익숙치 않다.)

PS) 스타일 시트도 꾸며야 한다.

## 1차 완성 후 발견한 이슈

+ 웹스토리지를 활용하여 데이터를 저장하고 싶었는데, 설계 오류로 string 이슈를 발견했다.
    string 값만을 key value 형태로 저장하기에 기존 Todo객체 배열 todos는 문제가 있었다. Wrapper로 방법도 있지만, 일단 따로 TodoTypes 로 따로 배열을 생성하여 해결하였다.
    TodoStore에 데이터를 넣을 수 있다. 이후 save load 메소드를 db나 다른 방법으로 사용될 때 활용할 수 있도록 TodoStoreInterface를 만들었다.
