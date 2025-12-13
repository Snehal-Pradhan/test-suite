/// activity 1

// determinism and compression


/*
*
*  lets make a simple toy hash, an ASCII based toy hash.
*  the rule will be like this :
*  the string for example "HelloWorld!"
*  will be hashed in this way:
*
*  sum of character code of <input> => mod 100 => our hash !!!
*
*
*
*  CONCLUSION:
*   look in this toy hash algo the hashed outputs will always be
*   between 0 and 99.
*
*   this means a lot of "inputs" will have the same output hash.
*   this thing is called ----> collision
*
*   also the hashing algo pattern should not be predictable as in this case.
*   can case issues regarding security.
*
* **/

function toyHash(input:string):number{
    if (input.length === 0){
        return -1
    }
    let hash= 0;
    for(let i = input.length - 1; i >= 0 ;i--){
        hash += input.charCodeAt(i);
    }
    return hash%100;
}

console.log(toyHash("Hello World!"));
console.log(toyHash("ts is much better than js"));
console.log(toyHash("coding is love"));
console.log(toyHash("abc abc and def def why not xyz xyz"));
console.log(toyHash("Gd"));

