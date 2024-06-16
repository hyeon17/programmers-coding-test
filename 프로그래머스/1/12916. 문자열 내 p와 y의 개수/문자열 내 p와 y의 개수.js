function solution(s){
    const str = Array.from(s.toUpperCase())
    const wordLength = (word)=>{
        return str.filter(s=>s===word).length
    }
    const pLength = wordLength('P')
    const yLength = wordLength('Y')
    
    if(pLength===yLength) return true
    else return false
}