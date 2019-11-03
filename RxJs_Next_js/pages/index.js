import React,{useEffect, useState} from 'react'
import {Subject, from,interval,fromEvent, of} from 'rxjs'
import {multicast, flatMap, map, refCount} from 'rxjs/operators'
import Router from 'next/router'


import Test from '../component/Test'
const index = ()=>{
    const [arr, setArr] = useState([1,2,3,4,5])
    const firstExample = ()=>{
        const subject = new Subject()
        subject.subscribe({
            next : (v)=> console.log(`observer A ${v}`)
        })
        subject.subscribe({
            next : (v)=> console.log(`observer B ${v}`)
        })
        const observable = from([1,2,3])
        observable.subscribe(subject)
    }
    const secondExample = ()=>{
        const source = interval(500)
        const subject = new Subject();
        const multicasted = source.pipe(multicast(subject))
        let subscription1, subscription2, subscriptionConnect;

        subscription1 = multicasted.subscribe({
            next : (v)=> console.log(`observarA : ${v}`),
            complete : ()=> console.log("구독종료"),
            
        })
        subscriptionConnect = multicasted.connect();
        setTimeout(()=>{
            subscription2 = multicasted.subscribe({
                next : (v)=> console.log(`observerB : ${v}`)
            })
        },600)
        setTimeout(()=>{
            subscription1.unsubscribe()
        },1200)
        setTimeout(()=>{
            subscription2.unsubscribe();
            subscriptionConnect.unsubscribe();
        },2000 )
    }
    const thirdClick = ()=>{
        //refCount는 현재 subject에 구독중인 옵저버 숫자를 파악한다.
        const source = interval(500)
        const subject= new Subject();
        const refCounted = source.pipe(multicast(subject), refCount())
        let subscription1, subscription2;

        console.log('observer A 구독시작');
        subscription1 = refCounted.subscribe({
            next : (v)=> console.log(`observer A 카운팅 : ${v}`)
        })
        setTimeout(()=>{
            console.log('observerB 구독시작')
            subscription2 = refCounted.subscribe({
                next : (v)=> console.log(`observer B 카운팅 : ${v}`)
            })
        }, 600)
        setTimeout(()=>{
            console.log('observerA 구독 종료')
            subscription1.unsubscribe()
        }, 2000)
        setTimeout(()=>{
            console.log('observerB 구독 종료 ')
            subscription2.unsubscribe()
        }, 3000)
    }
    const mouseOddEvent = (event)=>{
        if(event.clientX%2!==0){
            console.log("홀수")
        }else{
            console.log("짝수")
        }
    }
    
    useEffect(()=>{
        // const mouse = fromEvent(window, 'mousemove').pipe(
        //     map(el => el)
        // )
        // mouse.subscribe({
        //     next : (v)=> mouseOddEvent(v),
        //     error : (err)=>console.error(err)
        // })
    },[])
    
    
    const mapTest = ()=>{
        const observable = of(arr).pipe(
            map(el => el)
        )
        observable.subscribe({
            next : (el)=> <Test el = {el}/>
        })
    }
    const addArr = ()=>{
        setArr([...arr, 6])
    }
    const moveToNext = ()=>{
        Router.push('/second')
    }
    const moveToRedux = ()=>{
        Router.push('/third')
    }
    return(
        <div>
            <button onClick = {firstExample}>처음 예제</button>
            <button onClick = {secondExample}>두번째 예제</button>
            <button onClick = {thirdClick}>세번째 예제</button>
            {
                mapTest()
            }

            <button onClick = {addArr}>배열늘려버리기</button>
            <Test el = {3}/>
            <button onClick = {moveToNext}>Rx예제</button>
            <button onClick = {moveToRedux}>redux 예제</button>
        </div>
    )
}

index.getInitialProps = async(context)=>{
    console.log(context.store)
    return {}
}

export default index;