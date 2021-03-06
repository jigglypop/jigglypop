class MaxHeap {
  heap = [0];

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  push(v) {
    this.heap.push(v);
    let i = this.heap.length - 1;
    while (i > 1 && this.heap[Math.floor(i / 2)] < this.heap[i]) {
      this.swap(i, Math.floor(i / 2));
      i = Math.floor(i / 2);
    }
  }

  pop() {
    if (this.heap.length <= 1) return 0;
    let x = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();
    let i = 1;
    while (i * 2 < this.heap.length) {
      let max = this.heap[i * 2];
      let _i = i * 2;
      if (i * 2 + 1 < this.heap.length && max < this.heap[i * 2 + 1]) {
        max = this.heap[i * 2 + 1];
        _i = i * 2 + 1;
      }
      if (this.heap[i] > max) break;
      this.swap(i, _i);
      i = _i;
    }
    return x;
  }
}

let heap = new MaxHeap();
let nums = [3, 5, 1, 4, 7, 8];
for (let num of nums) {
  heap.push([num, 10 - num]);
}
console.log(heap.heap);
for (let num of nums) {
  console.log(heap.pop());
}
