interface ComplexObject{
    mandatory:string;
    options1?:number;
    optinss2?:boolean;
}
type GetOptional<T>={
    [K in keyof T as T[K] extends Required<T>[K] ? K :never ]:T[K]
}
let keys:GetOptional<ComplexObject>