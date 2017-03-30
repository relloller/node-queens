
node-queens
 
 This repo approaches the infamous N-Queens puzzle through the use of concurrent node.js instances.
  
  1. recursive backtracking algorithm(non-bitwise)

  		node nodeQueens.js '# of queens'

  2. spawns concurrent node.js instances to run above algorithm

  		node nodeQueensParent.js '# of queens'

  3. recursive bitwise algorithm(based on MCPL algorithm by Martin Richards)

  		node nodeQueensBitwise.js '# of queens'

  4. spawns concurrent node.js instances to run above bitwise algorithm - modified to accept an argument for placement of starting queen 

  		node nodeQueensBitwiseParent.js '# of queens'

  
Performance Data:  
	
	MacBook Pro Ret 2015 2.7 GHz Intel Core i5 8 GB  (4 cores)
 	
 	NBW:   refers to non-bitwise algorithm
	NBW-4: refers to 4 spawned instances running non-bitwise algorithm 
	BIT:   refers to the bitwise algorithm
	BIT-4: refers to 4 spawned instances running modified bitwise algorithm

	Note: As spawning of new instances and setting up I/O takes ~100ms, performance gains are not seen until # of queens reaches 13(NBW) and 15(BIT)

		8-queens  solutions: 92
		NBW:           4 ms
		NBW-4:       128 ms
		BIT:          <1 ms
		BIT-4:       124 ms

		9-queens  solutions: 352
		NBW:           7 ms
		NBW-4:       128 ms
		BIT:          <1 ms
		BIT-4:       126 ms

		10-queens solutions: 724
		NBW:          15 ms
		NBW-4:       143 ms
		BIT:           1 ms
		BIT-4:       125 ms

		11-queens solutions: 2,680
		NBW:          61 ms
		NBW-4:       162 ms 
		BIT:           3 ms
		BIT-4:       123 ms

		12-queens solutions: 14,200
		NBW:         278 ms
		NBW-4:       284 ms
		BIT:           8 ms
		BIT-4:       132 ms

		13-queens solutions: 73,712
		NBW:        1799 ms
		NBW-4:       971 ms
		BIT:          44 ms
		BIT-4:       142 ms

		14-queens solutions: 365,596
		NBW:        9802 ms
		NBW-4:      4973 ms
		BIT:         246 ms
		BIT-4:       224 ms

		15-queens solutions: 2,279,184
		NBW:       73912 ms
		NBW-4:     33812 ms
		BIT:        1611 ms
		BIT-4:       754 ms

		16-queens solutions: 14,772,512
		NBW:      701184 ms 
		NBW-4:    255598 ms
		BIT:       10104 ms
		BIT-4:      3898 ms

		17-queens solutions: 95,815,104
		NBW:	         TBD
		NBW-4:		 TBD
		BIT:       74162 ms
		BIT-4:     28040 ms

		18-queens solutions: 666,090,624
		NBW:		 TBD
		NBW-4:           TBD
		BIT:      499455 ms
		BIT-4:    194882 ms

		19-queens solutions: 4,968,057,848
		NBW:		 TBD
		NBW-4:           TBD
		BIT:		 TBD
		BIT-4:   2234459 ms



	References:  "Backtracking Algorithms in MCPL using Bit Patterns and Recursion" - Martin Richards 
	"Bitwise solution to N-Queens.." gregtrowbridge.com/a-bitwise-solution-to-the-n-queens-problem-in-javascript/

