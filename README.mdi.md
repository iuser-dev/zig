# @iuser/zig : fork of FastIntegerCompression

This is an integer compression library in JavaScript, useful for work on indexes.
Given an array of small integers, it produces an ArrayBuffer that uses far fewer bytes
than the original (using VByte compression). It assumes a modern JavaScript engine with
typed arrays.

From the compressed data, you can later recover the original  array quickly 
(at a rate of millions of integers per second).

By default, non-negative 32-bit integers are expected. If you have signed (negative and positive) 32-bit integers, then you must use distinct functions since we need to code the sign bit:

> ./unit/basictests.js

You can install the library under node with the command line
```bash
ni @iuser/zig
```

This code is made available under the Apache License 2.0.

## Suitability 

This library is meant to compress arrays of small integers. It is not meant to
compress text documents or arrays of large (or random) integers.

## Performance numbers

Go to benchmark repository (check the README.md file) and run the benchmark:

```bash
$ node test.js
Platform: linux 3.13.0-91-generic x64
Intel(R) Core(TM) i7-4770 CPU @ 3.40GHz
Node version 4.5.0, v8 version 4.5.103.37

input size: 7.813K compressed size: 1000B
FastIntegerCompression.compress x 337,845 ops/sec ±0.93% (92 runs sampled)
Fastest is FastIntegerCompression.compress
FastIntegerCompression.uncompress x 187,694 ops/sec ±0.72% (93 runs sampled)
Fastest is FastIntegerCompression.uncompress
```

These numbers means that we can uncompress 187,694 1000-integer arrays per second.
That's 187 millions of integers per second.

## You might also like...

If you like this library, you might also like 
- https://github.com/lemire/FastPriorityQueue.js
- https://github.com/lemire/StablePriorityQueue.js
- https://github.com/lemire/FastBitSet.js
