particle current;

void setup(){
	size(600,600);
	current = new particle(600,0)
}

void draw(){
	background(0);
	current.update();
	current.show();
}