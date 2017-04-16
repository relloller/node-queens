
# node-queens
This repo approaches the infamous N-Queens puzzle through the use of concurrent node.js instances.

1. Recursive backtracking algorithm(non-bitwise)

       node nodeQueens.js '# of queens'
           
1. Spawns concurrent node.js instances to run above algorithm

       node nodeQueensParent.js '# of queens'
           
1. Recursive bitwise algorithm(based on MCPL algorithm by Martin Richards)

       node nodeQueensBitwise.js '# of queens'

1. Spawns concurrent node.js instances to run above bitwise algorithm - modified to accept an argument for placement of starting queen 

       node nodeQueensBitwiseParent.js '# of queens'

## Algorithm Optimizations
* Symmetry of solutions - Only half of the columns need to be solved. The other half can be inferred by mirroring found solutions. For odd numbered board sizes, the middle column will be solved as well.
* Variable queen placements - Creating a function parameter for variable queen placements enables the problem to be broken down and solved by parallel processes
  
## Performance Data:  
	Tested with:
	1. MacBook Pro Retina 2015 2.7 GHz Intel Core i5 8GB         (4 cores)
 	2. Dell Latitude E6420 2013 2.4 Ghz Intel Core i7-2760QM 4GB (8 cores)
	
 	NBW:   refers to non-bitwise algorithm
	NBW-4: refers to 4 spawned instances running non-bitwise algorithm 
	BIT:   refers to the bitwise algorithm
	BIT-4: refers to 4 spawned instances running modified bitwise algorithm

	Note: As spawning of new instances and setting up I/O takes ~100ms, performance gains are not seen until # of queens reaches 13(NBW) and 15(BIT)

		8-queens  solutions: 92
		MBPR 2.7Ghz Core i5	| Dell E6420 Core i7-2760QM
		NBW:           4 ms	|  	        5 ms
		NBW-4:       128 ms	| NBW-8:       78 ms
		BIT:          <1 ms	|    	       <1 ms
		BIT-4:       124 ms	| BIT-8:      105 ms

		9-queens  solutions: 352
		MBPR 2.7Ghz Core i5	| Dell E6420 Core i7-2760QM
		NBW:           7 ms	|              12 ms
		NBW-4:       128 ms	| NBW-8:       96 ms
		BIT:          <1 ms	|               2 ms
		BIT-4:       126 ms	| BIT-8:       92 ms

		10-queens solutions: 724
		MBPR 2.7Ghz Core i5	| Dell E6420 Core i7-2760QM
		NBW:          15 ms	|	       26 ms
		NBW-4:       143 ms	| NBW-8:      115 ms
		BIT:           1 ms	|               3 ms
		BIT-4:       125 ms	| BIT-8:       86 ms

		11-queens solutions: 2,680
		MBPR 2.7Ghz Core i5	| Dell E6420 Core i7-2760QM
		NBW:          61 ms	|              97 ms
		NBW-4:       162 ms	| NBW-8:      121 ms
		BIT:           3 ms	|               3 ms
		BIT-4:       123 ms	| BIT-8:       89 ms

		12-queens solutions: 14,200
		MBPR 2.7Ghz Core i5	| Dell E6420 Core i7-2760QM
		NBW:         278 ms	|             334 ms
		NBW-4:       284 ms	| NBW-8:      192 ms
		BIT:           8 ms	|              10 ms
		BIT-4:       132 ms	| BIT-8:      101 ms

		13-queens solutions: 73,712
		MBPR 2.7Ghz Core i5	| Dell E6420 Core i7-2760QM
		NBW:        1799 ms	|            1988 ms
		NBW-4:       971 ms	| NBW-8:      614 ms
		BIT:          44 ms	|              43 ms
		BIT-4:       142 ms	| BIT-8:      111 ms

		14-queens solutions: 365,596
		MBPR 2.7Ghz Core i5	| Dell E6420 Core i7-2760QM
		NBW:        9802 ms	|           11487 ms
		NBW-4:      4973 ms	| NBW-8:     3080 ms
		BIT:         246 ms	|             231 ms
		BIT-4:       224 ms	| BIT-8:      179 ms

		15-queens solutions: 2,279,184
		MBPR 2.7Ghz Core i5	| Dell E6420 Core i7-2760QM
		NBW:       73912 ms	|           88134 ms
		NBW-4:     33812 ms	| NBW-8:    20971 ms
		BIT:        1611 ms	|            1623 ms
		BIT-4:       754 ms	| BIT-8:      421 ms

		16-queens solutions: 14,772,512
		MBPR 2.7Ghz Core i5	| Dell E6420 Core i7-2760QM
		NBW:      701184 ms	|     	          TBD   
		NBW-4:    255598 ms	| NBW-8:   171190 ms
		BIT:       10104 ms	|            9299 ms
		BIT-4:      3898 ms	| BIT-8:     2114 ms

		17-queens solutions: 95,815,104
		MBPR 2.7Ghz Core i5	| Dell E6420 Core i7-2760QM
		NBW:	         TBD	|                 TBD
		NBW-4:   1912743 ms	| NBW-8:  1592134 ms
		BIT:       74162 ms	|           70120 ms
		BIT-4:     28040 ms	| BIT-8:    15034 ms

		18-queens solutions: 666,090,624
		MBPR 2.7Ghz Core i5	| Dell E6420 Core i7-2760QM
		NBW:		 TBD	|                 TBD
		NBW-4:           TBD	| NBW-8:          TBD
		BIT:      499455 ms	|          484587 ms
		BIT-4:    194882 ms	| BIT-8:   120911 ms   

		19-queens solutions: 4,968,057,848
		MBPR 2.7Ghz Core i5	| Dell E6420 Core i7-2760QM
		NBW:		 TBD	|                 TBD
		NBW-4:           TBD	| NBW-8:          TBD
		BIT:		 TBD	|                 TBD
		BIT-4:   2234459 ms	| BIT-8:  1341200 ms



References:  
["Backtracking Algorithms in MCPL using Bit Patterns and Recursion" - Martin Richards](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.51.7113&rep=rep1&type=pdf)

[A bitwise solution to the n-queens problem in Javascript - www.gregtrowbridge.com](http://www.gregtrowbridge.com/a-bitwise-solution-to-the-n-queens-problem-in-javascript/)

