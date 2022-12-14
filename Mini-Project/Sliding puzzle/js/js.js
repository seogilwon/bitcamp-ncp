var container = document.querySelector('#cells');
var btn = document.querySelector('#Shuffle');

        let num = 16;
        let win = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0"
        let nums = []

        createcell();
        reflash();
        matching();

        btn.onclick = () => {
            reflash();
            matching();
        }

        function createcell() {
            for (let a = 1; a <= num; a++) {
                var newcell = document.createElement('div');
                newcell.id = `div${a}`;
                newcell.setAttribute('index', a);
                newcell.innerHTML = a;
                newcell.classList.add('div');
                newcell.addEventListener('click', function() {
                    change(parseInt(this.getAttribute('index')));
                    console.log(this.getAttribute('index'));
                });
                container.append(newcell);
            }
            selectedCellId = 'div' + num;
            selectedCell = document.getElementById(selectedCellId);
            selectedCell.classList.add("selected");
        }

        function fn(value, index) {
            value.innerText = nums[index];
        }

        function matching() {
            document.querySelectorAll(".div").forEach(fn);

            setInterval(unmatching, 200)
        }

        
        
        
        function reflash() {
            nums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            let i = 0;
            while(i < 15) {
                let r = ran();
                if(!nums.includes(r)) {
                    nums[i] = r;
                    i++
                    document.querySelectorAll(".div").innerText = r;
                }
            }
        }

        function change(clicked) {
            if (clicked < 1 || clicked > 16) {
                return;
            }

            if (clicked == num + 1) {
                if (clicked % 4 != 1) {
                    select(clicked);
                }
            } else if (clicked == num - 1) {
                if (clicked % 4 != 0) {
                    select(clicked);
                }
            } else if (clicked == num + 4) {
                select(clicked);
            } else if (clicked == num - 4) {
                select(clicked);
            }
            
        }

        function wincheck() {
            if(nums.toString() == win) {
                alert("Win!");
                reflash();
                matching();
            }
        }

        function select(index) {
            oldCell = document.getElementById(`div${num}`);
            oldCellText = oldCell.innerHTML;
            oldCell.classList.remove('selected');
            newCell = document.getElementById(`div${index}`);
            oldCell.innerHTML = newCell.innerHTML;
            newCell.innerHTML = oldCellText;
            newCell.classList.add("selected");
            num = index;
        }

function ran() {
    return Math.floor(Math.random()*15)+1 // 1~15
}

function unmatching() {
    document.querySelectorAll(".div").forEach((value, index) => {
        nums[index] = parseInt(value.innerText);
    })
}