const ANIMATION_STEP_DURATION = 50; 
const MAZE_DIMENSIONS = 28;
const DRAW_COLOR = "#DC143C";

let counter = 0;
let interval;
let ctx;

const path = [
    [13.5, 0.5],
    [-1, 0],
	[-0.75, 0],
    [0, 1],
	[0, 1],
	[1, 0],
	[0.75, 0],
	[0, 1],
	[-1, 0],
	[0, 1],
	[0, 0.75],
	[-1, 0],
	[-1, 0],
	[-0.75, 0],
	[0, -1],
	[-0.75, 0],
	[0, -1],
	[0, -1],
	[0, -0.75],
	[0, -1],
	[-1, 0],
	[0, 1],
    [-1, 0],
	[0, 1],
	[1, 0],
	[0, 1],
	[-1, 0],
	[0, 1],
	[0, 1],
	[0, 0.75],
	[-1, 0],
	[0, 0.75],
	[1, 0],
	[0, 1],
	[0, 1],
	[0, 0.75],
	[1, 0],
	[0, -1],
	[0, -0.75],
	[1, 0],
	[1, 0],
	[0, 1],
	[1, 0],
    [0.75, 0],
	[0, 1],
	[-1, 0],
	[0,0.75],
	[-1, 0],
	[0, 1],
	[1, 0],
	[0,1],
	[0,1],
	[0,1],
	[0,0.75],
	[1,0],
	[1,0],
	[1,0],
	[0.75,0],
	[0,1],
	[-1,0],
	[0,0.75],
	[1,0],
	[1,0],
	[0.75,0],
	[0,1],
	[1,0],
	[0,1],
	[-1,0],
	[0,1],
	[-1,0],
	[-0.75,0],
	[0,1],
	[0,1],
	[0,1],
	[0,0.75],
	[0,0.75],
	[0.85,0],
	[0,-1],
	[0,-1],
	[0,-0.75],
	[1,0],
	[1,0],
	[0.75,0],
	[0,1],
	[0,1],
	[0.85,0],
	[0,-1],
	[1,0],
	[0,0.75],
	[1,0],
	[0,1],
	[0,1],
	[-1,0],
	[0,-1],
	[-1,0],
	[0,1],
	[-0.75,0],
	[0,-1],
	[-1,0],
	[0,-1],
	[-0.85,0],
	[0,1],
	[0,1],
	[1,0],
	[0,1],
	[-1,0],
	[0,1],
	[-1,0],
	[0,-1],
	[0,-1],
	[-1,0],
	[-0.75,0],
	[0,1],
	[0,1],
	[1,0],
	[0,1],
];

function draw(drawPath = false) {
    const img = document.getElementsByTagName('img')[0];

    const canvas = document.getElementById('sketch');
    ctx = canvas.getContext('2d');

    canvas.width = img.width;
    canvas.height = img.height;

    const w = canvas.width;
    const h = canvas.height;

    counter = 0;
    if (interval) {
        clearInterval(interval);
    }

    if (drawPath) {
        interval = setInterval(animatePath, ANIMATION_STEP_DURATION);
    } else {
        interval = setInterval(animateObject, ANIMATION_STEP_DURATION);
    }

    function animatePath() {
        if (counter >= path.length) return;

        let x = 0;
        let y = 0;

        ctx.clearRect(0, 0, w, h);
        ctx.moveTo(x, y);
        ctx.strokeStyle = DRAW_COLOR;
        ctx.beginPath();
        ctx.lineWidth = 5;

        for (let i = 0; i <= counter; i++) {
            x += path[i][0] * (w / MAZE_DIMENSIONS);
            y += path[i][1] * (h / MAZE_DIMENSIONS);
            ctx.lineTo(x, y)
        }
        ctx.stroke();
        counter++;
    }

    function animateObject() {
        if (counter >= path.length) return;

        let x = 0;
        let y = 0;

        ctx.clearRect(0, 0, w, h);
        ctx.moveTo(x, y);
        ctx.beginPath();

        for (let i = 0; i <= counter; i++) {
            const size = ctx.canvas.width / MAZE_DIMENSIONS - 10;
            x += path[i][0] * (w / MAZE_DIMENSIONS);
            y += path[i][1] * (h / MAZE_DIMENSIONS);

            if (i === counter - 1) {
                ctx.moveTo(x, y);
                ctx.fillStyle = DRAW_COLOR;
                ctx.fillRect(x - size / 2, y - size / 2, size, size);
            }
        }

        ctx.stroke();
        counter++;
    }
}