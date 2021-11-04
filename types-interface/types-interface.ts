type Point = {
	x: number,
	y: number,
}

type D3Point = Point & {
	z:number,
} 

interface InterfacePoint {
	x: number,
	y: number,
}
// dazniausiai naudojame interface

type stringOrNumber = string | number;

interface interface3DPoint extends InterfacePoint {
	z: number
}

const something = (point: InterfacePoint) => {
	const d: interface3DPoint = point as interface3DPoint;
}

const myCanvas = document.getElementById("canvas") as HTMLCanvasElement;



function print(coord: Point) {
}

function print2(coord: InterfacePoint) {
}

interface Test {
	a:number;
}
interface Test {
	b:number;
}

