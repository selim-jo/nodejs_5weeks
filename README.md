# nodejs 5주차 과제
### 과제 요구사항: index.spec.js의 모든 테스트 통과

#### 1. Site 요구사항
  - Site는 n개 이상 생성할 수 있다.
  - Site에는 Board를 추가하고 추가된 Board를 조회할 수 있다.
  - 하나의 Site에 동일한 이름의 Board를 추가할 수 없다.
  - Board는 n개 이상 추가할 수 있다.

#### 2. Board 요구사항
  - Board는 name 데이터를 포함해야 하며 null 또는 빈 문자열('')은 허용하지 않는다.
  - Site에 추가된 Board만 사용 가능한 것으로 간주하며 사용 불가능한 Board에는 Article을 추가할 수 없다.
  - Board에 Article을 추가할 때 Article에 ID를 자동 생성해서 부여해야 한다.
    - 규칙은 ${board.name}-${랜덤 값}를 따른다.
  - Board에 Article을 추가할 때 Article에 작성 일자가 들어가야 한다.
    - 저장되는 형식은 ISO 8601을 따른다.
  - Article은 n개 이상 추가할 수 있다.
  - 작성된 Article 목록을 조회할 수 있어야 한다.

#### 3. Article 요구사항
  - Article은 subject, content, author 3개의 데이터를 포함해야 하며 null 또는 빈 문자열('')은 허용하지 않는다.
  - Board에 추가된 Article만 사용 가능한 것으로 간주하며 사용 불가능한 Article에는 Comment를 추가할 수 없다.
  - Article에 Comment를 추가할 때 Comment에 작성일자가 들어가야 한다.
    - 저장되는 형식은 ISO 8601을 따른다.
  - Comment는 n개 이상 추가할 수 있다.
  - 작성된 Comment 목록을 조회할 수 있어야 한다.

#### 4. Comment 요구사항
  - Comment는 content, author 2개의 데이터를 포함해야하며 null 또는 빈 문자열('')은 허용하지 않는다.

### 해결방법
- jest 이용
- 클래스 개념 이용
 (테스트 코드에서 각 클래스의 어떤 메서드를 호출하고 있는지, 어떤 값을 인자로 전달하고 있는지 확인하며 index.js에 구현)
