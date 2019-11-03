/* 테스트예제 */
const {fromEvent} = rxjs;

const button = document.querySelector("#button")
fromEvent(button, 'click')
    .subscribe(()=>{
        console.log('click')
    })

/* 첫 예제 */
const observable = Rx.Observable.create(observer=>{
    observer.next('hello')
    observer.next('world')

})

const print = (val) =>{
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}
observable.subscribe(val => print(val))

/* 두번째 예제 */
const clicks = Rx.Observable.fromEvent(document, 'click')
clicks.subscribe(click => console.log(click))

/* 세번째 예제 promise를 사용한 비동기 작업 */
const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(['axios1', 'axios2', 'axios3'])  
    },1000)
})

const obsvPromise = Rx.Observable.fromPromise(promise)//데이터를 axios로 가져온다고 가정

obsvPromise.subscribe(result => print(result))//container 컴포넌트를 데이터에 실어서 호출

/* 4번째 예제 타이머를 사용해서 지연 출력 */
const timer = Rx.Observable.timer(1000)
timer
    .finally(()=>print("끝남"))
    .subscribe()

/* 5번째 예쩨 인터벌을 이용한 예제 */
const dateNow = document.querySelector("#now_date")
const interval = Rx.Observable.interval(1000) //1초마다 데이터를 받아오는 갱신 행위를함

const dateNowPaint = (val)=>{ //dateNow의 내용을 전부 지우고 받아온 값을 다시 그리는 함수
    dateNow.innerHTML = ``
    dateNow.innerText = val
}
interval.subscribe(int => dateNowPaint(int)); // 1초마다 dateNowPaint를 받아온 값으로 실행한다

/* 6번째 예제 of 함수 내용을 전부 출력하는 예제*/
const mashup = Rx.Observable.of('anyting', ['you', 'want'], 23, true, {coll:"stuff"})

mashup.subscribe(val => print(val))


/* 7번째 예제 콜드 옵저버는 여러개의 값을 각각 내려주고 핫리로더는 하나의 값을 내려준디*/
//const x = Math.random() // x라는 숫자를 정하고 구독자에게 데이터를 내리는 거라 같은 숫자가 찍힘
const cold = Rx.Observable.create(observer=>{
    observer.next( Math.random() ) //각 구독자별로 다른 랜덤번호를 내려줌
})
const hot = cold.publish()
hot.subscribe(a=> print(`Subscriber A : ${a}`))
hot.subscribe(a=> print(`Subscriber B : ${a}`))

hot.connect() //cold 옵저버블은 서로 다른 두값을 내려주지만 hot옵저버블은 하나의 값으로 맞춰진다.


/* 8번째 예제 인터벌을 해놓으면 메모리 누수가 발생한다 일정 시간뒤에 강제로 끝내보는 예제*/
const interval_limit_text = document.querySelector("#interval_limit_text")
const intervalPaint = (val)=>{
    interval_limit_text.innerHTML =``
    interval_limit_text.innerText = val
}
const interval2 = Rx.Observable.interval(500)
    .finally(()=> intervalPaint('인터벌 끝남'))


const subscription = interval2.subscribe(x => intervalPaint(x))

setTimeout(()=>{
    subscription.unsubscribe()
}, 5000);

/* 9번째 예제 map은 모든 오는 데이터 반응에대해 적용해서 돌려줄 수 있다 */
const numbers = Rx.Observable.of(10,100,1000);
numbers.map((num)=> num*2)
    .subscribe(x=>print(x));

/* 10번째 예제 json으로 받은 데이터를 처리 할떄 */
const jsonString = {"type" : "Dog", "bread":"Pug"}
const apiCall = Rx.Observable.of(jsonString)

apiCall
    .map(json => {
        console.log(json)
        return json
    })
    .subscribe((obj)=>{
        print(obj.type)
        print(obj.bread)
    })

/* 11번째 do 특정시점에서 관찰하는 데이터 */
const names = Rx.Observable.of("simon", "Garfunkle")
names
    .do(name => print(name))
    .map(name=>name.toUpperCase())
    .do(name => print(name))
    .subscribe();

/* 12 번째 filter 조건과 그에대한 컨디션으로 밑에 옵저버의
    옵저버블 값으로 리턴 */

const numbers1 = Rx.Observable.of(-3,5,2,7,-9,-2)

numbers1.filter(n=> n>=0)
    .subscribe(n=>print(`only filter${n}`))

/* 12-1 filter last first 예제 */
numbers1
    .filter(n => n>=0)
    .first()
    .subscribe(n => print(`first ${n}`))

numbers1
    .filter(n => n>=0)
    .last()
    .subscribe(n => print(`last ${n}`))

/* 13번째 debounce, throttle */
let mouseEvents = Rx.Observable.fromEvent(document, 'mousemove')
const mousemove = document.querySelector("#mouse_move")
const movePaint =(val)=>{
    mousemove.innerHTML = ``
    mousemove.innerText = val
    console.log(val)
}
mouseEvents
    //.throttleTime(1000) // throttleTime 먼저 이벤트가 발새
    .debounceTime(1000)//debounce는 끝난것을 확인하고 1초뒤에 작동
    .subscribe((e)=>movePaint(e))

/* 14번째 scan */
const mouseClickScan = document.querySelector('#mouse_click_scan')

const mouseScanPaint = (val)=>{
    let el = document.createElement('p')
    el.innerText = val
    mouseClickScan.appendChild(el)
}
const clicks2 = Rx.Observable.fromEvent(document, 'click')
clicks2 
    .map(e=> parseInt(Math.random()*10))
    .do(score => mouseScanPaint(`클릭했을때의 스코어 ${score}`))
    .scan((highScore, score)=> {
        return highScore < score ? score :highScore
    }) //highscore에 score를 누적시킨다 
    .subscribe(highScore => mouseScanPaint(`토탈 스코어 ${highScore}`))

/* 15번째 switchMap 클릭해서 이벤트를 발생시키고나서 다시 클릭하면 처음부터 다시 이벤트 발생을 시킨다*/
const clicks3 = Rx.Observable.fromEvent(document, 'click')
clicks3.switchMap(click =>{
    return Rx.Observable.interval(500)
})
    .subscribe(i => print(i));

/*16번째 예제 takeUntil(), takeWhile() */
//takeuntil은 해당 비동기 작업이 올때까지를 실행시키는 작업
//takeWhile은 해당 조건이 false가 나오는동안 실행시키는 작업
const interval3 = Rx.Observable.interval(500)
const notifer = Rx.Observable.timer(2000)

interval3
    .takeUntil(notifer)
    .finally(()=>mouseScanPaint('마침내'))
    .subscribe(i=> mouseScanPaint(i))



const names1 = Rx.Observable.of('bob', "Jeff", "Dung", "rwrw", "godgod")

names1
    .takeWhile(name => name !== "Dung")
    .finally(()=> print('Dung 를 찾아버림'))
    .subscribe((i)=> print(i))

/* 17번째 zip, forkjoin */
const yin = Rx.Observable.of("peanut butter", "wine", "rainbows")
const yang = Rx.Observable.of("jelly", "cheese", "unicorns").delay(2000)

//const combo = Rx.Observable.forkjoin(yin, yang)

//combo.subscribe(arr=> print(arr))
//zip은 두개의 옵저버블을 단순 합치는것 forkjoin은 비동기적인 옵저버블 중에서 마지막 요소끼리 합치는것

/* 18번째 catch() retry()*/
//cacth는 옵저버블에서 에러처리 retry는 오류가 났을경우 다시 요청
//비동기 통신할때 500이나 404에러뜰떄 리트라이 쓰면 유용할듯
// const cast = Rx.Observable.create(observer=>{
//     observer.next('good')
//     observer.next('best')
//     observer.next('greate')
//     throw 'catch me'
//     observer.next('nextnext')
// })

// cast
//     .catch((err)=> print(`에러 나버림 ㅠㅠ ${err}`))
//     .retry(2)
//     .subscribe(val => print(val))

/*19번째 subject() next에 대한것을 구독 시키고나서 설정할 수가있다.*/
const subjects = new Rx.Subject();

const subA = subjects.subscribe(val => print(`Sub A : ${val}`))
const subB = subjects.subscribe(val => print(`Sub B : ${val}`))
subjects.next("Hello")
subjects.next("World")

/* 20번째 multicast */
//여러 처리가 와도 각각의 이벤트를 따로 처리하게끔 subject를 각각 발행해주는 함수
const lastObservable = Rx.Observable.fromEvent(document, "click")

const clickEvent = lastObservable
                    .do(_ => print("한번 실행했어요 "))

const subjectLast = clickEvent.multicast(()=> new Rx.Subject())

const subC = subjects.subscribe(val => print(`Sub A : ${val.timeStamp}`))
const subD = subjects.subscribe(val => print(`Sub B : ${val.timeStamp}`))
subjectLast.connect();