function pattern(row,col){

	var i  = 0;
	var j = 0;
	var iCnt = 1;
	for(i = 1;i<=row;i++){
		for(j = 1; j <= col;j++){
			console.log(iCnt+"\t");
			iCnt++;
		}
	}
	console.log("\n");
}


//	console.log(col,row);


pattern (4,4);

