const {BehaviorSubject} = rxjs


const drawContainer = (array = [])=>{

    const container = document.querySelector("#rxjs_test_value_container")
    container.innerHTML = ``
    array.map((el)=>{
        const test = document.createElement("h1")
        test.innerText = el
        container.appendChild(test)
    })
}
const indexInit = ()=>{
    const container = document.querySelector("#rxjs_text_container")
    const button = document.querySelector("#test_add_button")
    let cnt = 0;
    
    const subject = new BehaviorSubject([1,2,3,4,5]);
    let data;
    function setData(array){
        data = array
    }
    const subscription = subject.subscribe(array => setData(array) )
    button.addEventListener("click",(event)=>{
        if(cnt ===3){
            subscription.complete();     
        }else{
            const text = document.querySelector("#test_add_input").value
            subject.next([...data, text])
            drawContainer(data)
            cnt++
        }
    })
    drawContainer(data)
    // subscription.complete();
}

indexInit()