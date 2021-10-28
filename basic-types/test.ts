console.log("hello");

let a: number = 4;
let b: string = "fdsfsd"
let c = true;

let d: string[] = ['sdsfdsa','fdafsd'];

let e: any = 3;
e = 'fdsfsd';

function test(a: string): number | string {
	return '';
}

const test2 = (a:number): void => {
	return;
}

d = d.map((item:string)=> item.toLowerCase());

function countCoordinates(cord: {lat:number, long?: number}) {

}

function printIt(id: number | string) {
	if (typeof id === "number") {
		console.log(id.toString());
	}
	else if (typeof id === 'string') {
		id.toUpperCase()
	}
	
}

function getSum(a: number | number[]) {
	if (Array.isArray(a)) {
	}
}

const x: undefined = undefined;
const z:null = null;