AFRAME.registerComponent("mazify", {

    init: function () {
        const mapTable = {
            1: {
                value: "W",
                description: "墙，不可穿越",
                label: "Wall",
                type: 1
            }, 2: {
                value: 'S',
                description: "起点",
                label: "Start",
                type: 2
            }, 3: {
                value: 'E',
                description: "终点",
                label: "End",
                type: 3
            }, 4: {
                value: 'B',
                description: "空地，自由移动",
                label: "Blank",
                type: 4
            }
        }
        let mazeData = {
            data: [
                [1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1],
                [1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 4, 1, 4, 1, 4, 1, 4, 1, 1, 1],
                [1, 4, 4, 1, 4, 4, 4, 1, 1, 1, 4, 1, 4, 1, 4, 1, 4, 4, 1, 1],
                [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1],
                [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1],
                [1, 4, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1],
                [1, 4, 4, 1, 4, 4, 1, 1, 1, 1, 4, 4, 4, 1, 4, 4, 4, 4, 1, 1],
                [1, 4, 4, 1, 4, 4, 1, 4, 4, 1, 1, 4, 4, 1, 1, 1, 4, 4, 4, 1],
                [1, 4, 4, 1, 4, 4, 1, 4, 4, 4, 1, 4, 4, 1, 4, 4, 4, 1, 4, 1],
                [1, 4, 4, 1, 4, 4, 1, 4, 4, 4, 1, 4, 4, 1, 4, 4, 4, 1, 1, 1],
                [1, 4, 4, 1, 1, 1, 1, 4, 4, 4, 1, 4, 4, 1, 4, 4, 4, 4, 1, 1],
                [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1],
                [1, 4, 1, 4, 4, 1, 1, 1, 4, 4, 4, 1, 4, 4, 4, 4, 4, 4, 1, 1],
                [1, 4, 1, 1, 4, 4, 4, 1, 4, 4, 4, 1, 4, 4, 4, 4, 4, 1, 1, 1],
                [1, 4, 4, 1, 4, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 4, 1],
                [1, 4, 4, 4, 1, 1, 1, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 1, 1, 1],
                [1, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1],
                [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 4, 1, 4, 4, 4, 4, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ],
            height: 0,
            width: 0,
            endNumber: 6,
            startNumber: 1
        }
        mazeData.width = mazeData.data.length;
        mazeData.height =  mazeData.data[0].length;

        for(let i=0;i<mazeData.data.length;i++){
            for(let j=0;j<mazeData.data[0].length;j++){
                if(i===0 || i===(mazeData.data.length-1) ||j===0 || j=== (mazeData.data[0].length-1)){//设置墙
                    mazeData.data[i][j]=1;
                    // console.log('wall');
                }else{//设置空地
                    mazeData.data[i][j]=4;
                    // console.log('blank');

                }
            }
        }
        // console.error('mazeData.data',mazeData.data);
       
        const el = this.el;
        const maze_size = 2;
        const maze_height = 12;

        for (let y = 0; y < mazeData.width; y++) {
            for (let x = 0; x < mazeData.height; x++) {
                const objType = mazeData.data[x][y];
                // console.log('objType', objType);
                const position = {
                    x: ((x - (mazeData.width / 2)) * maze_size),
                    y: 1.5,
                    z: (y - (mazeData.height / 2)) * maze_size
                };
                // 可以用mapTable上的数据，把它放在全局
                if (objType === mapTable[1].type) {// 1-wall，2-起点，3-终点，4-空地
                    let wall = document.createElement('a-box');
                    wall.setAttribute('width', maze_size);
                    wall.setAttribute('height', maze_height);
                    wall.setAttribute('depth', maze_size);
                    wall.setAttribute('position', position);
                    wall.setAttribute('color', '#fff');
                    wall.setAttribute('material', 'src: #ball; repeat:1 2');
                    wall.setAttribute('static-body', '');
                    el.appendChild(wall);
                }
            }
        }
    }
})

