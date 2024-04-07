let divide a b =
    match b with
    | 0.0 -> None
    | _ -> Some (a / b)

let result =
    Some 10.0
    |> Option.bind (fun x -> divide x 2.0)
    |> Option.bind (fun y -> divide y 3.0)
    |> Option.map string
    |> Option.defaultValue "Error: Division by zero"

printfn "%s" result
