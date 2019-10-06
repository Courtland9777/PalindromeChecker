function palindrome(str) {

	let front = 0
	let back = str.length - 1

		//back and front pointers won't always meet in the middle.
		while (back > front) {
			
			//increments front pointer if current character doesn't meet criteria
			if ( str[front].match(/[\W_]/) ) {
				front++
				continue
			}
			
			//decrements back pointer if current character doesn't meet criteria
			if ( str[back].match(/[\W_]/) ) {
				back--
				continue
			}
		
			//finally does the comparison on the current character
			if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false
			
			front++
			back--
		}

	//It's a palindrome!
	return true

}