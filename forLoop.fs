//iterative function
let iterativeSum start condition nextval myFunc =
    let mutable sum = 0.0
    let mutable i = start
    while condition i do
        sum <- sum + myFunc i
        i <- nextval i
    sum

//This function is tail recursive
let recursiveSum start condition nextval myFunc =
    let rec locSum cur acc =
        if not (condition cur) then acc
        else locSum (nextval cur) (myFunc acc cur)
    locSum start 0.0

let iterativeResult = iterativeSum 1 (fun x -> x <= 100) (fun x -> x + 1) (fun x -> 1.0 / float x)
let recursiveResult = recursiveSum 1 (fun x -> x <= 100) (fun x -> x + 1) (fun acc cur -> acc + 1.0 / float cur)

printfn "%f" iterativeResult
printfn "%f" recursiveResult