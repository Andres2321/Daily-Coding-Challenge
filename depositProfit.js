function depositProfit(deposit, rate, threshold){
    let year = 0
    while(deposit < trheshold){
        deposit += deposit * (rate/100)
        year++
    }
    return year
}

depositProfit(100,20,170)