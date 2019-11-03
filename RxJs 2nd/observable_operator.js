const {fromEvent, Observable, from,of, interval} = rxjs;
const {ajax} = rxjs.ajax;
const {map, catchError, debounceTime, throttle} = rxjs.operators;


// // 첫 예제 Observable을 발행하고 구독자가 데이터를 가져가는 pull형식
// const observable = new Observable(subscriber =>{
//     subscriber.next(1);
//     subscriber.next(2);
//     subscriber.next(3);
//     setTimeout(()=>{
//         subscriber.next(4);
//         subscriber.complete();
//     }, 1000)
// })

// console.log("구독 전");
// observable.subscribe({
//     next(x){console.log('받은 밸류 ' + x)},
//     error(err){console.error("어떤에러")},
//     complete(){console.log("next의 끝")}
// })
// console.log('구독 후의 실행')

// 두번째 예제 Observable이 구독자에게 데이터를 주입하는 push형식
// const foo = new Observable(subscriber =>{
//     console.log('hello')
//     subscriber.next(42)
// })

// foo.subscriber(x =>{
//     console.log(x)
// })
// foo.subscriber(y=>{
//     console.log(y)
// })

// //세번째 예제 next complete() error 으로 발행

// const observable = new Observable(function subscribe(subscriber) {
//     try {
//       subscriber.next(1);
//       subscriber.next(2);
//       subscriber.next(3);
//       subscriber.complete();
//     } catch (err) {
//       subscriber.error(err); // delivers an error if it caught one
//     }
//   });

// 4번째 구독취소에 관한 예제

// const observable = from([10, 20, 30]);
// const subscription = observable.subscribe(x => console.log(x));
// // Later:
// subscription.unsubscribe();

// //5번째 예제 구독 setInterval 취소해서 메모리 아끼기
// const subscribe=(subscriber = {next : function(){}}) =>{
    
//     const intervalId = setInterval(() => {
//       subscriber.next('hi');
//     }, 1000);
  
//     //함수를 리턴한다 그 함수는 
//     return ()=> {
//         console.log('구독종료')
//         clearInterval(intervalId);
//     };
//   };

//   const test = subscribe({next: (x)=> console.log(x)})

//   setTimeout(()=>{
//       test();
//   }, 5000)



// const button = document.querySelector("#console")

// const scrollEvent = fromEvent(window, 'mousemove')

// const result = scrollEvent.pipe(
//     throttle(ev =>interval(1000))
// )

// const kkk = ajax(`https://api.github.com/users?per_page=5`).pipe(
//     map(userResponse => console.log('users : ' , userResponse)),
//     catchError(err =>{
//         console.log('error :', err);
//         return of(err)
//     })
// )

// result.subscribe(()=>kkk.subscribe())


