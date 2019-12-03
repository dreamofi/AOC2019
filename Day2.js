const input = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,2,9,19,23,1,9,23,27,2,27,9,31,1,31,5,35,2,35,9,39,1,39,10,43,2,43,13,47,1,47,6,51,2,51,10,55,1,9,55,59,2,6,59,63,1,63,6,67,1,67,10,71,1,71,10,75,2,9,75,79,1,5,79,83,2,9,83,87,1,87,9,91,2,91,13,95,1,95,9,99,1,99,6,103,2,103,6,107,1,107,5,111,1,13,111,115,2,115,6,119,1,119,5,123,1,2,123,127,1,6,127,0,99,2,14,0,0]

//Part1
const intCode = (input, add1, add2) => {
	copyInput = input.slice()
	copyInput[1] = add1
	copyInput[2] = add2
	
	currentOptCode = 0
	halt = false;
	pointer = 0
	
	tempArray = copyInput.map((curV, index, array)=>{
		if(currentOptCode !== 99){
			switch(pointer){
				case 0:
					pointer++;
					currentOptCode = curV;
					return curV;
				case 1:
					pointer++;
					return array[curV];
				case 2:
					pointer++;
					return array[curV];
				case 3:
					pointer = 0;
					if (currentOptCode === 1) {
						array[curV] = array[array[index-2]] + array[array[index-1]]
						return array[index]
					} else {
						array[curV] = array[array[index-2]] * array[array[index-1]]
						return array[index]
					} 
				default:
					return curV
			}
		} else {
			return curV
		}
	})
	return copyInput
}

console.log(intCode(input,12,2)[0])

//Part2
const expOutput = 19690720;
let noun = 0;
let verb = 0;

for(x=0;x<=99;x++){
	for(y=0;y<=99;y++){
		intOutput = intCode(input,x,y)
		if(intOutput[0]===expOutput){
			noun = intOutput[1];
			verb = intOutput[2];	
		}
	}
}

console.log(100*noun + verb)
