
export const renderAfter =(fn: any, time = 0)=> {
    setTimeout(()=> {
        fn();
    }, time);
}