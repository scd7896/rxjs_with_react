# RxJs 공부를 위한 repository

## 첫번째, observable에 대한 이해와 pull push의 차이
리액티브 프로그래밍은 데이터 플로우나 상태를 변화시킬때의 비동기적인 처리를

외부에서 계속 들어오는 데이터를 가지고 처리를 하는 것이다.(오직 밖에서 안으로)
이 외부에서 들어오는 데이터는 이벤트, ajax처리, 프로그래머의 입력 등이 있다. 

프로그램을 짜는 방식에는 두가지 방식이 있다. 프로그램에서 외부 환경을 기다리는 pull 방식과, 
기다리게 리스닝 시켜놓고 그외 일을 처리하는 push방식

pull 방식에는 c언어의 scanf()함수나, 네트워크 프로그래밍에서의 listen함수가 대표적이라고 생각 하고 이해를 시작하자. pull방식으로 외부에서 데이터를 받을 경우 그 프로그램은 해당 부분에서 멈추는 bolcking 행동을 한다.

push방식에는 주로 이벤트 리스너들이 이야기가 되고 그 리스너에 맞는 이벤트가 들어오면 내부 함수를 실행시킨다.

pull방식에는 대표적으로 iterator방식을 예로 들 수 있다.

### 대표적인 iterator 자바 :
Vector<String> arr = new Vector<>();
arr.add("gd");
arr.add("gd");
arr.add("gd");
Iterator<String> it = arr.iterator();

while(it.hasMoreNext()){
	String str = it.next();
	System.out.println( "그 값은 : "+ str);
}


데이터를 while문 내에서 외부에있는 it의 데이터를 달라고 쪼른다

push방식에는 observer패턴이 있다.

### RxJs 에서 위 코드와 같은 행동을 하는 코드
const observable = Rx.Observable.of(["ㅎㅇ","ㅎㅇ","ㅎㅇ"])
observable.pipe({
	map(el => "그 값은 : " + el)
})


observable.subscribe({
	next : (v) => console.log(v),
})

### 차이? 
위 두코드의 차이는 데이터를 요청 하는 위치에서 차이가 난다.
iterator 형식으로 데이터를 요청을 할 때에는, 그 데이터를 while이라는 실제 로직을 행하는 내부에서 
데이터를 외부에 요청을 보내서 받아오는 방식이다. 
반면 observable로 실행을 할 경우, 데이터를 외부에서 흘러 내려보내고 그 받았을때의 실행할 함수를
정의를 하는 방식인데, 마치 외부에서 데이터가 로직 내부로 들어올 때, 그 내부에서 실행되는 로직을 정의 해주는 방식이다.
