<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>QueueTest</title>
    <style>
        *{
            margin: 0px;
            padding: 0px;
        }
        #container{
            float:left;
            width: 1200px;
            height: 800px;
            background-color: antiquewhite;
        }
        .box{
            float:left;
            margin:5px;
            border:1px red solid ;
        }
    </style>
    <script src="https://github.com/heaven2049/TaskQueue/blob/master/TaskQueue.js" type="text/javascript"></script>
</head>
<body>
    <main>
        <div id="container">
        </div>
        <div id="app">
            <input type="number" id="txt_num" placeholder="添加元素数量" value="100"/>
            <br>
            <input type="button" id="btn_add" value="添加元素"/>
            <br>
            <input type="checkbox" id="check"/>使用队列
        </div>
    </main>
    <script>
        var queue = new TaskQueue();
        var elementsNum = 100;
        var index = 0 ;
        var boxIndex = 0 ;
        var checkbox = document.getElementById("check");
        var container = document.getElementById("container");
        var txt_num = document.getElementById("txt_num");
        var words = 'abcdefghijklmnopqrstuvwrstuvdfalkfjalfjadlkfa;';
        addEventListener("click",onClick);
        function onClick(event) {
            if(event.target)
            {
                if(event.target.id === "btn_add"){
                    addAllElements();
                }
            }
        }

        function addAllElements() {
            elementsNum = txt_num.value;
            index = 0 ;
            boxIndex = 0 ;
            if(checkbox.checked){
                queue.addHandler(addElement,1);
                queue.addHandler(addBoxElement,1);
            }else {
                var i = 0;
                while(i<elementsNum){
                    addElement();
                    i++;
                }
            }
        }
        function addElement() {
            index++;
            var box = document.createElement("p");
            box.className = "box";
            box.innerHTML = words.slice(Math.random()*words.length);
            container.appendChild(box);
            return index > elementsNum;
        }

        function addBoxElement() {
            boxIndex++;
            var box = document.createElement("p");
            box.className = "box";
            box.innerHTML = "abcd";
            container.appendChild(box);
            return boxIndex > elementsNum;
        }
    </script>
</body>
</html>
