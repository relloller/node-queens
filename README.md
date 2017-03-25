
        node-queens
 
  This repo provides a few node.js approaches to the n-queens problem 
  1. recursive algorithm
  2. spawning concurrent node.js instances to run above algorithm
  3. recursive bitwise algorithm(based on MCPL algorithm by Martin Richards)
  4. spawning concurrent node.js instances to run modified bitwise algorithm
  5. Optional storage for queen placements of each solution can be stored using ArrayBuffer and TypedArray


  
#Performance Data:  

  	MBP, Spawn4 refer to 
		MacBook Pro Ret 2015 2.7 GHz Intel Core i5 8 GB  
		(4 cores)
 
  	Spawn8 refers to: 
		Dell E-Latitude e6420 i7-2760  4 GB
		(8 cores)

	Bit refers to the bitwise implementation

	N-queens:   solutions

	8-queens solutions:   92
	MBP:            3.095 ms
	Spawn4:       144.673 ms
	Spawn8:        95.308 ms
	Bit.MBP:        0.432 ms
	BitSpawn4:    102.030 ms
	BitSpawn8:     82.434 ms

	9-queens solutions:   352
	MBP:            7.663 ms
	Spawn4:    	  134.436 ms
	Spawn8:    	  106.414 ms
	Bit.MBP:        0.551 ms
	BitSpawn4:    115.394 ms
	BitSpawn8:     92.169 ms

	10-queens solutions:   724
	MBP:           17.083 ms
	Spawn4:       147.881 ms
	Spawn8:       103.835 ms
	Bit.MBP:        1.275 ms
	BitSpawn4:    110.439 ms
	BitSpawn8:     97.111 ms

	11-queens solutions:   2,680
	MBP:           78.940 ms
	ArrSpawn4:    175.412 ms
	ArrSpawn8:    128.716 ms
	Bit.MBP:        2.741 ms
	BitSpawn4:    115.033 ms
	BitSpawn8:     98.018 ms

	12-queens solutions:   14,200
	MBP:          355.984 ms
	ArrSpawn4:    330.283 ms
	ArrSpawn8:    193.947 ms
	Bit.MBP:        8.863 ms
	BitSpawn4:    120.306 ms
	BitSpawn8:     91.390 ms

	13-queens solutions:   73,712
	MBP:         2081.265 ms
	Spawn4:      1254.277 ms
	Spawn8:    	  629.195 ms
	Bit.MBP:      49.454  ms
	BitSpawn4:    136.035 ms
	BitSpawn8:    102.640 ms

	14-queens solutions:   365,596
	MBP:        12506.979 ms
	Spawn4:      5795.678 ms
	Spawn8:   	 3863.195 ms
	Bit.MBP:      252.998 ms
	BitSpawn4:    223.647 ms
	BitSpawn8:    149.845 ms

	15-queens solutions:   2,279,184
	MBP:         83970.129 ms
	Spawn4:      44175.940 ms
	Spawn8:       5519.709 ms
	Bit.MBP:      1787.996 ms
	BitSpawn4:     777.971 ms
	BitSpawn8:     535.706 ms

	16-queens solutions:   14,772,512
	MBP:        701184.647 ms 
	Spawn4:     310519.174 ms  
	Spawn8:     243966.449 ms
	Bit.MBP:     10906.532 ms
	BitSpawn4:    4057.230 ms
	BitSpawn8:    2850.008 ms

	17-queens solutions:   95,815,104
	MBP: 	 			?
	Spawn4:  			?
	Spawn8:    2137056.583 ms  ~ 35min 36sec
	Bit.MBP:   	 73997.320 ms
	BitSpawn4:   32881.523 ms
	BitSpawn8:   18709.070 ms

	18-queens solutions:   666,090,624
	MBP: 	   			?
	Spawn4:  			?
	Spawn8:  			?
	Bit.MBP:    499455.116 ms ~ 8min 20sec
	BitSpawn4:  216198.281 ms ~ 3min 36sec
	BitSpawn8:  165646.738 ms ~ 2min 46sec

	19-queens solutions:   4,968,057,848
	MBP: 	   			?
	Spawn4:  			?
	Spawn8:  			?
	Bit.MBP:			?
	BitSpawn4: 2234459.987 ms ~ 37min 15sec
	BitSpawn8: 1450884.335 ms ~ 24min 11sec

	20-queens solutions = 39,029,188,884
	MBP: 	   			?
	Spawn4:  			?
	Spawn8:  			?
	Bit.MBP:			?
	BitSpawn4:			?
	BitSpawn8: 11701345.445 ms ~ 3hr 15min 27sec



	References:  "Backtracking Algorithms in MCPL using Bit Patterns and Recursion" - Martin Richards 
	"Bitwise solution to N-Queens in Javascript". www.gregtrowbridge.com/a-bitwise-solution-to-the-n-queens-problem-in-javascript/

