            // Code copied and adapted from 
            // https://medium.com/better-programming/implementing-a-stack-in-javascript-73d1aa0483c1
            
            class Stack {
                    constructor(){
                        this.data = [];
                        this.top = 0;
                    }
                    push(element) {
                      this.data[this.top] = element;
                      this.top = this.top + 1;
                    }
                   length() {
                      return this.top;
                   }
                   peek() {
                      return this.data[this.top-1];
                   }
                   isEmpty() {
                     return this.top === 0;
                   }
                   pop() {
                    if( this.isEmpty() === false ) {
                       this.top = this.top - 1;
                       return this.data.pop(); // removes the last element
                     }
                   }
                   print() {
                      var top = this.top - 1; // because top points to index where new    element to be inserted
                      while(top >= 0) { // print upto 0th index
                          console.log(this.data[top]);
                           top--;
                       }
                    }
                   contents() {
                      var top = this.top - 1; // because top points to index where new    element to be inserted
                      var c = ""
                      while(top >= 0) { // print upto 0th index
                          console.log(this.data[top]);
                          c = c + this.data[top] + '<br>'
                           top--;
                       } return (c)
                    }
                   contentsArray() {
                      var top = this.top - 1; // because top points to index where new    element to be inserted
                      var c = []
                      while(top >= 0) { // print upto 0th index
                          //console.log(this.data[top]);
                          c.push(this.data[top])
                           top--;
                       } return (c)
                    }
                   reverse() {
                       this._reverse(this.top - 1 );
                    }
                    _reverse(index) {
                       if(index != 0) {
                          this._reverse(index-1);
                       }
                       console.log(this.data[index]);
                    }
                }