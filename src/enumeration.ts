type EnumerationFn<T, U> = (item: T) => U;
type InstantiatorFn = <TEnumeration, U extends EnumerationBase<U>>(type: {new(): TEnumeration}) => TEnumeration;
type MemoizationCache<T> = {[key: string]: T};
type MemoizedInstantiator = InstantiatorFn;

export class EnumerationBase<T extends Object> {
    public Enumerate<TOut extends Object | number | string>(fn: EnumerationFn<T, TOut>): TOut[] {
        return Object.values(this).map(fn);
    }
}

const instantiate: InstantiatorFn = <TEnumeration>(type: {new(): TEnumeration}) => new type(); 

const memoize = <TEnumeration, U extends EnumerationBase<U>>(func: InstantiatorFn) => {
    const cache: MemoizationCache<TEnumeration> = {};
    return (args:  {new(): TEnumeration}): TEnumeration => {
        const argsString = JSON.stringify(args.name);
        if(cache[argsString] == undefined) {
            cache[argsString] = func(args);
        }
        return cache[argsString];
    } 
}

export const Instantiate: MemoizedInstantiator = memoize(instantiate);