function getLastItem<T>(arr: T[]): T | null {
  return arr[0];
}

console.log(getLastItem<number>([1, 2, 3]));        
console.log(getLastItem<string>(["a", "b", "c"])); 
console.log(getLastItem<number>([]));               