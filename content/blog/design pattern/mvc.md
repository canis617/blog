---
title: MVC
date: 2020-07-23 09:07:42
category: design pattern
draft: true
---

## Model

- 데이터를 처리하는 역할 입니다.
- 애플리케이션의 정보(데이터)를 처리하는 컴포넌트를 말합니다.
- 데이터베이스에 연결하고 데이터를 추출하거나 저장, 삭제, 업데이트, 변환 등의 작업을 수행하는 역할을 합니다.
- Model은 도메인 데이터를 의미하며 순수한 데이터의 역할을 합니다.
- Model은 단일 객체일 수 있고, 어떤 객체의 구조일수 있습니다.
- Model의 노드는 같은 수준으로 있어야 합니다.
- 문제 지향 노드(예: 달력 약속)와 구현 세부 정보(예: 단락)를 혼합하는 것은 혼란스럽고 잘못된 형태로 간주합니다.

## View

- 사용자가 보는 화면입니다.
- 화면에 표시되는 부분입니다.
- 추출한 데이터나 일반적인 텍스트 데이터를 표시하거나 input, button 등의 사용자 인터페이스 요소, 데이터 및 객체의 입력, 출력 또는 사용자와의 상호작용을 위한 인터페이스를 표시하는 영역입니다.
- View는 보완해서는 안됩니다.
- View는 프레젠테이션을 담당합니다.
- View는 Model에게 필요한 데이터를 질의합니다.
- View는 적절한 메시지를 통해 업데이트를 할 수 있습니다.

## Controller

- Controller는 사용자의 상호작용 담당을 합니다.
- 데이터와 뷰를 연결, 제어하는 역할입니다.
- 어플리케이션에서 각 요소들의 연결관계를 설정하고 데이터와 시각적 부분의 연결 등을 관리합니다.
- url로부터 입력되는 정보로부터 어떤 데이터와 뷰를 연결할 지 등을 제어핣니다.
- 사용자가 Controller에 작업을 요청하면 Controller는 Model을 호출하여 데이터를 처리하고 Model이 데이터를 처리한 결과를 View에 보내고 이 결과를 사용자가 보게 됩니다.
- Model과 View를 이어주는 다리 역할, 모든 '이벤트'를 처리하는 부분, 메인 조직을 담당합니다.
- Model과 View 내의 클래스들 간 정보 교환하는데 사용합니다.

## MVC

- MVC는 Model-View-Controller로 구성됩니다.
- MVC는 역사상으로 두가지가 있습니다.
  - 첫번째는 초기에 XEROX PARC에서 발표된 것으로 사용자가 도메인 정보를 직접 보고 조작하는 것을 목표로 하는 MVC 입니다. View가 Model에 직접 데이터를 요청했으며 Controller는 사용자 상호작용을 담당합니다.
  - 두번째는 현대의 MVC입니다. 현대의 MVC는 View는 Model과 간접적인 관계입니다. View는 Controller를 통해 Model의 데이터를 전달 받게 됩니다. 그리고 Controller는 사용자 상호작용을 View에게 위임받습니다.

## 제작 목적

- MVC의 기본 목적은 사용자의 멘탈모델과 컴퓨터에 존재하는 디지털 모델 간의 차이를 연결하는 것입니다.
- 이상적인 MVC 솔루션은 사용자가 도메인 정보를 직접 보고 조작하는 착각을 지원하는 것입니다.

### 초기의 MVC

- MVC의 기본 목적은 사용자의 멘탈모델과 컴퓨터에 존재하는 디지털 모델 간의 차이를 연결하는 것입니다.
- 이상적인 MVC 솔루션은 사용자가 도메인 정보를 직접 보고 조작하는 착각을 지원합니다.
- Model은 도메인 데이터를 의미하며 순수한 데이터의 역할을 합니다.
- Controller는 사용자의 상호작용 담당을 합니다.
- View는 프레젠테이션을 담당합니다.
- Controller는 View를 생성하는 책임이 있으며 Controller는 View와 1:N의 관계입니다. View와 Model 관계는 N:M의 관계입니다.

### 현대의 MVC

- 컨트롤러는 모델과 직접적인 관계입니다. 모델은 컨트롤러를 모르고 컨트롤러는 모델을 생성하는 책임이 있습니다. 모델은 순수한 데이터 원형을 이야기합니다. 모델은 변화가 일어났을 때 컨트롤러에게 알려줍니다. 결합도를 줄이기 위해 옵져버 패턴으로 모델과 컨트롤러가 연결되어 있습니다.
- 컨트롤러는 뷰도 생성합니다. 컨트롤러는 뷰에게 모델에게 받은 데이터를 전달합니다. 뷰는 모델에 기반하여 렌더링 처리합니다. 뷰에게 사용자 입력의 처리를 컨트롤러에게 위임을 합니다. 컨트롤러는 뷰에게 위임받은 액션을 대신 처리하게 되고 모델에게 데이터 요청을 하게 됩니다.
- 컨트롤러의 생성은 라우터에서 하게 됩니다. 상황에 따라 컨트롤러를 생성합니다. 라우터에 따라 동작해야 하는 역할을 결정하여 컨트롤러를 생성하게 됩니다.
- 모델과 뷰가 분리된 이유는 변화율이 다르기 때문에 두가지를 분리합니다.
- 뷰를 만들 때는 굉장히 광활합니다. 컨트롤러가 순수한 데이터를 뷰에게 전달하기 때문입니다. 프런트 엔드 개발할 때는 순수한 데이터를 뷰에게 표시하는 역할에 비중이 크고, 백엔드 개발할 때는 모델의 비중이 큽니다.
- 컨트롤러는 라우터를 알고 있습니다. 그 이유는 컨트롤러가 다른 컨트롤러에게 일을 시킬 때 필요하기 때문입니다.
- 컨트롤러를 다른 컨트롤러를 모릅니다. 그렇기 때문에 라우터를 통해서 컨트롤러를 찾아달라고 요청하게 됩니다. 라우터는 역할에 맞는 컨트롤러를 상태로 가지고 있습니다. 필요할 때 해당 컨트롤러를 실행해줍니다.
- 컨트롤러는 모델을 생성하고 청취합니다. 그리고 뷰를 생성합니다. 컨트롤러에서 모델의 변경을 감지하면 뷰에게 새로 렌더링하도록 요청합니다. 컨트롤러는 본인의 역할이 아닌 것은 라우터를 통해 컨트롤러를 요청합니다.
- 현대의 컨트롤러와 뷰는 1:1 관계 입니다.
- 객체지향 프로그래밍에서 MVC란 사용자 인터페이스를 성공적이며 효과적으로 데이터 모형에 관련 시키기 위한 방법론 또는 설계 방식중 하나로써, 목적 코드의 재사용에 유용한 것은 물론, 사용자 인터페이스와 응용프로그램 개발에 소요되는 시간을 현저하게 줄여주는 방식입니다.
- Model, View, Controller의 약자로 User - View - Controller - Model - Controller - View - User의 구조를 가지고 있습니다.
- 응용프로그램의 시각적 부분과 이면의 동작을 제어를 처리하는 부분(비즈니스 로직)을 분리하여 서로에 미치는 영향 없이도 응용 프로글램을 변경할 수 있습니다.
  - 데이터베이스나 제어프로그램의 변경 없이 시각적인 부분만 수정하려면 View에 해당하는 부분만 수정하면 됩니다.
  - 시각적인 부분과 관계 없이 데이터 처리 부분만 수정하려면 Model 부분만 수정하면 됩니다.
  - 프로그램간 연결과 제어를 수정하려면 controller 부분만 수정하면 됩니다.

### MVC 패턴의 장점

- 전형적인 어플리케이션 OOP 구조로써 가장 단순하며 보편적으로 많이 사용하는 디자인 패턴입니다.
- 맡은 일에만 집중할 수 있게 되기 때문에 효율성을 높이고 유지보수가 편리해지고, 애플리케이션의 확장성과 유연성이 늘어나고, 중복코딩의 문제점이 사라집니다.
- 유저 인터페이스와 비지니스 로직을 분리할수 있습니다.

### MVC 패턴의 단점

- View와 Model 사이의 의존성이 높습니다. 따라서 애플리케이션이 커질수록 복잡하고 유지보수가 어려워질 수 있습니다.
- 현대의 MVC패턴의 컨트롤러는 책임이 많기 때문에 컨트롤러 볼륨이 커집니다. 이 부분을 해결하기 위해서는 컴포넌트로 분리합니다. 컨트롤러를 컴포넌트로 분리하여 볼륨을 작게 만듭니다.

## 참조

- [MVC? 싱글톤? 여러가지 디자인 패턴들](https://blog.metafor.kr/146)
- [MV\*/Flux 정리](https://chodragon9.github.io/blog/mv_flux/#mvc)