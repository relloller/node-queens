https://github.com/relloller/node-queens  |  Victor Shaw |  vshaw168@gmail.com


        node-queens
 
  node.js approaches to the n-queens problem 
  1. recursive algorithm
  2. spawning concurrent node.js instances to run above algorithm

  Bitwise 
  3. recursive bitwise algorithm(based on MCPL algorithm by Martin Richards)
  4. spawning concurrent node.js instances to run above algorithm

  TypedArrays Bitwise
  5. Storage of actual placement of queens for each solution was implemented with TypedArrays due to their speed compared to regular arrays. The original algorithm only counted solutions but did not store queen placements of each solution.
  

References: "Backtracking Algorithms in MCPL using Bit Patterns and Recursion" - Martin Richards 
"Bitwise solution to N-Queens in Javascript". www.gregtrowbridge.com 

