let maze = new Maze(50, 50);
let maze_drawer = new MazeDrawer(maze, [10, 10], stroke_weight=1)
let maze_canvas;

function setup() {
    createCanvas(1020, 1020);
    maze_canvas = createGraphics(1020, 1020);
    maze.set_rule_valid_cell((itm, index) => {
        let [x, y] = maze.get_cell_coord(index);
        return Math.pow((x - 25), 2) + Math.pow((y - 25), 2) < 650
    })
    RandomDFS.run(maze, 675);
}

function draw() {
    maze_drawer.draw(maze_canvas);
    image(maze_canvas, 0, 0);
}
