// Generics let you dynamically reuse classes and stuff with different data types
class Queue<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  remove() {
    this.data.shift();
  }
}

let nameQueue = new Queue<string>();
nameQueue.add("Troy");
nameQueue.add("Taylor");

let numberQueue = new Queue<number>();
numberQueue.add(4);
numberQueue.add(6);

